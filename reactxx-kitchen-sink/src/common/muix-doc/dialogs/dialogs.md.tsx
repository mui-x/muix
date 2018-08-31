//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------


const code = `

# Dialogs

### Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

A [Dialog](https://material.io/design/components/dialogs.html) is a type of [modal](/utils/modal) window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.

## Simple Dialogs

Simple dialogs can provide additional details or actions about a list item.
For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).

Touch mechanics:
- Choosing an option immediately commits the option and closes the menu
- Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog

!ReactxxDocExample[dialogs/SimpleDialog]

## Alerts

Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.

Most alerts don't need titles.
They summarize a decision in a sentence or two by either:
- Asking a question (e.g. "Delete this conversation?")
- Making a statement related to the action buttons

Use title bar alerts only for high-risk situations, such as the potential loss of connectivity.
Users should be able to understand the choices based on the title and button text alone.

If a title is required:

- Use a clear question or statement with an explanation in the content area, such as "Erase USB storage?".
- Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you sure?”

!ReactxxDocExample[dialogs/AlertDialog]

You can also swap out the transition, the next example uses \`Slide\`.

!ReactxxDocExample[dialogs/AlertDialogSlide]

## Confirmation dialogs

Confirmation dialogs require users to explicitly confirm their choice before an option is committed.
For example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”

Touching “Cancel” in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.

!ReactxxDocExample[dialogs/ConfirmationDialog]

## Full-screen dialogs

!ReactxxDocExample[dialogs/FullScreenDialog]

## Form dialogs

Form dialogs allow users to fill out form fields within a dialog.
For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'

!ReactxxDocExample[dialogs/FormDialog]

## Responsive full-screen

You may make a \`Dialog\` responsively full screen the dialog using \`withMobileDialog\`. By default, \`withMobileDialog()(Dialog)\` responsively full screens *at or below* the \`sm\` [screen size](/layout/basics). You can choose your own breakpoint for example \`xs\` by passing the \`breakpoint\` argument: \`withMobileDialog({breakpoint: 'xs'})(Dialog)\`.

!ReactxxDocExample[dialogs/ResponsiveDialog]

## Accessibility

Be sure to add \`aria-labelledby="id..."\`, referencing the modal title, to the \`Dialog\`. Additionally, you may give a description of your modal dialog with the \`aria-describedby="id..."\` property on the \`Dialog\`.

## Scrolling long content

When dialogs become too long for the user’s viewport or device, they scroll.
- \`scroll=paper\` the content of the dialog scrolls within the paper element.
- \`scroll=body\` the content of the dialog scrolls within the body element.

Try the demo below to see what we mean:

!ReactxxDocExample[dialogs/ScrollDialog]
`
export default code
    