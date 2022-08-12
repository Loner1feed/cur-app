import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { style } from "./style";

export const Footer = () => {
  return (
    <Box sx={style.footer}>
      <Box sx={style.container}>
        <Typography>
          API provider:{" "}
          <Link href="https://exchangerate.host/#/donate" target="_blank">
            exchangerate.host
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
