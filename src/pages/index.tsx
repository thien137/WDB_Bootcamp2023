import { Box, Stack } from "@chakra-ui/layout";
import { Flex, Icon, VStack, HStack, Image, Spacer} from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState, ReactComponent } from "react";
import Logo from "../../public/Vector.svg";
import Notiom from "../../public/Notiom.svg";
import Create from "../../public/Create. Explore..svg";
import Document from "../../public/document.svg";
import Blue from "../../public/Create Button.svg";
import DocPlus from "../../public/Group 1.svg";
import Text from "../../public/Group 4.svg";
import ButtonLink from "../components/utils/ButtonLink";
import NextLink from "../components/utils/NextLink";

export default function Home() {
  const [child, setChild] = useState<object | null>(null);
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
          <HStack pt={4} px={10}>
            <Box>
              <Logo />
            </Box>
            <Box pl={4}>
              <Notiom />
            </Box>
            <Spacer />
            <Box>
              <Blue />
            </Box>
          </HStack>
          <Flex direction="column" align="center">
            <Box>
              <Create />
            </Box>
          </Flex>
          <Flex direction="column" align="center">
            <Box>
              <Document />
            </Box>
          </Flex>
          <Spacer />
          <Flex direction="row" px={10} justify="space-between">
            <Box>
              <DocPlus />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
          </Flex>
          <Flex direction="row" px={10} justify="space-between">
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
            <Box>
              <Text />
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}