import {
  Stack,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { React } from "react";

interface NotiomDoc {
  preview: string;
  text: string;
}

interface DocPreviewProps {
  preview: string;
  text: string;
  index: number;
  array: NotiomDoc[];
  func: Function;
  openModal: Function;
}

// interface UpdatedDocPreviewProps {
//   doc: NotiomDoc;
//   openModal: Function;
// }

export default function DocPreview({
  preview,
  text,
  index,
  array,
  func,
  openModal,
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

// function saveDoc(func, index, newText) {
//   func((oldModals) => {
//     return oldModals.map((c, i) => {
//       if (i == index) {
//         return {
//           preview: c.preview,
//           text: newText,
//         };
//       } else {
//         return c;
//       }
//     });
//   });
// }

/**
function saveDoc(docPreview{ preview, index, docArray, func }: DocPreviewProps) {
  const editor = document.getElementById("editor");
  let dos = " ";

  editor.addEventListener("input", (e) => {
    dos = e.target.innerHTML;
  });
}
*/
