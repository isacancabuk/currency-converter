const ConverterForm = (props) => {
  const convertData = (event) => {
    event.preventDefault();
    let data = "data";
    props.onConvert(data);
  };

  return <form onSubmit={convertData}></form>;
};

export default ConverterForm;
