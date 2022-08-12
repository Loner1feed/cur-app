/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fixNumber } from "../../helpers/fixNumber";
import { ConverterInput } from "../ConverterInput/ConverterInput";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import { style } from "./style";

export const Body = ({ data }) => {
  const rateLabels = Object.keys(data.rates);

  const [fromValue, setFromValue] = useState(1);
  const [fromSelect, setFromSelect] = useState(rateLabels[0]);
  const [toValue, setToValue] = useState(0);
  const [toSelect, setToSelect] = useState(rateLabels[1]);

  const fromValueChange = (val) => {
    setToValue(
      fixNumber((+val * data.rates[toSelect]) / data.rates[fromSelect])
    );
    setFromValue(val);
  };

  const fromSelectChange = (select) => {
    setToValue(
      fixNumber((+fromValue * data.rates[toSelect]) / data.rates[select])
    );
    setFromSelect(select);
  };

  const toValueChange = (val) => {
    setFromValue(
      fixNumber((+val * data.rates[fromSelect]) / data.rates[toSelect])
    );
    setToValue(val);
  };

  const toSelectChange = (select) => {
    setToValue(
      fixNumber((+fromValue * data.rates[select]) / data.rates[fromSelect])
    );
    setToSelect(select);
  };

  useEffect(() => {
    fromValueChange(1);
  }, []);

  return (
    <Box sx={style.body}>
      <ConverterInput
        labels={rateLabels}
        value={fromValue}
        onValueChange={fromValueChange}
        select={fromSelect}
        onSelectChange={fromSelectChange}
      />

      <Box sx={style.icon}>
        <MultipleStopIcon />
      </Box>

      <ConverterInput
        labels={rateLabels}
        value={toValue}
        onValueChange={toValueChange}
        select={toSelect}
        onSelectChange={toSelectChange}
      />
    </Box>
  );
};
