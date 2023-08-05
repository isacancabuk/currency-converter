import { useState, useEffect } from "react";
import "./Converter.css";
import Card from "../UI/Card";
import ConverterForm from "./ConverterForm";

const Converter = () => {
  const [convertedValue, setConvertedValue] = useState();
  const [from, setFrom] = useState();

  async function getConvertedValue(url) {
    const res = await fetch(url);
    const data = await res.json();
    const fixedData = Object.values(data.rates);
    setConvertedValue(fixedData[0].toFixed(2));
  }

  const convert = (data) => {
    setFrom(data.selectedFrom);
    let FETCH_REQUEST = `https://api.exchangerate.host/latest?BASE=${data.selectedFrom}&symbols=${data.selectedTo}&amount=${data.newAmount}`;
    getConvertedValue(FETCH_REQUEST);
  };

  return (
    <section>
      <ConverterForm onConvert={convert} />
      <div className="converted-value">{convertedValue}</div>
    </section>
  );
};

export default Converter;
