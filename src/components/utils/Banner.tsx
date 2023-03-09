import { Box, Flex } from "@chakra-ui/react";

import Create from "../../../public/Create. Explore..svg";
import GrayBoxument from "../../../public/document.svg";

export default function Banner() {
  return (
    <Flex
      direction="column"
      gridGap={20}
      align="stretch"
      justify="space-between"
    >
      <Flex direction="column" align="center">
        <Box>
          <Create />
        </Box>
      </Flex>
      <Flex direction="column" align="center">
        <Box>
          <GrayBoxument />
        </Box>
      </Flex>
    </Flex>
  );
}
