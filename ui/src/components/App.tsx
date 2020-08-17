import React from "react";
import { Box, Heading, Grommet } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export const App = (props) => (
  <Grommet theme={theme}>
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="light-2"
      pad={{ vertical: "small", horizontal: "medium" }}
      elevation="medium"
      {...props}
    >
      <Box direction="row">
        <Heading margin="none">scratSH</Heading>
      </Box>
    </Box>
  </Grommet>
);
