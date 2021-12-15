import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class', // or 'media'
  plugins: [
    require('windicss/plugin/typography'),
  ],
  theme: {
    extends: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        base: ['16px', '24px'],
      }
    }
  }
})