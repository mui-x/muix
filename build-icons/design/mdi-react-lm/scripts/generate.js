const fs = require('fs');

const outputPath = 'd:/muix/build-icons/';
const subDirWeb = 'deploy/';
const subDirNative = 'deploy/es/';

const pathRegex = /\sd="(.*)"/;

const svgFiles = fs.readdirSync(`${__dirname}/../mdi/svg`);

//const webTSDef = []
//const nativeTSDef = []
const currentTSDef = []
const webEnum = []
const nativeEnum = []
const nativeConst = []

for (let svgFile of svgFiles) {
  const name = svgFile.split(/-/g).map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('').slice(0, -4);
  const value = svgFile.slice(0, -4);

  const content = fs.readFileSync(`${__dirname}/../mdi/svg/${svgFile}`);
  const pathMatches = pathRegex.exec(content);
  const path = pathMatches && pathMatches[1];
  // Skip on empty path
  if (!path) continue;

  const fileContent =
    `(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.${name} = '${path}';
});
`

  fs.writeFileSync(`${outputPath}${subDirWeb}${name}.js`, fileContent);

  //webTSDef.push(`declare module 'muix-icons/web/${name}' { export const ${name}: MDI.icons }`);
  //nativeTSDef.push(`declare module 'muix-icons/native/${name}' { export const ${name}: MDI.icons }`);
  currentTSDef.push(`declare module 'muix-icons/${name}' { export const ${name}: MuixIcons }`);
  webEnum.push(`${name} = '${path}',`);
  nativeEnum.push(`${name} = '${value}',`);
  nativeConst.push(`export const ${name} = '${value}';`);


  fs.writeFileSync(`${outputPath}${subDirWeb}typings.d.ts`, `
declare const enum MuixIcons {
${webEnum.join('\n')}
}
`);

  fs.writeFileSync(`${outputPath}${subDirWeb}index.d.ts`, `
${currentTSDef.join('\n')}
`);

  fs.writeFileSync(`${outputPath}${subDirNative}index.d.ts`, `
${currentTSDef.join('\n')}
`);

  fs.writeFileSync(`${outputPath}${subDirNative}typings.d.ts`, `
declare const enum MuixIcons {
${nativeEnum.join('\n')}
}
`);

  fs.writeFileSync(`${outputPath}${subDirNative}index.js`, `
${nativeConst.join('\n')}
`);
}