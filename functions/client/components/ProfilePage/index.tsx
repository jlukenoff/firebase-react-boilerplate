import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { Redirect } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../context/authContext";

const ProfilePage: React.FC = () => {
  const { auth, isSignedIn } = useContext(AuthContext);

  const handleLogOutClick = async () => {
    try {
      if (!auth) return;
      const signOutResult = await signOut(auth);
      console.log("signOutResult:", signOutResult);
    } catch (signOutError) {
      console.log("signOutError:", signOutError);
    }
  };

  return !isSignedIn ? (
    <Redirect to="/" />
  ) : (
    <Button onClick={handleLogOutClick}>LOG OUT</Button>
  );
};

export default ProfilePage;
