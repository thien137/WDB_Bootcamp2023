import { Box, IconButton } from "@chakra-ui/react";

import GrayBoxPlus from "../../public/Group 1.svg";

interface DocNewProps {
  onClick: () => void;
}

export default function DocNew({ onClick }: DocNewProps) {
  return (
    <Box>
      <IconButton
        variant="outline"
        aria-label="Create Document"
        size="0px"
        icon={<GrayBoxPlus />}
        onClick={onClick}
      />
    </Box>
  );
}
