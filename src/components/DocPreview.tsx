import { Button } from "@chakra-ui/react";

export function DocPreview({ text }) {
  return (
    <Button height="150px" width="150px" border="2px" borderColor="green.500">
      {text}
    </Button>
  );
}
