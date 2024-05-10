import { useState } from "react";
import { Container, VStack, Input, Button, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, useColorMode, useColorModeValue, Heading, Text, Link, Switch, FormHelperText, Box } from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "#101010");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateUsername = (e) => {
    const value = e.target.value;
    if (value.length < 3) {
      setUsernameError("The minimum length is 3");
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = (e) => {
    const value = e.target.value;
    if (value.length < 5) {
      setPasswordError("The minimum length is 5");
    } else {
      setPasswordError("");
    }
  };

  return (
    <Container maxW="container.sm" p={4} centerContent>
      <Box bg={formBackground} p={4} borderRadius="lg" w="80%" m="16px auto">
        <VStack spacing={8} w="100%">
          <Heading color="#d44242">Sign In</Heading>
          <Text>Access your account</Text>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <Input placeholder="Enter your username" onChange={validateUsername} borderColor={usernameError ? "red.500" : "gray.200"} />
              <InputRightElement children={<FaUser />} />
            </InputGroup>
            {usernameError && (
              <Text color="red.500" fontSize="sm">
                {usernameError}
              </Text>
            )}
          </FormControl>
          <FormControl id="telegramId" isRequired>
            <FormLabel>Telegram ID</FormLabel>
            <Input placeholder="Enter your Telegram ID" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} placeholder="Enter your password" onChange={validatePassword} borderColor={passwordError ? "red.500" : "gray.200"} />
                <InputRightElement children={<FaLock />} />
              </InputGroup>
              <InputRightElement>
                {passwordError && (
                  <Text color="red.500" fontSize="sm">
                    {passwordError}
                  </Text>
                )}
                <IconButton icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={handlePasswordVisibility} variant="ghost" />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button colorScheme="blue" w="80%">
            Sign In
          </Button>
          <Text>
            Don't have an account?{" "}
            <Link color="teal.500" href="/signup">
              Sign Up
            </Link>
          </Text>
          <Box position="absolute" bottom="0" left="0" display="flex" alignItems="center" justifyContent="center" bg="#90cdf4" m="16px">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="dark-mode" mb="0">
                Dark Mode
              </FormLabel>
              <Switch id="dark-mode" onChange={toggleColorMode} icon={<FaMoon />} />
            </FormControl>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
