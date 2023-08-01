import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects"
import AboutMe from "./AboutMe";
import ContactMe from './ContactMe'
import Resume from './Resume'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
