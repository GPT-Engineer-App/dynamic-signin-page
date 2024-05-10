import { Box, Flex, Heading, IconButton, Spacer, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, VStack, Link, useColorMode } from "@chakra-ui/react";
import { FaCog, FaPhone, FaUser, FaBars, FaHome, FaShoppingCart, FaWallet, FaFileAlt, FaFolderOpen, FaTasks, FaMoon, FaSun } from "react-icons/fa";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "white" : "#020817"} minH="100vh">
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" mt="2">
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
      <Flex p="4" color="white" align="center">
        <IconButton icon={<FaBars />} variant="ghost" aria-label="Open Menu" onClick={onOpen} />
        <Heading size="md" ml="2">
          MyApp
        </Heading>
        <Spacer />
        <Flex align="center">
          <IconButton icon={<FaCog />} variant="ghost" aria-label="Settings" />
          <Text ml="2">Settings</Text>
        </Flex>
        <Flex align="center">
          <IconButton icon={<FaPhone />} variant="ghost" aria-label="Contact Me" />
          <Text ml="2">Contact</Text>
        </Flex>
        <Flex align="center">
          <IconButton icon={<FaUser />} variant="ghost" aria-label="Profile" />
          <Text ml="2">Profile</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
