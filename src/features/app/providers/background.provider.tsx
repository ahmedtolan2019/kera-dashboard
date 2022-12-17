import * as React from "react";

interface BackgroundProviderProps {
  children: React.ReactNode;
}

export const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
  return (
    <div className="min-w-screen min-h-screen bg-colorful-circles bg-cover bg-center bg-no-repeat font-kera text-kera-blue-900 bg-blend-lighten">
      <div className="min-w-screen min-h-screen bg-kera-white/90 backdrop-blur-lg">
        {children}
      </div>
    </div>
  );
};
