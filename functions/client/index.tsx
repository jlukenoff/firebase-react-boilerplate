import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./lib/firebase";
import { AuthContextProvider } from "./context/authContext";
import theme from "./lib/mui-theme";

ReactDOM.render(
  <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AuthContextProvider>,
  document.getElementById("app") as HTMLDivElement
);
