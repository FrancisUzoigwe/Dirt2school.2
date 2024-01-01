import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingScreen from "../pages/auth/LandingScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import FirstLayout from "../components/common/FirstLayout";
import HomeScreen from "../pages/screen/HomeScreen";
import ProfileScreen from "../pages/screen/ProfileScreen";
import SettingScreen from "../pages/screen/SettingScreen";
import PrivateRoute from "./PrivateRoute";
import EmailScreen from "../pages/auth/EmailScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },

  {
    path: "/signin",
    element: <SigninScreen />,
  },
  {
    path: "/email",
    element: <EmailScreen />,
  },

  {
    path: "/auth",
    element: (
      <PrivateRoute>
      <Layout />
      // </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/auth/profile",
        element: <ProfileScreen />,
      },
      {
        path: "/auth/settings",
        element: <SettingScreen />,
      },
    ],
  },
]);
