import { Stack, Flex, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/utils/Navbar";
import Banner from "../components/utils/Banner";
import DocRow from "../components/utils/DocRow";
import DocRowPlus from "../components/utils/DocRowPlus";

export default function Home() {
  const [modals, setModals] = useState([]);

  const createDoc = () => {}
  
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
          <DocRowPlus onClick={createDoc} />
          <DocRow />
        </Flex>
      </Stack>
    </>
  );
}
