import { extendTheme } from '@chakra-ui/react'

const brand = {
  50: '#efe5fe',
  100: '#d4bffb',
  200: '#b695f9',
  300: '#9666f8',
  400: '#7a40f7',
  500: '#5a09f4',
  600: '#4b02ee',
  700: '#3100e6',
  800: '#0000e1',
  900: '#0000dd',
}

const Button = {
  sizes: {},
  variants: {},
  defaultProps: {
    colorScheme: 'brand',
  },
}

const theme = extendTheme({
  colors: {
    brand,
  },
  components: {
    Button,
  },
})

export default theme
