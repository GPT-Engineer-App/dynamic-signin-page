import { useState } from "react";
import { Container, VStack, Input, Button, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, useColorMode, useColorModeValue, Heading, Text, Link, Switch, Box, Alert, AlertIcon } from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaMoon, FaEnvelope } from "react-icons/fa";

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
      <Box bg={useColorModeValue("white", "#4a4a4a")} p={4} borderRadius="lg" w="80%" m="16px auto">
        <VStack spacing={8} w="100%">
          <Heading color={useColorModeValue("#a5b9b2", "#061c52")} fontWeight="bold">
            Sign In
          </Heading>
          <Text>Access your account</Text>

          
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            
            <InputGroup>
              <InputGroup borderColor={passwordError ? "red.500" : "gray.200"}>
              <Input placeholder="Enter your username" onChange={validateUsername} borderColor={usernameError ? "red.500" : "gray.200"} />
              <InputRightElement children={<FaUser />} />
            </InputGroup>
            <InputRightElement>
                <IconButton icon={<FaUser />} variant="ghost" />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          
          <FormControl id="telegramId" isRequired>
            <FormLabel>Telegram ID</FormLabel>
            <Input placeholder="Enter your Telegram ID" />
          </FormControl>

          
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputGroup borderColor={passwordError ? "red.500" : "gray.200"}>
                <Input type={showPassword ? "text" : "password"} placeholder="Enter your password" onChange={validatePassword} />
                <InputRightElement children={<FaLock />} />
              </InputGroup>
              <InputRightElement>
                <IconButton icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={handlePasswordVisibility} variant="ghost" />
              </InputRightElement>
            </InputGroup>
            {passwordError && <Alert status="error">{passwordError}</Alert>}
          </FormControl>

          
          <Button colorScheme="blue" w="80%" bgColor={useColorModeValue("#a5b9b2", "#061c52")} color="white" fontWeight="bold">
            Sign In
          </Button>
          <Text>
            Don't have an account?{" "}
            <Link color={useColorModeValue("#a5b9b2", "#061c52")} fontWeight="bold" to="/signup">
              Sign Up
            </Link>
          </Text>
          <Box display="flex" alignItems="center" justifyContent="center" m="16px">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="dark-mode" mb="0" fontWeight="bold">
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
