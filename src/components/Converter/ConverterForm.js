import { useState, useEffect } from "react";
import "./ConverterForm.css";

const OPTION_URL = "https://api.exchangerate.host/latest";

const ConverterForm = (props) => {
  const [option, setOption] = useState();
  const [amount, setAmount] = useState(100);
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();

  useEffect(() => {
    fetch(OPTION_URL)
      .then((response) => response.json())
      .then((data) => {
        data = Object.keys(data.rates);
        setOption(data);
      });
  });

  const getAmount = (e) => setAmount(e.target.value);
  const getOptionFrom = (e) => setFromValue(e.target.value);
  const getOptionTo = (e) => setToValue(e.target.value);

  const convertData = (event) => {
    event.preventDefault();
    let data = {
      newAmount: amount,
      selectedFrom: fromValue,
      selectedTo: toValue,
    };
    props.onConvert(data);
  };

  return (
    <form onSubmit={convertData}>
      <div className="controls">
        <div className="amount">
          <label>Amount</label>
          <input
            type="number"
            onClick={() => setAmount("")}
            onChange={getAmount}
            min="0.1"
            step="0.00001"
            value={amount}
          />
        </div>
        <div className="from">
          <label>From</label>
          <select onChange={getOptionFrom}>
            {option?.map((opt, idx) => (
              <option key={idx} value={fromValue}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="to">
          <label>To</label>
          <select onChange={getOptionTo}>
            {option?.map((opt, idx) => (
              <option key={idx}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="actions">
        <button type="submit">Convert</button>
      </div>
    </form>
  );
};

export default ConverterForm;
