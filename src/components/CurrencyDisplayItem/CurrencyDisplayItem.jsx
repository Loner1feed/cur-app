import React from "react";
import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";

import { fixNumber } from "../../helpers/fixNumber";
import { style } from "./style";

export const CurrencyDisplayItem = ({ base, rates, searched }) => {
  const searchedValue = Object.entries(rates).find(
    (el) => el[0] === searched
  )[1];

  const baseValue = Object.entries(rates).find((el) => el[0] === base)[1];

  const finalValue = fixNumber(searchedValue / baseValue);

  return (
    <Box sx={style.item}>
      <Typography>{base}:</Typography>
      <Typography>{finalValue}</Typography>
    </Box>
  );
};

CurrencyDisplayItem.propTypes = {
  base: PropTypes.string,
  rates: PropTypes.object,
  searched: PropTypes.string,
};
