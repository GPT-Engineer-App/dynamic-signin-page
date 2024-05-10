import { Box, Flex, Heading, IconButton, Spacer, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, VStack, Link } from "@chakra-ui/react";
import { FaCog, FaPhone, FaUser, FaBars } from "react-icons/fa";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="#020817" minH="100vh">
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" mt="2">
              <Link href="#">Home</Link>
              <Link href="#">Shop</Link>
              <Link href="#">Balance</Link>
              <Link href="#">Pages</Link>
              <Link href="#">Files</Link>
              <Link href="#">Custom Order</Link>
            </VStack>
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
