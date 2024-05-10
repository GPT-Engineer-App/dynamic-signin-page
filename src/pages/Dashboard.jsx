import { Box, Flex, Heading, IconButton, Spacer, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, VStack, Text, Link, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { FaCog, FaPhone, FaUser, FaBars, FaHome, FaShoppingCart, FaWallet, FaFileAlt, FaFolderOpen, FaTasks, FaMoon, FaSun, FaEye, FaTelegram } from "react-icons/fa";

const FixedSidebar = ({ toggleColorMode, showHomeContainers, setShowHomeContainers }) => {
  const { colorMode } = useColorMode();
  return (
    <VStack position="fixed" left="0" top="0" h="100vh" p="4" spacing="48px" bg={colorMode === "light" ? "gray.100" : "gray.900"}>
      <IconButton icon={<FaHome />} aria-label="Home" onClick={() => setShowHomeContainers(!showHomeContainers)} />
      <IconButton icon={<FaShoppingCart />} aria-label="Shop" />
      <IconButton icon={<FaWallet />} aria-label="Balance" />
      <IconButton icon={<FaFileAlt />} aria-label="Pages" />
      <IconButton icon={<FaFolderOpen />} aria-label="Files" />
      <IconButton icon={<FaTasks />} aria-label="Custom Order" />
      <IconButton icon={<FaMoon />} aria-label="Toggle Dark Mode" onClick={toggleColorMode} />
    </VStack>
  );
};

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showHomeContainers, setShowHomeContainers] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "white" : "#020817"} minH="100vh" pl="60px" overflowY="auto" backgroundImage={`url(${colorMode === "dark" ? "/darkmode.jpg" : "/lightmode.jpg"})`} backgroundSize="cover" transition="background 0.3s ease-out">
      <FixedSidebar toggleColorMode={toggleColorMode} showHomeContainers={showHomeContainers} setShowHomeContainers={setShowHomeContainers} />
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
      <Flex justify="space-between" p="5">
        <Box p="20" bg="gray.200" shadow="md" borderRadius="md" w="33%" h="25vh">
          Card 1
        </Box>
        <Box p="20" bg="gray.200" shadow="md" borderRadius="md" w="33%" h="25vh">
          Card 2
        </Box>
        <Box p="20" bg="gray.200" shadow="md" borderRadius="md" w="33%" h="25vh">
          Card 3
        </Box>
      </Flex>
      <Flex justify="center" p="4">
        <Box p="8" bg="gray.200" shadow="md" borderRadius="md" w="99%" h="25vh">
          DateRangeCalendar Placeholder
        </Box>
      </Flex>
      <Flex justify="space-around" p="4">
        <Box p="8" bg="gray.300" shadow="md" borderRadius="md" w="49%" h="25vh">
          Additional Flexbox 1
        </Box>
        <Box p="8" bg="gray.300" shadow="md" borderRadius="md" w="49%" h="25vh">
          Additional Flexbox 2
        </Box>
      </Flex>
      <Flex as="footer" p="4" bg="gray.800" color="white" justify="space-around" align="center">
        <IconButton icon={<FaPhone />} aria-label="Contact" />
        <IconButton icon={<FaTelegram />} aria-label="Telegram" />
      </Flex>
    </Box>
  );
};

export default Dashboard;
