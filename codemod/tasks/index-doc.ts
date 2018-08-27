// D:\reactxx\muix\src\ks\common\muix-doc\grid-list\TitlebarGridList.tsx, wrong title

import generate from '@babel/generator';
import { parse, parseExpression } from '@babel/parser';
import * as fsExtra from 'fs-extra';
import { readAllCodes } from '../utils/readAllCodes'
import * as Ast from '../utils/ast';
import * as Config from '../utils/config';
import * as Queries from '../utils/queries';
import { cssjsToFelaLow } from './ast/cssjs-to-fela';
import { replaceAll, processMatchAll } from '../utils/regexp';

export const codeModDoc = () => {

    Config.setIsDoc(true)

    const { log, codeStr } = readAllCodes()

    try { fsExtra.emptyDirSync(Config.muiWeb) } catch { }

    // refresh list of all example files (save to ./doclist.ts)
    // const _ignoreAll = {}
    // Object.keys(log).forEach(k => _ignoreAll[k] = true)
    // const ignoreAllStr = JSON.stringify(_ignoreAll, null, 2)

    const exampleGroups: { [group: string]: string[] } = {}

    for (const path in log) {
        const info = log[path]

        console.log(info.path)

        // ignore some examples
        if (ignores[path]) continue

        // code string modification
        let code = codeStr[path]
        code = codeModAst(code, path)
        code = codeModFile(code, path)

        // output code
        fsExtra.outputFileSync(info.destPath + '.tsx', Config.msgAutoGenerated + code);

        // register example
        if (info.name.charAt(0).toUpperCase() === info.name.charAt(0))
            (exampleGroups[info.dir] || (exampleGroups[info.dir] = [])).push(info.name)
    }

    // fsExtra.copySync(Config.muix_WebSources, Config.muiWeb, { overwrite: true })
    // fsExtra.copySync(Config.reactxx + 'src/typings.d.ts', Config.muiWeb + 'typings.d.ts', { overwrite: true })


    // generate index.ts files
    const templateImports = []
    for (const p in exampleGroups) {
        const examples = exampleGroups[p]
        const imports = examples.map(e => `import ${e} from './${e}'`).join('\n')
        const comps = examples.map(e =>
            `<h2>${e}</h2>
<div style={{flexShrink: 0}}>
  <${e}/>
</div>
`).join('\n')
        const code =
            `
import React from 'react';

${imports}

const App: React.SFC = () => <div style={{padding: 30, overflow:'auto'}}>
  ${comps}
</div>

export default App
`
        const fn = `${Config.muiWeb}${p}/index.tsx/`
        templateImports.push(`import App from '../common/muix-doc/${p}/index'`)
        fsExtra.outputFileSync(fn, code)
    }
    const templateImport = templateImports.join('\n')
}

const codeModAst = (code: string, path: string) => {
    let root; const start = () => root = parseCodeLow(code); const end = () => generateCode(root)
    switch (path) {
        case 'buttons/ButtonBases':
            start()
            let sheet = Queries.checkSingleResult(Ast.astq().query(root, '// VariableDeclaration/VariableDeclarator [ /Identifier [@name == "styles"] ]'))
            cssjsToFelaLow(sheet, { destPath: path })
            return end()
        default:
            return code
    }
}

const parseExpressionLow = (code: string) => parseExpression(code, { plugins: ['jsx', 'objectRestSpread', 'classProperties', 'typescript'] });
const parseCodeLow = (code: string) => parse(code, { sourceType: 'module', plugins: ['jsx', 'objectRestSpread', 'classProperties', 'typescript'] });
const generateCode = (ast: Ast.Ast) => generate(ast, { /* options */ }).code as string

