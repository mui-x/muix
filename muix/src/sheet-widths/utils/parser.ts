import warning = require('warning');

export const maxBreakpoint = 10000000

export const parse = (encoded: string) => {
    warning(regx.test(encoded), `Found '${encoded}, expected e.g '-640' or '1024-' or '640-1024'`)
    return encoded.split('-').map((i, idx) => i ? parseInt(i) : idx == 0 ? 0 : maxBreakpoint) as [number, number]
}
const regx = /^\d+-\d+|-\d+|\d+-$/

export const intervalToSelector = (encoded: string) => {
    const [from, to] = parse(encoded)
    if (from === 0) return `@media (max-width: ${to - 1}px)`
    if (to === maxBreakpoint) return `@media (min-width: ${from}px)`
    return `@media (min-width: ${from}px) and (max-width: ${to - 1}px)`
}


