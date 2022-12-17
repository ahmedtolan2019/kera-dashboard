import { NavLink as RouterLink, NavLinkProps } from "react-router-dom";

export const RouterNavLink = ({ children, ...props }: NavLinkProps) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};
