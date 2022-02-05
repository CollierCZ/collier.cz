# Reveal-Vite presentations

This is a very basic implementation of [Reveal.js](https://revealjs.com/) put together with [Vite](https://vitejs.dev/).
It also uses [TypeScript](https://www.typescriptlang.org/).

The presentations can even be written in Markdown.
Use `---` to separate slides and `Note:` to mark sections for speaker notes.

## Add a new presentation

To add a new presentation, add a new HTML file in the `slides` directory copying an existing file.
Replace the Markdown inside the `<textarea data-template>` tag with new text.

To add it to the list of presentations, edit the [index.html](./index.html) file at the root of this directory.
