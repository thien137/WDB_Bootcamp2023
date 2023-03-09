import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    TODO: {
      blue: "#1e40af",
      lightBlue: "#456ced",
    },
  },
  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `'DM Sans', sans-serif`,
  },
  textStyles: {
    defaults: {
      lineHeight: "100%",
      fontFamily: "DM Sans",
    },
  },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      "html, body": {
        padding: 0,
        margin: 0,
        height: "100%",
        width: "100%",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        overflowWrap: "anywhere",
      },
    },
    Text: {
      baseStyle: {
        overflowWrap: "anywhere",
      },
    },
    Button: {
      variants: {
        blue: {
          bg: "TODO.blue",
          color: "white",
          _hover: {
            bg: "TODO.lightBlue",
            _active: {
              bg: "TODO.lightBlue",
            },
          },
        },
      },
    },
  },
});
