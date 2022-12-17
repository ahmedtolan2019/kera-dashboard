import { Logo } from "@/features/app";
import clsx, { ClassValue } from "clsx";

export interface MainSidebarLogoProps {
  className?: ClassValue;
}

export const MainSidebarLogo = ({ className }: MainSidebarLogoProps) => {
  return (
    <div className={clsx("w-full", className)}>
      <Logo />
    </div>
  );
};
