import { $W, $T, $V, $I, V, T, I, TTyped } from 'reactxx-typings'
import { getTypedUtils } from 'reactxx-sheeter'

const toClassNames = <R>(...rules: R[]) => null as R

const atomizeRuleset = <R extends TTyped.RulesetIds>(...r: TTyped.TAllowedInput<R>[]) => null as TTyped.TAllowed<R>

const { $themed, $if, $web, $native, $rules } = getTypedUtils<{ enabled }, { primary }>()

// COMPONENT example

const sheet4 = $themed(theme => ({
  root: $rules<V>(
    $if<V>(p => p.enabled, { backgroundColor: theme.primary })
  )
}))

const sheet3 = {
  root: $rules<V>(
    {
      margin: 0,

    },
    $web<V>(
      {},
      $if<$W>(null),
      {
        cursor: '',
        ':hover': $if<$W>(null),
        ':active': [
          $if<$W>(null),
        ]
      }
    ),
    $native<V>(),
  ),
  label: $rules<T>(
    $if<T>(null, { color: '' }),
    $if<V>(null),
    $web<T>()
  ),
  image: $rules<I>(
    $if<I>(null),
    $web<I>()
  ),
  webOnly: $rules<$W>(
    $if<$W>(null),
  ),
  nativeOnly: $rules<$V>(
    {
      transform: []
    },
    $if<$V>(null, { transform: [] }),
    $if<V>(null),
  ),
  nativeOnlyImage: $rules<$I>(
    $if<$I>(null),
    $if<I>(null),
  ),
  nativeOnlyText: $rules<$T>(
    $if<$V>(null, {}),
    $if<V>(null),
    $if<$T>(null, { color: '' }),
    $if<T>(null),
  ),
}

const root = toClassNames(sheet3.root, sheet3.webOnly)
const nativeOnly = toClassNames(sheet3.root, sheet3.nativeOnly)
const webOnly = toClassNames(sheet3.root, sheet3.webOnly)
const webOnly2 = toClassNames(sheet3.root, sheet3.webOnly)
const label = toClassNames(sheet3.label, atomizeRuleset<V>({}))
const image = toClassNames(sheet3.image)

const Text: TTyped.TPlatformAllowed<T> = root
const View: TTyped.TPlatformAllowed<V> = webOnly2
const View3: TTyped.TPlatformAllowed<V> = nativeOnly
const Image: TTyped.TPlatformAllowed<I> = image
//const View2: TPlatformAllowed<V> = label // ERROR
const div: TTyped.TPlatformAllowed<$W> = root
//const span: TPlatformAllowed<$W> = nativeOnly // ERROR
const i: TTyped.TPlatformAllowed<$W> = webOnly

const C: TTyped.TComponentAllowed<T> = label

