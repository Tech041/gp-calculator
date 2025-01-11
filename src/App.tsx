import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Calculator from "./pages/calculator";
import GuessGame from "./pages/guessGame";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />{" "}
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
