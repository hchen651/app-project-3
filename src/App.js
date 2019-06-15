import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Collection from "./pages/Collection";
import NewCard from "./pages/NewCard";

// React Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

//CSS
import "./App.css";

function App() {
  document.title = "Rolodex (Name Pending)";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/newcard" component={NewCard} />
        </Wrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
