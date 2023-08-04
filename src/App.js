

import "./App.css"
import Card from "./components/UI/Card"
import Converter from "./components/Converter/Converter"

function App() {
  return (
    <main>
      <Card className="converter">
        <div className="paragraph-div">
          <div className="paragraph">
            <p>Convert</p>
          </div>
        </div>
        <Converter/>
      </Card>
    </main>
  );
}

export default App;
