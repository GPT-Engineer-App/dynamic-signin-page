import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from '@chakra-ui/react';

function Signup() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Create an account</Text>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Choose a username" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Telegram ID</FormLabel>
          <Input type="text" placeholder="Enter your Telegram ID" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" placeholder="Confirm your password" />
        </FormControl>
        <Button colorScheme="blue">Sign Up</Button>
      </VStack>
    </Box>
  );
}

export default Signup;