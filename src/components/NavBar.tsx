import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack px="5px" justifyContent="space-between">
      <Image src={logo} width="150px" p="20px" />
      <Box px="20px" width="60%">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
