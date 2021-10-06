import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar, { navItems } from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, ThemeProvider } from "@mui/material/styles";
import theme from "../../lib/mui-theme";
import LoginPage from "../LoginPage";
import AuthContext, { AuthContextProvider } from "../../context/authContext";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const App: React.FC = () => {
  const { isSignedIn } = useContext(AuthContext);

  if (!isSignedIn) {
    return <LoginPage />;
  }

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <NavBar />
          <Offset />
          <Switch>
            {["/profile", "/second-page", "/first-page"].map((key) => {
              const { path, Component } = navItems[key];
              return (
                <Route path={path} key={path}>
                  <Component />
                </Route>
              );
            })}
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthContextProvider>
  );
};

export default App;
