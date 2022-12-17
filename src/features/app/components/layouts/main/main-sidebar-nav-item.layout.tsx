import { RouterNavLink } from "@/features/app";
import clsx from "clsx";

type SidebarItemElementsProps = {
  startIcon: React.ReactElement;
  badgeElement?: React.ReactElement | null;
  title: string;
};

export type MainSidebarItemNavProps = {
  to: string;
  end?: boolean;
} & SidebarItemElementsProps;

export const MainSidebarNavItem = ({
  startIcon,
  badgeElement = null,
  title = "Nav Link",
  to = "/",
  end = false,
}: MainSidebarItemNavProps) => {
  //TODO: add badgeElement
  //TODO: add tooltip
  return (
    <RouterNavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        clsx(
          "text flex items-center space-x-4 px-8 py-2 text-base text-kera-blue-900 hover:bg-kera-pink/5 hover:text-kera-pink",
          isActive && "rounded-md bg-kera-pink/10 text-kera-pink"
        )
      }
    >
      {startIcon ?? "->"}
      <span className="mx-2">{title}</span>
      {badgeElement}
    </RouterNavLink>
  );
};
