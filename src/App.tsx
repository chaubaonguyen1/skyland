import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction/Introduction";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gioi-thieu" element={<Introduction />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
