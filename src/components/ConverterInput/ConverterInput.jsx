import React from "react";
import PropTypes from "prop-types";

import { Box, MenuItem, Select, TextField } from "@mui/material";

import { style } from "./style";

export const ConverterInput = ({
  labels,
  value,
  onValueChange,
  select,
  onSelectChange,
}) => {
  const inputHandler = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    onValueChange(result);
  };

  const selectHandler = (e) => {
    onSelectChange(e.target.value);
  };

  return (
    <Box>
      <TextField value={value} onChange={inputHandler} sx={style.field} />
      <Select onChange={selectHandler} value={select} sx={style.select}>
        {labels.map((item, i) => (
          <MenuItem value={item} key={i}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

ConverterInput.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  select: PropTypes.string,
  onValueChange: PropTypes.func,
  onSelectChange: PropTypes.func,
};
