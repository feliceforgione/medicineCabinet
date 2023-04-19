import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack px="5px">
      <Image src={logo} boxSize="100px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
