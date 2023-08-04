import "./Converter.css";
import ConverterForm from "./ConverterForm";

const Converter = () => {
  const convert = () => {
    console.log("converting");
  };

  return (
    <div>
      <ConverterForm onConvert={convert} />
    </div>
  );
};

export default Converter;
