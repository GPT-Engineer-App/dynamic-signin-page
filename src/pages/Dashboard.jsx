import { Box, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { FaCog, FaPhone, FaUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Box bg="#020817" minH="100vh">
      <Flex p="4" color="white" align="center">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <IconButton icon={<FaCog />} variant="ghost" aria-label="Settings" />
        <IconButton icon={<FaPhone />} variant="ghost" aria-label="Contact Me" />
        <IconButton icon={<FaUser />} variant="ghost" aria-label="Profile" />
      </Flex>
    </Box>
  );
};

export default Dashboard;
