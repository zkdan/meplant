import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './src/Panes/*.tsx',
    './src/Layout/*.tsx',
    './index.html',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
    transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    slate:colors.slate,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
    lightSlate:'#3a3a3a'
  },
  fontSize:{
    base:'1.8rem'
  },
  extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
} satisfies Config

