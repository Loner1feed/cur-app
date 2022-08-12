import { Box, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { style } from "./style";

export const ConverterInput = ({
  labels,
  value,
  onValueChange,
  select,
  onSelectChange,
}) => {
  const inputHandloer = (e) => {
    onValueChange(e.target.value);
  };

  const selectHandler = (e) => {
    // const re = /[0-9]+/g;
    // if (e.target.value === "" || re.test(e.target.value)) {
    //   onSelectChange(e.target.value);
    // }
    onSelectChange(e.target.value);
  };

  return (
    <Box>
      <TextField value={value} onChange={inputHandloer} sx={style.field} />
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
