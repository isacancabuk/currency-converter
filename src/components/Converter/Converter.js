import "./Converter.css";
import ConverterForm from "./ConverterForm";

const Converter = () => {
  const convert = (data) => {
    console.log(data);
  };

  return (
    <section>
      <ConverterForm onConvert={convert} />
    </section>
  );
};

export default Converter;
