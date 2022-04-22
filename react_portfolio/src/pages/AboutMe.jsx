import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="fluid">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <h1> Hello world!</h1>
        </Box>
      </Container>
    </React.Fragment>
  );
}
