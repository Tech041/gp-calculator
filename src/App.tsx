import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Calculator from "./pages/calculator";
import GuessGame from "./pages/guessGame";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/guess-game" element={<GuessGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
