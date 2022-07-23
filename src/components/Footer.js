import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/dumbbell-solid.svg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} width="200px" height="40px" alt="gym" />
        <Typography variant="h5" pb="40px" mt="20px">
          ©copyright{" "}
          <a
            href="https://www.linkedin.com/in/izudin-mavric/"
            style={{ textDecoration: "none", color: "#7dcd16" }}
            target="_blank"
            rel="noreferrer"
          >
            Izudin Mavric
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
