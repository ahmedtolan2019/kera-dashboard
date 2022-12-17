import MainLogoSrc from "@/features/app/assets/images/kera-main-logo.png";
import clsx, { ClassValue } from "clsx";

const variants = {
  main: MainLogoSrc,
};

const sizes = {
  sm: "w-8",
  md: "w-10",
  lg: "w-16",
};

export interface LogoProps {
  className?: ClassValue;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
}
//todo: add aspect ratio
export const Logo = ({
  className,
  size = "md",
  variant = "main",
}: LogoProps) => {
  return (
    <img
      src={variants[variant]}
      className={clsx(sizes[size], className)}
      alt="Kera dashboard logo"
    />
  );
};
