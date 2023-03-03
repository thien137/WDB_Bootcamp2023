import { Box, Text } from "@chakra-ui/layout";
import GrayBox from "../../public/Group 4.svg";

export function DocPreview({ text: string }) {
  return (
    <Box>
      <GrayBox />
      <Text>{text}</Text>
    </Box>
  );
}
