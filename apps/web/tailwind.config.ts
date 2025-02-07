import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      current: 'currentColor',
      transparent: 'transparent',

      // main colors
      gray: {
        25: '#F7F7F7',
        50: '#F3F3F3',
        100: '#EBEBEB',
        200: '#DDDDDD',
        300: '#C6C6C6',
        400: '#B0B0B0',
        500: '#9B9B9B',
        600: '#868686',
        700: '#5E5E5E',
        800: '#393939',
        900: '#0B0B0B',
      },
      primary: {
        25: '#EEF5F3',
        50: '#CEE1DB',
        100: '#AECDC4',
        200: '#91B9AD',
        300: '#75A598',
        400: '#5D9083',
        500: '#487B6E',
        600: '#37675B',
        700: '#295348',
        800: '#1F3E36',
        900: '#172D27',
      },

      // secondary colors
      error: {
        25: '#FFFBFA',
        50: '#FFEFED',
        100: '#FFD1C9',
        200: '#FFB3A8',
        300: '#F9968A',
        400: '#EB7A6F',
        500: '#D86158',
        600: '#C14B44',
        700: '#A63934',
        800: '#882A28',
        900: '#68201D',
      },
      warning: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FEC84B',
        400: '#FDB022',
        500: '#F79009',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E',
      },
    },
    fontFamily: {
      gilroy: ['Gilroy'],
      helvetica: ['Helvetica Neue'],
    },
    screens: {
      tablet: '768px',
      desktop: '1280px',
    },
    letterSpacing: {
      tightest: '-2%',
    },
  },
}

export default config
