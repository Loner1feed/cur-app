import { Box, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { currencyAPI } from "./api/currencyAPI";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { style } from "./style";

function App() {
  const [data, setData] = useState(null);
  const getRequest = async () => {
    const res = await currencyAPI.getCurrencies();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <Fade in={!!data} timeout={1000}>
      <Box sx={style.app}>
        {!!data && (
          <>
            <Header data={data} />
            <Body data={data} />
            <Footer />
          </>
        )}
      </Box>
    </Fade>
  );
}

export default App;
