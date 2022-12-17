import { authRoutes } from "@/features/auth";
import { Outlet, Navigate } from "react-router-dom";

export const publicRoutes = [
  {
    element: <Outlet />,

    path: "/",
    children: [
      { element: <Navigate to="auth/login" />, path: "/" },
      authRoutes,
    ],
  },
];
