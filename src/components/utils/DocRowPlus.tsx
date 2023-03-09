import { Flex } from "@chakra-ui/react";

import DocNew from "../DocNew";
import DocPreview from "../DocPreview";

interface DocRowPlusProps {
  onClick: () => void;
}

export default function DocRow({ onClick }: DocRowPlusProps) {
  return (
    <Flex direction="row" px={10} justify="space-between">
      <DocNew onClick={onClick} />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
      <DocPreview text="Hello World" />
    </Flex>
  );
}
