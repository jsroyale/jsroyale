import '../styles/globals.css'

import theme from 'theme'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as HttpProvider } from 'use-http'
import { SocketContext } from 'context/socket'
import Socket from 'socket.io-client'

const { NEXT_PUBLIC_HOST } = process.env
const io = Socket(NEXT_PUBLIC_HOST)

function jsroyale({ Component, pageProps }) {
  return (
    <SocketContext.Provider value={io}>
      <HttpProvider url={NEXT_PUBLIC_HOST}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </HttpProvider>
    </SocketContext.Provider>
  )
}

export default jsroyale
