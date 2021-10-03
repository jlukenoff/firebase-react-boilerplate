import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar, { navItems } from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Offset />
        <Switch>
          {navItems.map(({ path, Component }) => (
            <Route path={path} key={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default App;
