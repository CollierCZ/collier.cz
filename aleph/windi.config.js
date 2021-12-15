import { defineConfig } from 'https://esm.sh/windicss@3.1.7/helpers'

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extends: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    }
  }
})