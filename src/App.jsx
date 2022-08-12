import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { currencyAPI } from "./api/currencyAPI";
import "./App.css";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

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
    <>
      {data !== null && (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <Header data={data} />
          <Body data={data} />
          <Footer />
        </Box>
      )}
    </>
  );
}

export default App;
