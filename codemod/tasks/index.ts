import * as Glob from 'glob'
import * as fs from 'fs'
import * as Config from '../utils/config'
import * as Queries from '../utils/queries'
import * as Ast from '../utils/ast'
import * as Parser from '../utils/parser'
import * as fsExtra from 'fs-extra';
import * as Tasks from './default-modifier'

import { registerButtonBase } from '../patch-code/ButtonBase/ButtonBase'
import { registerInput } from '../patch-code/Input/Input'
import { registerNativeSelectInput } from '../patch-code/NativeSelect/NativeSelectInput'
import { registerSelectInput } from '../patch-code/Select/SelectInput'
import { registerGrid } from '../patch-code/Grid/Grid'
import { registerTabs } from '../patch-code/Tabs/Tabs'
import { registerCollapse } from '../patch-code/Collapse/Collapse'
import { registerInputLabel } from '../patch-code/InputLabel/InputLabel'

export type Specials = { [path: string]: Ast.FileDescr }

export const specials: Specials = {}

registerButtonBase(specials)
registerInput(specials)
registerNativeSelectInput(specials)
registerSelectInput(specials)
registerGrid(specials)
registerTabs(specials)
registerCollapse(specials)
registerInputLabel(specials)

export const codeMod = () => {

    const { log, codeStr } = readAllCodes()

    //try { fsExtra.rmdirSync(Config.reactxxMuiWebShapes) } catch { }
    //try { fsExtra.rmdirSync(Config.muiWeb_Typings) } catch { }

    for (const path in log) {
        const logp = log[path]
        const specItem = specials[path]
        let _code = codeStr[path]

        switch (path) {
            case 'ListItem/ListItem':
                _code = _code.replace('const className = classNames(', 'const className = classNamesAny(componentProp || "li",')
                break
            case 'GridListTile/GridListTile':
                _code = _code.replace(`\nimport`, `\nimport {fitPatch} from './GridListTilePatch';\nimport`)
                _code = _code.replace(`fit = () => {`, `  fit = fitPatch.bind(this)\n  fit_ = () => {`)
                break
        }
        const ast = Parser.parseCode(_code)

        // finish logItem
        logp.renderFunc = Queries.getNode_functionGlobal(ast, logp.name, true)
        if (!logp.renderFunc) {
            logp.renderFunc = Queries.getNode_classMethod(ast, logp.name, 'render', true)
            if (logp.renderFunc)
            logp.isClass = true
        }
        const withStylesOrWithTheme = (name: string) => Queries.checkSingleResult(Ast.astq().query(ast,
            `/Program/* [ //CallExpression/CallExpression/Identifier [ @name=="${name}" ] ]`), true)
        const withStyles = withStylesOrWithTheme('withStyles')
        const withTheme = withStylesOrWithTheme('withTheme')

        // ... and put it to log
        if (withTheme)
          logp.withTheme = true
        else if (withStyles)
          logp.withStyles = true

        //const transformStr = specItem && specItem.transformStr
        let transform = specItem && specItem.transform
        // if (transformStr) {
        //     if (!logp.origExists) fsExtra.moveSync(logp.srcPath, logp.origPath)
        //     const code = fs.readFileSync(logp.origPath, { encoding: 'utf-8' })
        //     fsExtra.outputFileSync(logp.srcPath, transformStr(code))
        // } else {
        if (!transform) {
            transform = specItem && specItem.transform
            if (!transform) {
                if (logp.withStyles) transform = Tasks.withStylesTaskDefaultCreator()
                else if (logp.withTheme) transform = Tasks.withThemeTaskDefaultCreator()
                else transform = Tasks.otherTaskDefaultCreator()
            }
        }
        if (!transform) continue
        if (!logp.origExists) fsExtra.moveSync(logp.srcPath, logp.origPath)
        //const ast = code[path]
        transform(ast, logp)
        Parser.generateFile(ast, logp.srcPath)
        //}
        // TS shape
        if (logp.withStyles && logp.name !== 'SwipeArea') {
            const ts = Config.muiWeb + path + '.d.ts'
            const ts_ = ts.replace('.d.ts', '_.d.ts')
            if (!fs.existsSync(ts_))
                //if (!Parser.canAutoGenerateFile(ts))
                fsExtra.moveSync(ts, ts_)
            fsExtra.outputFileSync(ts, tsShape(logp, !noKey[logp.name]), { flag: 'w' })
            // export TS
            fsExtra.outputFileSync(Config.muix_Web + path + '.ts',
                `${Config.msgAutoGenerated}
import Component from 'reactxx-mui-web/${logp.dir}/${logp.name}'

export * from 'reactxx-mui-web/${logp.dir}/${logp.name}'
export default Component
`, { flag: 'w' })
        } else if (logp.nameIsUppercase) {
            // export TS
            fsExtra.outputFileSync(Config.muix_Web + path + '.ts',
                `${Config.msgAutoGenerated}
import Component from 'reactxx-mui-web/${logp.dir}/${logp.name}'

export * from 'reactxx-mui-web/${logp.dir}/${logp.name}'
export default Component
`, { flag: 'w' })
        }
    }

    fsExtra.copySync(Config.muix_WebSources, Config.muiWeb, { overwrite: true })

}

