import { useState } from "react";
import "./ConverterForm.css";

const OPTION_URL = "https://api.exchangerate.host/latest";

const ConverterForm = (props) => {
  const [option, setOption] = useState({});
  const [amount, setAmount] = useState(100);
  const getAmount = (e) => {
    setAmount(e.target.value);
  };

  const convertData = (event) => {
    event.preventDefault();
    let data = {
      newAmount: amount,
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
          <select></select>
        </div>
        <div className="to">
          <label>To</label>
          <select>
            <option>Euro</option>
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
