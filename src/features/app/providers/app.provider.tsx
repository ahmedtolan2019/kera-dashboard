import * as React from "react";
import { Spinner } from "@/features/app";
import { ErrorBoundaryProvider } from "./error-boundary.provider";
import { BackgroundProvider } from "./background.provider";
import { ToastProvider } from "./toast.provider";
import { RouterProvider } from "./router.provider";

export const AppProvider = () => {
  return (
    <ToastProvider>
      <BackgroundProvider>
        <React.Suspense
          fallback={
            <div className="flex h-screen w-screen items-center justify-center">
              <Spinner size="xl" />
            </div>
          }
        >
          <ErrorBoundaryProvider>
            <RouterProvider />
          </ErrorBoundaryProvider>
        </React.Suspense>
      </BackgroundProvider>
    </ToastProvider>
  );
};
