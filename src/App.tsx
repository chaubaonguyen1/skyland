import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction/Introduction";
import PhuThoPage from "./pages/PhuThoProject/PhuThoPage";
import BaiDaiPage from "./pages/BaiDaiProject/BaiDaiPage";
import CoDongPage from "./pages/CoDongProject/CoDongPage";
import TanXaPage from "./pages/TanXaProject/TanXaPage";
import YenMyPage from "./pages/YenMyProject/YenMyPage";
import PhucTienPage from "./pages/PhucTienProject/PhucTienPage";
import Hiring from "./pages/Hiring/Hiring";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gioi-thieu" element={<Introduction />} />
          <Route path="dat-nen-phu-tho" element={<PhuThoPage />} />
          <Route path="dat-nen-bai-dai" element={<BaiDaiPage />} />
          <Route path="dat-nen-co-dong" element={<CoDongPage />} />
          <Route path="dat-nen-tan-xa" element={<TanXaPage />} />
          <Route path="dat-nen-yen-my" element={<YenMyPage />} />
          <Route path="dat-nen-phuc-tien" element={<PhucTienPage />} />
          <Route path="tuyen-dung" element={<Hiring />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
