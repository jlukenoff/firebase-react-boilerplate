import React, { useContext, useRef, useEffect } from "react";
import { PageContainer, InnerContentContainer } from "../ui-components";
import Typography from "@mui/material/Typography";

import { uiConfig, AuthUI } from "../../lib/firebase";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import AuthContext from "../../context/authContext";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const FirebaseAuthUIContainer = styled(Paper)({
  marginTop: "1rem",
});

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

  return (
    <Router>
      <PageContainer>
        <InnerContentContainer
          sx={{
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Typography variant="h4" component="h1">
            Welcome to DND Friend Finder
          </Typography>
          {isSignedIn ? (
            <Redirect to="/" />
          ) : (
            <FirebaseAuthUIContainer
              id="firebase-auth-form-container"
              ref={formRef}
            />
          )}
        </InnerContentContainer>
      </PageContainer>
    </Router>
  );
};

export default LoginPage;
