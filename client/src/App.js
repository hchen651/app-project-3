import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Redux
import { Provider } from "react-redux";
import store from "./store";

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
import PrivateRoute from "./components/PrivateRoute";

// temporary auth components - will be removed later
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/newcard" component={NewCard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          {/* Authorized use gets redirected to: */}
          <Switch>
            <PrivateRoute exact path="/collection" component={Collection} />
          </Switch>

          {/* Test routes for auth, will probably be removed later, just ignore */}
          {/* <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} /> */}
          
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;