import { lazy } from "react";
import { MainLayout } from "@/features/app";
import { Navigate } from "react-router-dom";

import { ParentsRoutes } from "@/features/parents";

const RootPage = lazy(() => import("@/pages/root"));

export const protectedRoutes = [
  {
    element: <MainLayout />,

    path: "/",
    children: [
      { element: <RootPage />, index: true },
      ParentsRoutes,
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];
