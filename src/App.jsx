import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ErrorPage from "./Pages/404/ErrorPage";
import InDev from "./Pages/InDev/InDev";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<InDev />} />
        <Route path="/services" element={<InDev />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<InDev />} />
        <Route path="*" element={<ErrorPage />} /> {/* 404 Route */}
      </Routes>
    </>
  );
}

export default App;
