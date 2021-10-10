import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { Redirect } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import { InnerContentContainer, PageContainer } from "../ui-components";

const ProfilePage: React.FC = () => {
  const { auth, isSignedIn } = useContext(AuthContext);

  const handleLogOutClick = async () => {
    try {
      if (!auth) return;
      await signOut(auth);
    } catch (signOutError) {
      console.log("Error Signing Out::", signOutError);
    }
  };

  return !isSignedIn ? (
    <Redirect to="/" />
  ) : (
    <PageContainer>
      <InnerContentContainer>
        <Button onClick={handleLogOutClick}>LOG OUT</Button>
      </InnerContentContainer>
    </PageContainer>
  );
};

export default ProfilePage;
