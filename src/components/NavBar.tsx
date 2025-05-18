import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import AIAssistant from "../ai/AIAssistant";

const NavBar = () => {
  return (
    <HStack px="5px" justifyContent="space-between">
      <Link to={"/"}>
        <Image src={logo} width="150px" p="20px" />
      </Link>
      <Box px="20px" width="60%">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
      <AIAssistant />
    </HStack>
  );
};

export default NavBar;
