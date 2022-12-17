import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes, Navigate } from "react-router-dom";
import { publicRoutes, protectedRoutes, commonRoutes } from "@/features/app";

export const RouterProvider = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export const ProtectedApp = () => {
  const routing = useRoutes([...protectedRoutes, ...commonRoutes]);

  return routing;
};

export const PublicApp = () => {
  const routing = useRoutes([...publicRoutes, ...commonRoutes]);

  return routing;
};

export const AppRoutes = () => {
  const user = true;
  return user ? <ProtectedApp /> : <PublicApp />;
};
