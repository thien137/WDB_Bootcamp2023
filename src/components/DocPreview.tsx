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

interface DocPreviewProps {
  text: string;
}

export default function DocPreview({ text }: DocPreviewProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
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
          {text}
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Hello World!</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
