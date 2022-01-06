import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class', // or 'media'
  plugins: [
    require('windicss/plugin/typography'),
  ],
  theme: {
    extend: {
      backgroundColor: {
        codeBlockNord: '#2e3440ff',
      },
      fontSize: {
        base: ['16px', '24px'],
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              margin: '0',
              overflow: 'inherit',
              paddingTop: '0',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            },
          },
        },
        lg: {
          css: {
            pre: {
              margin: '0',
              overflow: 'inherit',
              paddingTop: '0',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            },
          }
        }
      },
    }
  },
})
