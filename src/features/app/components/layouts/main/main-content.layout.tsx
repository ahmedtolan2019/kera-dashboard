import { Outlet } from "react-router-dom";

export const MainContentLayout = () => {
  return (
    <div className="h-full w-full px-12 pt-12 pb-8">
      <Outlet />
    </div>
  );
};
