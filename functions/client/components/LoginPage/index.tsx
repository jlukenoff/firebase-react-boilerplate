import React, { useContext, useRef, useEffect } from "react";
import { Auth } from "@firebase/auth";
import { styled, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { uiConfig, AuthUI } from "../../lib/firebase";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import AuthContext from "../../context/authContext";

const baselineStyles: CSSObject = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const PageContainer = styled(Box)(baselineStyles);

const InnerContentContainer = styled(Box)({
  ...baselineStyles,
  border: "1px dashed red",
  width: "80%",
  height: "80%",
  flexFlow: "column",
});

export interface LoginFormProps {
  handleFormSubmit: (data: LoginFormData) => void;
}

export interface LoginFormData extends FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const formRef = useRef(null);
  const { auth, isSignedIn = false } = useContext(AuthContext);

  useEffect(() => {
    if (formRef.current) {
      (AuthUI.getInstance() || new AuthUI(auth)).start(
        formRef.current,
        uiConfig
      );
    }
  }, [auth]);

  console.log("isSignedIn:", isSignedIn);
  console.log("auth:", auth);

  return (
    <Router>
      <PageContainer>
        <InnerContentContainer>
          <Typography variant="h3" component="h1">
            Welcome to DND Friend Finder
          </Typography>
          <Typography variant="h4" component="h2">
            Please log in
          </Typography>
          {isSignedIn ? (
            <Redirect to="/" />
          ) : (
            <div id="firebase-auth-form-container" ref={formRef}></div>
          )}
        </InnerContentContainer>
      </PageContainer>
    </Router>
  );
};

export default LoginPage;
