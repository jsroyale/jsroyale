import { extendTheme } from '@chakra-ui/react'

const brand = {
  50: '#fdfde9',
  100: '#fafac9',
  200: '#f7f6a6',
  300: '#f4f284',
  400: '#f1ee6a',
  500: '#eee953',
  600: '#f0db4f',
  700: '#edc445',
  800: '#eaad3b',
  900: '#e4882a',
}

const Button = {
  // style object for base or default style
  baseStyle: {
    bg: 'brand.700',
    color: 'white',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    variant: '',
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
