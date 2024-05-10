import { useState } from "react";
import { Container, VStack, Input, Button, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, useColorMode, useColorModeValue, Heading, Text, Link, Switch, FormHelperText } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Container maxW="container.md" p={4} centerContent>
      <VStack spacing={8} w="100%">
        <Heading>Sign In</Heading>
        <Text>Access your account</Text>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input placeholder="Enter your username" />
        </FormControl>
        <FormControl id="telegramId" isRequired>
          <FormLabel>Telegram ID</FormLabel>
          <Input placeholder="Enter your Telegram ID" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
            <InputRightElement>
              <IconButton icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={handlePasswordVisibility} variant="ghost" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button colorScheme="blue" w="full">
          Sign In
        </Button>
        <Text>
          Don't have an account?{" "}
          <Link color="teal.500" href="/signup">
            Sign Up
          </Link>
        </Text>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark-mode" mb="0">
            Dark Mode
          </FormLabel>
          <Switch id="dark-mode" onChange={toggleColorMode} />
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Index;
