import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import NoMatch from "./Pages/NoMatch";
import About from "./Pages/About"

const App = () => (
  <Router>
    <div>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route component={NoMatch} />
        
      </Switch>
      <Footer></Footer>
    </div>
  </Router>

);



export default App;
