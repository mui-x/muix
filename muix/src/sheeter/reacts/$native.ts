import React from 'react'
import { TComponents, TAtomize } from 'reactxx-typings'
/******************************************
  EXTEND REACT NATIVE
*******************************************/
declare module 'react-native' {
    interface ViewProperties extends TComponents.ReactsCommonProperties {
    }
    interface TextProperties extends TComponents.ReactsCommonProperties {
    }
    interface ImageProperties extends TComponents.ReactsCommonProperties {
    }
  }

  export const createElement = (type, props: TComponents.ReactsCommonProperties, ...children) => {
    if (!props) return React.createElement(type, props, ...children)
    // const { classNameX, styleX } = props
    // if (classNameX) {
    //     const compiled = Array.isArray(classNameX) ? classNames(...classNameX) : classNames(classNameX)
    //     delete props.classNameX
    //     props.className = normalizeValues(compiled)
    // }
    // const compiled = Array.isArray(props.css) ? classNames(...props.classNamex) : classNames(props.classNamex)
    // delete props.css
    // warning(!props.className, `Both "css" and "className" property used, className will be ignored`)
    return React.createElement(type, props, ...children)
}

  
// apply LAST WIN strategy for native style
const applyLastWinStrategy: TAtomize.ToPlatformClassName = (values, props) => {
  const res: TAtomize.NativeStyle= {}
  for (let k = values.length - 1; k >= 0; k--) {
      const value = values[k] as TAtomize.AtomicNative
      if (typeof res[value.propId] !== 'undefined') continue
      res[value.propId] = value.value
  }
  return res
}
