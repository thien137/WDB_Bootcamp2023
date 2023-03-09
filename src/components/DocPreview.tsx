import { Box, Text } from "@chakra-ui/layout";

import GrayBox from "../../public/Group 4.svg";

export default function DocPreview({ text }) {
  return (
    <Box>
      <Text>{text}</Text>
      <GrayBox />
    </Box>
  );
}
