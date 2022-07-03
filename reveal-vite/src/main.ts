import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown';
import Highlight from 'reveal.js/plugin/highlight/highlight';

const deck = new Reveal({
  plugins: [ Highlight, Markdown ]
})
deck.initialize({
  hash: true,
  slideNumber: false,
  markdown: {
    smartypants: true
  },
})
