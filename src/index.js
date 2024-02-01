import React from "react";
import ReactDOM from "react-dom/client";
import "./components/styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Logement from "./Pages/Logement.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
