import { lazy } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/root/auth/login"));

export const authRoutes = {
  path: "auth",

  children: [
    {
      index: true,
      element: <Navigate to="/auth/login" />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <Navigate to="/auth/login" />,
    },
  ],
};
