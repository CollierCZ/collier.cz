import { defineConfig } from 'vite-plugin-windicss'

const colors = {
  green: {
    50: '#E6F5F1',
    100: '#CCECE3',
    200: '#99D8C7',
    300: '#66C5AB',
    400: '#33B18F',
    500: '#009E73',
    600: '#008E68',
    700: '#007E5C',
    800: '#006F51',
    900: '#005F45'
  },
  purple: {
    50: '#FAF2F6',
    100: '#F5E4ED',
    200: '#EBC9DC',
    300: '#E0AFCA',
    400: '#D694B9',
    500: '#CC79A7',
    600: '#B86D96',
    700: '#A36186',
    800: '#8F5575',
    900: '#7A4964'
  },
  orange: {
    50: '#FDF5E6',
    100: '#FAECCC',
    200: '#F5D999',
    300: '#F0C566',
    400: '#EBB233',
    500: '#E69F00',
    600: '#CF8F00',
    700: '#B87F00',
    800: '#A16F00',
    900: '#8A5F00'
  },
  sky: {
    50: '#EEF8FD',
    100: '#DDF0FB',
    200: '#BBE1F6',
    300: '#9AD2F2',
    400: '#78C3ED',
    500: '#56B4E9',
    600: '#4DA2D2',
    700: '#4590BA',
    800: '#3C7EA3',
    900: '#346C8C'
  },
  yellow: {
    50: '#FEFCEC',
    100: '#FCFAD9',
    200: '#F9F4B3',
    300: '#F6EF8E',
    400: '#F3E968',
    500: '#F0E442',
    600: '#D8CD3B',
    700: '#C0B635',
    800: '#A8A02E',
    900: '#908928'
  },
  red: {
    50: '#FBEFE6',
    100: '#F7DFCC',
    200: '#EEBF99',
    300: '#E69E66',
    400: '#DD7E33',
    500: '#D55E00',
    600: '#C05500',
    700: '#AA4B00',
    800: '#954200',
    900: '#803800'
  },
}

export default defineConfig({
  darkMode: 'class', // or 'media'
  plugins: [require('windicss/plugin/typography')],
  theme: {
    extend: {
      colors: colors,
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
                color: colors.purple[700],
              },
              '&:focus': {
                color: colors.purple[700],
              },
            },
            blockquote: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            em: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            }
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
        dark: {
          css: {
            color: colors.sky[100],
            h1: {
              color: colors.sky[100],
            },
            h2: {
              color: colors.sky[100],
              a: {
                textDecoration: "none"
              }
            },
            h3: {
              color: colors.sky[100],
            },
            h4: {
              color: colors.sky[100],
            },
            'a:not(.not-prose)': {
              color: colors.green[300],
              '&:hover': {
                color: colors.purple[300]
              },
              '&:focus': {
                color: colors.purple[300]
              },
            }

          }
        }
      },
    },
  },
})