// const tsProps = (dir: string, name: string) => `
// export { ${name}Props } from '../../mui-typings/${dir}/${name}';
// `
const tsShape = (info: Ast.MUISourceInfo, hasClassKey?: boolean) =>
    `${Config.msgAutoGenerated}
import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import { Theme } from '../styles/withStyles';
import { ${hasClassKey ? `${info.name}ClassKey, ` : ''}${info.name}Props } from './${info.name}_';

export * from './${info.name}_';
export type Shape = Types.OverwriteShape<{
  ${hasClassKey ? `common: TCommon.ShapeTexts<${info.name}ClassKey>,` : ''}
  props: ${info.name}Props,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export declare const styles: SheetCreatorX
export declare const defaultProps: PropsX
export declare const ${info.name}Code: CodeComponentType

declare const ${info.name}: React.${info.isClass ? 'ComponentClass' : 'ComponentType'}<PropsX>
export default ${info.name}
`
const noKey = {
    'Stepper': true,
    'StepLabel': true,
    'Step': true,
    'StepIcon': true,
    'StepContent': true,
    'StepConnector': true,
    'StepButton': true,
    'HiddenCss': true,
}


export const readAllCodes = () => {
    const log: { [path: string]: Ast.MUISourceInfo } = {}
    //const code: { [path: string]: Ast.Ast } = {}
    const codeStr: { [path: string]: string } = {}
    const compileErrors = []
    getAllComponents().forEach(comp => {
        const path = `${comp[0]}/${comp[1]}`
        // collect LOG info
        const logItem: Ast.MUISourceInfo = {
            dir: comp[0],
            name: comp[1],
            srcPath: Config.muiWeb + path + '.js',
            origPath: Config.patchOriginal + path + '.js',
        }
        logItem.origExists = fs.existsSync(logItem.origPath)
        const actPath = logItem.origExists ? logItem.origPath : logItem.srcPath

        // parse JS file
        let rootStr: string
        try {
            rootStr = fs.readFileSync(actPath, { encoding: 'utf-8' })
            //if (!Config.isDoc) root = Parser.parseCode(rootStr)
        } catch { compileErrors.push(actPath); return }
        //code[path] = root
        codeStr[path] = rootStr
        log[path] = logItem

        logItem.nameIsUppercase = logItem.name.charAt(0).toLowerCase() !== logItem.name.charAt(0)
    })
    //const dump = JSON.stringify(log, null, 2)
    //return { log, code, codeStr, compileErrors }
    return { log, codeStr, compileErrors }
}

const getAllComponents = () => {
    const root = Config.isDoc ? Config.patchOriginal : Config.muiWeb
    return Glob.sync('/**/!(index).js', { root: root }).
        map(f => f.substr(root.length)).
        //filter(f => f.charAt(0) === f.charAt(0).toUpperCase()).
        map(f => {
            let res: any[] = f.substr(0, f.length - 3).split('\\')
            if (res.length > 2) {
                const names = res.slice(1)
                res = [res[0], names.join('/')]
            }
            return res as [string, string]
        })
}
