import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import { CurrencyDisplayItem } from "../CurrencyDisplayItem/CurrencyDisplayItem";
import { style } from "./style";

export const Header = ({ data }) => {
  const arrToDisplay = Object.keys(data.rates).filter((el) => el !== "UAH");

  return (
    <AppBar>
      <Box sx={style.container}>
        <Typography sx={style.logo}>Currency converter</Typography>

        <Box sx={style.rates}>
          {arrToDisplay.map((el, i) => (
            <CurrencyDisplayItem
              key={i}
              searched="UAH"
              base={el}
              rates={data.rates}
            />
          ))}
        </Box>
      </Box>
    </AppBar>
  );
};
