//lazy import
import { lazy } from "react";

const ParentsPage = lazy(() => import("@/pages/root/parents"));
const ParentPage = lazy(() => import("@/pages/root/parents/[id]"));

export const ParentsRoutes = {
  path: "parents",

  children: [
    {
      index: true,
      element: <ParentsPage />,
    },
    {
      path: ":id",
      element: <ParentPage />,
    },
  ],
};
