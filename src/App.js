import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Summary from "./Summary";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/form2" element={<Form2 />}></Route>
          <Route path="/form3" element={<Form3 />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
