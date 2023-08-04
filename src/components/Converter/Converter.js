import "./Converter.css";
import ConverterForm from "./ConverterForm";

const Converter = () => {
  const convert = (data) => {
    console.log(data);
  };

  return (
    <div>
      <ConverterForm onConvert={convert} />
    </div>
  );
};

export default Converter;
