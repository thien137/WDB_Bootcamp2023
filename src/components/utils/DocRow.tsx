import { Flex } from "@chakra-ui/react";

import DocPreview from "../DocPreview";

export default function DocRow() {
  return (
    <Flex direction="row" px={10} justify="space-between">
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
    </Flex>
  );
}
