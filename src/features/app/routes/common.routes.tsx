import { NotFoundPage } from "@/pages/root/404";
import { Outlet, Navigate } from "react-router-dom";
export const commonRoutes = [
  {
    path: "common",
    element: <Outlet />,
    children: [
      {
        path: "404",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="common/404" />,
  },
];
