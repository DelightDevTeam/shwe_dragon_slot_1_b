import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Deposit from "../pages/Deposit";
import Layout from "../pages/Layout";

import Incomeletter from "../pages/Incomeletter";

import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PromotionPage from "../pages/Promotion";
import Games from "../pages/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/incomeletter",
        element: <Incomeletter />,
      },
      {
        path: "/promotion",
        element: <PromotionPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/games",
        element: <Games />,
      },
    ],
  },
]);

export default router;
