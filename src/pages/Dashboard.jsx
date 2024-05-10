import { Box, Flex, Heading, IconButton, Spacer, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, VStack, Text, Link, useColorMode } from "@chakra-ui/react";
import { FaCog, FaPhone, FaUser, FaBars, FaHome, FaShoppingCart, FaWallet, FaFileAlt, FaFolderOpen, FaTasks, FaMoon, FaSun, FaEye } from "react-icons/fa";

const FixedSidebar = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack position="fixed" left="0" top="0" h="100vh" p="4" spacing="48px" bg={colorMode === "light" ? "gray.100" : "gray.900"}>
      <IconButton icon={<FaHome />} aria-label="Home" />
      <IconButton icon={<FaShoppingCart />} aria-label="Shop" />
      <IconButton icon={<FaWallet />} aria-label="Balance" />
      <IconButton icon={<FaFileAlt />} aria-label="Pages" />
      <IconButton icon={<FaFolderOpen />} aria-label="Files" />
      <IconButton icon={<FaTasks />} aria-label="Custom Order" />
    </VStack>
  );
};

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "white" : "#020817"} minH="100vh" pl="50px">
      <FixedSidebar />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <Flex align="center" p="2" borderBottom="1px" borderColor="gray.200">
              <FaEye />
              <Text ml="4">Site Preview</Text>
            </Flex>
            <VStack align="stretch" mt="2" spacing="6">
              <Flex align="center" p="2" borderBottom="1px" borderColor="gray.200">
                <FaHome />
                <Link href="#" ml="4">
                  Home
                </Link>
              </Flex>
              <Flex align="center" p="2" borderBottom="1px" borderColor="gray.200">
                <FaShoppingCart />
                <Link href="#" ml="4">
                  Shop
                </Link>
              </Flex>
              <Flex align="center" p="2" borderBottom="1px" borderColor="gray.200">
                <FaWallet />
                <Link href="#" ml="4">
                  Balance
                </Link>
              </Flex>
              <Flex align="center" p="2" borderBottom="1px" borderColor="gray.200">
                <FaFileAlt />
                <Link href="#" ml="4">
                  Pages
                </Link>
              </Flex>
              <Flex align="center" p="2" borderBottom="1px" borderColor="gray.200">
                <FaFolderOpen />
                <Link href="#" ml="4">
                  Files
                </Link>
              </Flex>
              <Flex align="center" p="2" borderBottom="1px" borderColor="gray.200">
                <FaTasks />
                <Link href="#" ml="4">
                  Custom Order
                </Link>
              </Flex>
            </VStack>
            <Flex align="center" justifyContent="space-between" p="4" mt="auto">
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex p="4" color={colorMode === "light" ? "black" : "white"} align="center" borderBottom="1px" borderColor="gray.200">
        <IconButton icon={<FaBars />} variant="ghost" aria-label="Open Menu" onClick={onOpen} />
        <Heading size="md" ml="2">
          MyApp
        </Heading>
        <Spacer />
        <Flex align="center" px={{ base: "0", md: "2" }}>
          <IconButton icon={<FaCog />} variant="ghost" aria-label="Settings" />
          <Text ml="2" mr="2" display={{ base: "none", md: "block" }}>
            Settings
          </Text>
        </Flex>
        <Flex align="center" px={{ base: "0", md: "2" }}>
          <IconButton icon={<FaPhone />} variant="ghost" aria-label="Contact Me" />
          <Text ml="2" mr="2" display={{ base: "none", md: "block" }}>
            Contact
          </Text>
        </Flex>
        <Flex align="center" px={{ base: "0", md: "2" }}>
          <IconButton icon={<FaUser />} variant="ghost" aria-label="Profile" />
          <Text ml="2" mr="2" display={{ base: "none", md: "block" }}>
            Profile
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
