//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------


const code = `

# Selects

### Select components are used for collecting user provided information from a list of options.

## Simple Select

Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.

!ReactxxDocExample[selects/SimpleSelect]

## Native Select

As the user experience can be improved on mobile using the native select of the platform,
we allow such pattern.

!ReactxxDocExample[selects/NativeSelects]

## Multiple Select

The \`Select\` component can handle multiple selections.
It's enabled with the \`multiple\` property.

Like with the single selection, you can pull out the new value by accessing \`event.target.value\` in the \`onChange\` callback. It's always an array.

!ReactxxDocExample[selects/MultipleSelect]

## With a Dialog

While it's discouraged by the Material Design specification, you can use a select inside a dialog.

!ReactxxDocExample[selects/DialogSelect]

## Text Fields

The \`TextField\` wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode [in this section](/demos/text-fields#textfield).

## Controlled open Select

!ReactxxDocExample[selects/ControlledOpenSelect]
`
export default code
    