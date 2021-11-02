import React from "react";
import './App.css';
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/About/about';
import Portfolio from './components/About/about';
// import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact components={Home} />
        <Route path="/About" components={About} />
        <Route path="/Contact" components={Contact} />
        <Route path="/Portofolio" components={Portfolio} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
      </Switch>
    </Router>
  );
}

export default App;