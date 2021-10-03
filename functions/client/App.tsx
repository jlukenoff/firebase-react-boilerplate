import React from "react";
import {
  BrowserRouter as Router /* Switch, Link, Route */,
} from "react-router-dom";
import NavBar from "./NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  );
};

export default App;
