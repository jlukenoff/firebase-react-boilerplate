import FirstPage from "../components/FirstPage";
import Home from "../components/Home";
import ProfilePage from "../components/ProfilePage";

export interface NavItem {
  label: string;
  path: string;
  Component: React.FC;
}

export enum NavItemOptions {
  HOME,
  FIRST_PAGE,
  PROFILE,
}

const navItems: { [key: string]: NavItem } = {
  [NavItemOptions.PROFILE]: {
    label: "Profile",
    path: "/profile",
    Component: ProfilePage,
  },
  [NavItemOptions.HOME]: {
    label: "Home",
    path: "/",
    Component: Home,
  },
  [NavItemOptions.FIRST_PAGE]: {
    label: "First Page",
    path: "/first-page",
    Component: FirstPage,
  },
};

export default navItems;
