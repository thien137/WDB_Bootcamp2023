import { Box, HStack, Spacer } from "@chakra-ui/react";

import Logo from "../../../public/Vector.svg";
import Notiom from "../../../public/Notiom.svg";
import Blue from "../../../public/Create Button.svg";

export default function Navbar() {
  return (
    <HStack pt={4} px={10}>
      <Logo />
      <Box pl={4}>
        <Notiom />
      </Box>
      <Spacer />
      <Blue />
    </HStack>
  );
}
