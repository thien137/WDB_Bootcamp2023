import { Stack, Flex, Spacer, Wrap, WrapItem } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState, ReactComponent } from "react";

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

  const createDefaultDoc = () => {
    setNotiomDocs((oldModals) => [
      ...oldModals,
      {
        preview: "Hello World",
        text: "Hello World!",
      },
    ]);
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
            />
          </WrapItem>
        ))}
      </Wrap>
    );
  };
  return (
    <>
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
    </>
  );
}
