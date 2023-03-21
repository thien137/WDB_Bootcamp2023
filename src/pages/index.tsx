import {
  Stack,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
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
import Head from "next/head";
import { ReactNode, useState } from "react";

import Navbar from "../components/utils/Navbar";
import Banner from "../components/utils/Banner";
import DocNew from "../components/DocNew";
import DocPreview from "../components/DocPreview";

export default function Home() {
  interface NotiomDoc {
    preview: string;
    text: string;
  }

  const [ notiomDocs, setNotiomDocs ] = useState<NotiomDoc[]>([]);

  // Call useDisclosure here + have the modal state live up here
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Have a state for which doc ID i'm currently updating
  const [ docID, setDocID ] = useState<number>();

  // Have a state for doc you are updating - just the content string state
  const [ docContent, setDocContent ] = useState<string>();

  const createDefaultDoc = () => {
    onOpen();
    setNotiomDocs((oldModals) => [
      ...oldModals,
      {
        preview: "Hello World",
        text: "Hello World!",
      },
    ]);
  };

  // Defined updateDocfunctio here - takes in a parameter (newDoc)
  const updateDoc = (id, newContent) => {
    // go through the state array of notiom docs and update the right one by ID
    return 5;
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
              array={notiomDocs}
              func={setNotiomDocs}
              openModal={onOpen}
              // Pass down the id state and the setState to change the id
              // Pass down the context state and the setContext functio to change the current content of the doc im updating right now
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
        <title>TODO: page title</title>
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Text contentEditable="true" id={`editor${index}`}>
              {text}
            </Text> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                // updateDoc(id_state, content_state) - WORK WITH THIS

                // saveDoc(
                //   func,
                //   index,
                //   document.getElementById(`editor${index}`).innerHTML
                // )
              }
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
