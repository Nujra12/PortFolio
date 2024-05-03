//import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'; // You need to create NotFound component

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} /> {/* Handle 404 */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
