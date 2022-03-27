import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class', // or 'media'
  plugins: [require('windicss/plugin/typography')],
  theme: {
    extend: {
      backgroundColor: {
        codeBlockNord: '#2e3440ff',
      },
      fontSize: {
        base: ['16px', '24px'],
      },
      screens: {
        '2xl': { min: '1900px' },
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
            a: {
              fontWeight: 'inherit',
              color: colors.green[700],
              '&:hover': {
                color: colors.fuchsia[700],
              },
              '&:focus': {
                color: colors.fuchsia[700],
              },
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
            a: {
              fontWeight: 'inherit',
            },
          },
        },
      },
    },
  },
})
