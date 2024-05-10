import { useState } from "react";
import { Container, VStack, Input, Button, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, useColorMode, useColorModeValue, Heading, Text, Link, Switch, Box } from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaMoon, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
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
      window.alert("The minimum length is 5");
    }
  };

  return (
    <Container maxW="container.sm" p={4} centerContent>
      <Box bg={useColorModeValue("white", "#4a4a4a")} p={4} borderRadius="lg" w="80%" m="16px auto">
        <VStack spacing={8} w="100%">
          <Heading color={useColorModeValue("#a5b9b2", "#061c52")} fontWeight="bold">
            Create an Account
          </Heading>

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

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <Input type="email" placeholder="name@domain.com" />
              <InputRightElement children={<FaEnvelope />} />
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
                {passwordError && (
                  <Text color="red.500" fontSize="sm">
                    {passwordError}
                  </Text>
                )}
                <IconButton icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={handlePasswordVisibility} variant="ghost" />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <InputGroup borderColor={passwordError ? "red.500" : "gray.200"}>
                <Input type={showPassword ? "text" : "password"} placeholder="Enter your password again" />
                <InputRightElement children={<FaLock />} />
              </InputGroup>
            </InputGroup>
          </FormControl>

          <Button colorScheme="blue" w="80%" bgColor={useColorModeValue("#a5b9b2", "#061c52")} color="white" fontWeight="bold">
            Sign Up
          </Button>
          <Text>
            Already have an account?{" "}
            <Link color={useColorModeValue("#a5b9b2", "#061c52")} fontWeight="bold" to="/signin">
              Sign In
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
