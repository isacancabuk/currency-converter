import "./App.css"
import Card from "./components/UI/Card"
import Converter from "./components/Converter/Converter"

function App() {
  return (
    <main>
      <Card className="converter"/>
      <Converter/>
    </main>
    
  );
}

export default App;
