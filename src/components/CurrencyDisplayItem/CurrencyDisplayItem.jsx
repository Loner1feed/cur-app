import { Box, Typography } from "@mui/material";
import React from "react";
import { fixNumber } from "../../helpers/fixNumber";
import { style } from "./style";

export const CurrencyDisplayItem = ({ base, rates, searched }) => {
  const searchedValue = Object.entries(rates).find(
    (el) => el[0] === searched
  )[1];

  const baseValue = Object.entries(rates).find((el) => el[0] === base)[1];

  const finalValue = fixNumber(searchedValue / baseValue);

  console.log(`${base} to ${searched}`, searchedValue / baseValue);

  return (
    <Box sx={style.item}>
      <Typography>{base}:</Typography>
      <Typography>{finalValue}</Typography>
    </Box>
  );
};
