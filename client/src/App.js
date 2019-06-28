import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

// Pages
import AllRoutes from './components/AllRoutes';

// Components
import Footer from "./components/Footer";

// Material UI
import Container from '@material-ui/core/Container';

function App() {

  return (
    <Provider store={store}>
      {/* <Navbar />
      <Navbar2 /> */}
      <Container maxWidth="xl">
        <Router>
          <AllRoutes />
        </Router>
      </Container>
      <Footer />
    </Provider>
  );
}

export default App;