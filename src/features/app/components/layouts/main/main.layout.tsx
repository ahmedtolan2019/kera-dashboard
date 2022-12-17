import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "@/features/app";
import { MainLayoutSidebar } from "./main-sidebar.layout";
import { MainContentLayout } from "./main-content.layout";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-start">
      <MainLayoutSidebar />
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <Spinner size="md" />
          </div>
        }
      >
        <MainContentLayout />
      </Suspense>
    </div>
  );
};
