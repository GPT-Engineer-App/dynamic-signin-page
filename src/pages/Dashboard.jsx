import { Box, Flex, Heading, IconButton, Spacer, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, VStack, Link, useColorMode } from "@chakra-ui/react";
import { FaCog, FaPhone, FaUser, FaBars, FaHome, FaShoppingCart, FaWallet, FaFileAlt, FaFolderOpen, FaTasks, FaMoon, FaSun } from "react-icons/fa";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg="#020817" minH="100vh">
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" mt="2">
              <Flex align="center" p="2">
                <FaHome />
                <Link href="#" ml="2">
                  Home
                </Link>
              </Flex>
              <Flex align="center" p="2">
                <FaShoppingCart />
                <Link href="#" ml="2">
                  Shop
                </Link>
              </Flex>
              <Flex align="center" p="2">
                <FaWallet />
                <Link href="#" ml="2">
                  Balance
                </Link>
              </Flex>
              <Flex align="center" p="2">
                <FaFileAlt />
                <Link href="#" ml="2">
                  Pages
                </Link>
              </Flex>
              <Flex align="center" p="2">
                <FaFolderOpen />
                <Link href="#" ml="2">
                  Files
                </Link>
              </Flex>
              <Flex align="center" p="2">
                <FaTasks />
                <Link href="#" ml="2">
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
        <IconButton icon={<FaCog />} variant="ghost" aria-label="Settings" />
        <IconButton icon={<FaPhone />} variant="ghost" aria-label="Contact Me" />
        <IconButton icon={<FaUser />} variant="ghost" aria-label="Profile" />
      </Flex>
    </Box>
  );
};

export default Dashboard;
