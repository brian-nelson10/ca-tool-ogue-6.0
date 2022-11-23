import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="xl">
    <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
          ca-TOOL-ogue. &copy; 2022
          </Typography>
        </Box>
        </Container>
  );
};

export default Footer;
