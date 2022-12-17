import * as React from "react";
import clsx from "clsx";
import { Spinner } from "../spinner";

const variants = {
  primary: "bg-kera-blue-900 text-kera-white hover:ring-kera-blue-900/60",
  inverse: "bg-kera-white text-kera-blue-900 hover:ring-kera-blue-900/60",
  accent: "bg-kera-pink/90 text-kera-white hover:ring-kera-pink/60",
  accentInverse: "bg-kera-white text-kera-pink/90 hover:ring-kera-pink/60",
};

const sizes = {
  sm: "py-2 px-4 text-sm hover:ring-1 hover:ring-offset-1",
  md: "py-2 px-6 text-md hover:ring-2 hover:ring-offset-2",
  lg: "py-3 px-8 text-lg hover:ring-3 hover:ring-offset-3",
};

type IconProps =
  | {
      startIcon: React.ReactElement;
      endIcon?: never;
    }
  | {
      startIcon?: never;
      endIcon: React.ReactElement;
    }
  | {
      startIcon?: undefined;
      endIcon?: undefined;
    };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  varient?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      varient = "primary",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          "flex items-center justify-center rounded-md border border-gray-300 font-medium shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70",
          variants[varient],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span>
        {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
