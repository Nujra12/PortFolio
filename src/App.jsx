//import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Router basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Handle unknown routes */}
          <Route path="*" element={<Navigate to="/hero" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
