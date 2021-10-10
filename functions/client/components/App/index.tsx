import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar";
import navItems, { NavItemOptions } from "../../lib/nav";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, ThemeProvider } from "@mui/material/styles";
import theme from "../../lib/mui-theme";
import APP_CONFIG from "../../lib/config";
import LoginPage from "../LoginPage";
import AuthContext, { AuthContextProvider } from "../../context/authContext";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const App: React.FC = () => {
  const { isSignedIn } = useContext(AuthContext);

  useEffect(() => {
    document.title = APP_CONFIG.APP_NAME;
  });

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
            {[
              NavItemOptions.PROFILE,
              NavItemOptions.FIRST_PAGE,
              NavItemOptions.HOME,
            ].map((key) => {
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
