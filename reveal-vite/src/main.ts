import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import Notes from 'reveal.js/plugin/notes/notes'

const deck = new Reveal({
  plugins: [ Highlight, Markdown, Notes ]
})
deck.initialize({
  hash: true,
  slideNumber: false,
  markdown: {
    smartypants: true
  },
})
