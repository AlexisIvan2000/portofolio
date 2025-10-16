import React from "react";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    // Utilisez UN SEUL BrowserRouter pour envelopper toute l'application
    <BrowserRouter> 
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Vous pouvez aussi ajouter le Footer ici si vous en avez un */}
    </BrowserRouter>
  );
}

export default App;