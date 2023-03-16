import {
  Box,
  Button,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
  func: Function;
}

export default function DocPreview({ preview, text, index, func }: DocPreviewProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding={0.475}>
      <Button
        h="150px"
        w="150px"
        whiteSpace="normal"
        bgColor="#F8F8F8"
        border="2px solid #A3A3A3"
        padding={2}
        onClick={onOpen}
      >
        <Text padding={2} fontSize={20} textAlign="left" textColor="#545454">
          {preview}
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text contentEditable="true" id="editor">
              {text}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick="getElementById('demo').innerHTML = Hii"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

/**
function saveDoc(docPreview{ preview, index, docArray, func }: DocPreviewProps) {
  const editor = document.getElementById("editor");
  let dos = " ";

  editor.addEventListener("input", (e) => {
    dos = e.target.innerHTML;
  });
}
*/
