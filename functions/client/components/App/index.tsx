import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import FirstPage from "../FirstPage";
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
          <Route path="/">
            <FirstPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
