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
import AdminLayout from "../components/common/AdminLayout";
import AdminScreen from "../pages/admin/AdminScreen";
import AdminDetailedScreen from "../pages/admin/AdminDetailedScreen";
import AdminHistory from "../pages/admin/AdminHistory";
import AdminRegister from "../pages/admin/AdminRegister";
import AdminSignin from "../pages/admin/AdminSignin";

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
    path: "/adminregister",
    element: <AdminRegister />,
  },
  {
    path: "/adminsignin",
    element: <AdminSignin />,
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
      </PrivateRoute>
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
  {
    path: "/adminroute",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminScreen />,
      },
      {
        path: "/adminroute/:studentID/detail",
        element: <AdminDetailedScreen />,
      },
      {
        path: "/adminroute/history",
        element: <AdminHistory />,
      },
    ],
  },
]);
