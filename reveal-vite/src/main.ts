import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown';

const deck = new Reveal({
  plugins: [ Markdown ]
})
deck.initialize({
  hash: true,
  slideNumber: true,
  markdown: {
    smartypants: true
  },
})
