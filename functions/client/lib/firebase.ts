import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const {
  auth: { AuthUI },
} = firebaseui;

const firebaseConfig = {
  apiKey: "AIzaSyDXnV6RUH50YLYHEBdoWxrHp9y3khKS3ps",
  authDomain: "dnd-friend-finder.firebaseapp.com",
  databaseURL: "https://dnd-friend-finder-default-rtdb.firebaseio.com",
  projectId: "dnd-friend-finder",
  storageBucket: "dnd-friend-finder.appspot.com",
  messagingSenderId: "764404034280",
  appId: "1:764404034280:web:c4130d665d96cfa416775d",
  measurementId: "G-HSLB1GLTX2",
};

const firebaseApp = initializeApp(firebaseConfig);

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
};

const analytics = getAnalytics(firebaseApp);

export { AuthUI, analytics, uiConfig };

export default firebaseApp;
