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
import HistoryPage from "../pages/HistoryPage";
import GameLogPage from "../pages/GameLog";
import PromotionDetail from "../pages/PromotionDetail";

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
        path: "/incomeletter",
        element: <Incomeletter />,
      },
      {
        path: "/promotion",
        element: <PromotionPage />,
      },
      {
        path: "/promotionDetail/:id",
        element: <PromotionDetail />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/game-log",
        element: <GameLogPage />,
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
