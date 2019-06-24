import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import NewCard from "./pages/NewCard";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";


// React Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

//CSS
import "./App.css";

function App() {
  document.title = "Imprint";
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/newcard" component={NewCard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
