import { Box, Heading, Text, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      <Box position={'absolute'} w='50%' h='100vh' bg='#F0DB4F' zIndex={0} />
      <VStack justifyContent={'center'} h='100vh'>
        <Box
          p={2}
          zIndex={1}
          rounded='lg'
          shadow={2}
          color='white'
          bg='blackAlpha.700'
          textAlign={'center'}
        >
          <Heading>JS Royale</Heading>
          <Text>Multiplayer JavaScript Royale</Text>
        </Box>
      </VStack>
    </Box>
  )
}
