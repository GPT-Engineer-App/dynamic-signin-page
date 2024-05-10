import { Box, IconButton, VStack } from "@chakra-ui/react";
import { FaHome, FaShoppingCart, FaWallet, FaFileAlt, FaFolderOpen, FaTasks } from "react-icons/fa";

const FixedSidebar = () => {
  return (
    <Box position="fixed" left="0" top="0" h="100vh" w="50px" bg="gray.800">
      <VStack spacing="48px" align="center" justify="space-between" h="100%">
        <IconButton icon={<FaHome />} aria-label="Home" variant="ghost" color="white" />
        <IconButton icon={<FaShoppingCart />} aria-label="Shop" variant="ghost" color="white" />
        <IconButton icon={<FaWallet />} aria-label="Balance" variant="ghost" color="white" />
        <IconButton icon={<FaFileAlt />} aria-label="Pages" variant="ghost" color="white" />
        <IconButton icon={<FaFolderOpen />} aria-label="Files" variant="ghost" color="white" />
        <IconButton icon={<FaTasks />} aria-label="Custom Order" variant="ghost" color="white" />
      </VStack>
    </Box>
  );
};

export default FixedSidebar;