const codeModFile = (code: string, path: string) => {
    switch (path) {
        case 'autocomplete/IntegrationDownshift':
            code = processMatchAll(/startAdornment(\s|.)*?(}\),)/g, code, (match, res) => res.push(code.substr(match.index, match[0].length - 3) + '} as any),'))
            break
        case 'buttons/CustomizedButtons':
        case 'text-fields/CustomizedInputs':
            code = code.replace(`import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';`,
                `import { ThemeProvider } from 'reactxx-basic';
import createMuiTheme from 'reactxx-mui-web/styles/createMuiTheme';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'`)
            code = replaceAll(code, '<MuiThemeProvider theme={theme}>', '<ThemeProvider theme={theme as any}>')
            code = replaceAll(code, 'MuiThemeProvider', 'ThemeProvider')
            break
        case 'menus/MenuListComposition':
            code = replaceAll(code, `  handleToggle = () => {`, `  anchorEl\n  handleToggle = () => {`)
            code = replaceAll(code, 'id="menu-list-grow"', '{...{id:"menu-list-grow"}}')
            code = styleToWebStyle(code, 'transformOrigin')
            break
        case 'snackbars/ConsecutiveSnackbars':
        case 'snackbars/SimpleSnackbar':
            code = replaceAll(code, 'handleClose = (event, reason)', 'handleClose = (event, reason?)')
            break
        case 'steppers/HorizontalLinearStepper':
        case 'steppers/HorizontalNonLinearStepperWithError':
            code = replaceAll(code, 'const props = {};', 'const props: any = {};')
            code = replaceAll(code, 'const labelProps = {};', 'const labelProps: any = {};')
            break
        case 'steppers/HorizontalNonLinearAlternativeLabelStepper':
            code = replaceAll(code, 'const props = {};', 'const props: any = {};')
            code = replaceAll(code, 'const buttonProps = {};', 'const buttonProps: any = {};')
            break
        case 'tables/CustomPaginationActionsTable':
            code = replaceAll(code, '(\n  TablePaginationActions,\n);', '(TablePaginationActions);')
            break
        case 'tables/EnhancedTable':
            code = replaceAll(code, 'let EnhancedTableToolbar = ', 'let EnhancedTableToolbar: any = ')
            break
        case 'selects/MultipleSelect':
            code = replaceAll(code, 'renderValue={selected =>', 'renderValue={(selected: any) =>')
            //code = styleToWebStyle(code, 'transitionDelay')
            //code = processMatchAll(/style={{(\s|.)*?(}})/g, code, (match, res) => res.push(code.substr(match.index, match[0].length - 3) + '} as any}'))
            break
        case 'progress/CircularIndeterminate':
            code = replaceAll(code, '{ color: purple[500] }', '{ color: purple[500] } as any')
            break
        case 'tables/CustomizedTable':
            const endPart = '}))(TableCell);'
            code = processMatchAll(/withStyles\(theme(\s|.)*?(}\)\)\(TableCell\);)/g, code, (match, res) => res.push(code.substr(match.index, match[0].length - endPart.length) + '} as any), TableCell as any)() as typeof TableCell;'))
            code = replaceAll(code, 'const CustomTableCell = withStyles(', 'const CustomTableCell = withStylesCreator(')
            break
        case 'buttons/FloatingActionButtonZoom':
            code = code.replace('const { classes, theme } = this.props;', 'const { classes, $system: {theme} } = this.props;')
            code = code.replace('color={fab.color}', 'color={fab.color as any}')
            code = styleToWebStyle(code, 'transitionDelay')
            break
        case 'cards/MediaControlCard':
            code = code.replace('const { classes, theme } = props;', 'const { classes, $system: {theme} } = props;')
            break
        case 'chips/Chips':
            code = code.replace('href="#chip"', '{...{href:"#chip"}}')
            break
        case 'dialogs/ConfirmationDialog':
            code = code.replace('super();', 'super(props);')
            break
        case 'progress/DelayingAppearance':
            code = styleToWebStyle(code, 'transitionDelay')
            break
        case 'cards/ImgMediaCard':
            code = code.replace('height="140"', '{...{height:140}}')
            break
    }

    code = importComponents(code)
    code = importIcons(code)
    code = replaceWithStyles(code)

    code = replaceAll(code, '\n  state = {', '\n  state: any = {')
    code = replaceAll(code, `import { withStyles } from '@material-ui/core/styles';`, `import withStylesCreator from 'reactxx-mui-web/styles/withStyles'`)
    code = replaceAll(code, `.propTypes = {`, `['propTypes'] = {`)
    code = replaceAll(code, `extends React.Component {`, `extends React.Component<any,any> {`)
    code = replaceAll(code, `@material-ui/core/`, `reactxx-mui-web/`)
    code = replaceAll(code, `/static/images/`, `src/ks/common/muix/static/images/`)
    //************ CLASSNAMES
    code = code.replace(`import classNames from 'classnames';`, `import { classNames } from 'reactxx-basic';`)

    return code
}

const styleToWebStyle = (code: string, wrongPart: string) => {
    return processMatchAll(/style={{((\s|.)*?)}}/g, code, (match, res) => {
        if (match[1].indexOf(wrongPart) >= 0)
            res.push(`style={{ $web:{${match[1]}}}}`)
        else
            res.push(match[0])
    })
}


const importComponents = (example: string) => processMatchAll(importComponentRegExp, example, (match, res) => {
    let matchStr = example.substr(match.index, match[0].length - 2)
    res.push(matchStr.replace('@material-ui/core/', 'reactxx-mui-web/'))
    res.push('/')
    res.push(match[1])
    res.push("';")
})
const importComponentRegExp = /^import ([A-Z]\w+).*@material-ui\/core\/\w+';/gm

const importIcons = (example: string) => processMatchAll(importIconRegExp, example, (match, res) => {
    res.push(example.substr(match.index, match[0].length).replace('@material-ui/icons/', 'reactxx-icons/'))
})
const importIconRegExp = /^import .*@material-ui\/icons\//gm

const replaceWithStyles = (example: string) => processMatchAll(withStylesRegExp, example, (match, res) => {
    res.push(`withStylesCreator(${match[1]} as any, ${match[3]}${match[2]})();`)
})
const withStylesRegExp = /withStyles\((\w+)(.*?)\)\((\w+)\);$/gm

const ignores = {
    'autocomplete/IntegrationAutosuggest': true,
    'autocomplete/IntegrationReactSelect': true,
    'snackbars/CustomizedSnackbars': true,
    'chips/ChipsPlayground': true,
    'dialogs/ResponsiveDialog': true,
}