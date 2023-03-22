import {
  Stack,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
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
import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/utils/Navbar";
import Banner from "../components/utils/Banner";
import DocNew from "../components/DocNew";
import DocPreview from "../components/DocPreview";

export default function Home() {
  interface NotiomDoc {
    preview: string;
    text: string;
  }

  const [notiomDocs, setNotiomDocs] = useState<NotiomDoc[]>([]);

  // Call useDisclosure here + have the modal state live up here
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Have a state for which doc ID i'm currently updating
  const [docID, setDocID] = useState<number>();

  // Have a state for doc you are updating - just the content string state
  const [docContent, setDocContent] = useState<string>();

  const createDefaultDoc = () => {
    setDocID(notiomDocs.length);
    setDocContent("<Please type text here>");
    setNotiomDocs((oldModals) => {
      return [
        ...oldModals,
        {
          preview: "",
          text: "<Please type text here>",
        },
      ];
    });
    onOpen();
  };

  // Defined updateDocfunctio here - takes in a parameter (newDoc)
  const updateDoc = (id, newContent) => {
    // go through the state array of notiom docs and update the right one by ID
    setNotiomDocs((existingModals) => {
      return [
        ...existingModals.slice(0, id),
        {
          preview: newContent.slice(0, 40) + "...",
          text: newContent,
        },
        ...existingModals.slice(id + 1),
      ];
    });
  };

  const renderModals = () => {
    return (
      <Wrap justify="space-evenly">
        <WrapItem>
          <DocNew onClick={createDefaultDoc} />
        </WrapItem>
        {notiomDocs.map((item, index) => (
          <WrapItem key={item.preview}>
            <DocPreview
              preview={item.preview}
              text={item.text}
              ind={index}
              openModal={onOpen}
              // Pass down the id state and the setState to change the id
              setIdFunc={setDocID}
              // Pass down the content state and the setContent functio to change the current content of the doc im updating right now
              setDocFunc={setDocContent}
            />
          </WrapItem>
        ))}
      </Wrap>
    );
  };

  return (
    <>
      {/* Have your modal render here + call the useDisclosure hook here */}
      <Head>
        <title>WDB Bootcamp Project</title>
      </Head>
      <Stack p={4}>
        <Flex
          direction="column"
          gridGap={20}
          align="stretch"
          justify="space-between"
        >
          <Navbar />
          <Banner />
          <Spacer />
          {renderModals()}
        </Flex>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Document {docID + 1}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text contentEditable="true" id="txt">
              {docContent}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                updateDoc(docID, document.getElementById("txt").innerHTML);
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
