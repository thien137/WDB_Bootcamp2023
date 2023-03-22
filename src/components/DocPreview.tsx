import { Box, Button, Text } from "@chakra-ui/react";
import { React } from "react";

interface DocPreviewProps {
  preview: string;
  text: string;
  ind: number;
  openModal: Function;
  setIdFunc: Function;
  setDocFunc: Function;
}

export default function DocPreview({
  preview,
  text,
  ind,
  openModal,
  setIdFunc,
  setDocFunc,
}: DocPreviewProps) {
  return (
    <Box padding={0.475}>
      <Button
        h="150px"
        w="150px"
        whiteSpace="normal"
        bgColor="#F8F8F8"
        border="2px solid #A3A3A3"
        padding={2}
        onClick={() => {
          setIdFunc(ind);
          setDocFunc(text);
          openModal();
        }}
      >
        <Text padding={2} fontSize={20} textAlign="left" textColor="#545454">
          {preview}
        </Text>
      </Button>
    </Box>
  );
}
