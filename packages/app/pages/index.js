import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex>
      <Box w='50%' bg='#F0DB4F'>
        <VStack h='100vh' justifyContent={'center'} color='#b19c0f'>
          <Heading fontSize={'6xl'}>JS Royale</Heading>
          <Text textTransform={'capitalize'}>
            Multiplayer online battle JavaScript challenge
          </Text>
        </VStack>
      </Box>
      <Box w='50%' h='100vh'>
        <VStack h='100vh' justifyContent={'center'}>
          <Box>
            <Stack
              p={4}
              mt={4}
              spacing={4}
              minW={{ base: '310px', lg: '360px' }}
              bg='gray.50'
              rounded='md'
              borderWidth={'1px'}
              borderColor={'gray.200'}
            >
              <Heading>Create Room</Heading>
              <FormControl>
                <FormLabel>Room Name</FormLabel>
                <Input placeholder='Enter room name' />
              </FormControl>
              <FormControl>
                <FormLabel>Room Password</FormLabel>
                <Input placeholder='Enter room password' />
              </FormControl>
              <Button>Create</Button>
            </Stack>
          </Box>
        </VStack>
      </Box>
    </Flex>
  )
}
