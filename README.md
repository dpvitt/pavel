# pavel

This is a collection of UI components constructed with HTML, CSS and Javascript. Each component should be progressively enhanced and meet accessibility requirements. For example, the Carousel components starts out as a Hero element until JS is enabled and loads in extra functionality, it also has ARIA roles that indicate what item in the carousel is currently selected.

You can find examples of different UI components in the *examples/* directory, it will have a related JS module in the *js/modules/* folder and a related set of styles in *scss/modules/*. Each component should have passing unit tests and use the provided helpers module wherever possible.

The application can be served by running *'gulp serve'* from your bash shell. You can run unit tests seperately by running *'gulp test'*.