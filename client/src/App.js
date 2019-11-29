import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Navbar from "./components/navbar.component";
import MainPage from "./components/main.component";
import ActivitiesList from "./components/activitiesList.component";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="App">
          <Navbar />
          <br />
          <Route path="/" exact component={MainPage} />
          <Route path="/activities/:day" component={ActivitiesList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
