import { useState, useEffect } from "react";
import "./Converter.css";
import Card from "../UI/Card";
import ConverterForm from "./ConverterForm";

const Converter = () => {
  const [convertedValue, setConvertedValue] = useState();

  async function getConvertedValue(url) {
    const res = await fetch(url);
    const data = await res.json();
    const fixedData = Object.values(data.rates);
    setConvertedValue(fixedData[0].toFixed(2));
  }

  const convert = (data) => {
    let FETCH_REQUEST = `https://api.exchangerate.host/latest?BASE=${data.selectedFrom}&symbols=${data.selectedTo}&amount=${data.newAmount}`;
    getConvertedValue(FETCH_REQUEST);
  };

  return (
    <section>
      <ConverterForm onConvert={convert} />
      <Card>{convertedValue}</Card>
    </section>
  );
};

export default Converter;
