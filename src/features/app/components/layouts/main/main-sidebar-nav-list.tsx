import clsx, { ClassValue } from "clsx";
import { MainSidebarNavItem } from "./main-sidebar-nav-item.layout";
import { MainSidebarNavItemType } from "./main-sidebar-nav-item.type";

interface MainSidebarNavListProps {
  items: MainSidebarNavItemType[];
  className?: ClassValue;
}

export const MainSidebarNavList = ({
  className,
  items,
}: MainSidebarNavListProps) => {
  return (
    <ul
      className={clsx(
        "flex h-full w-full flex-col content-center justify-start space-y-1",
        className
      )}
    >
      {items.map((item) => (
        <li key={item.title}>
          <MainSidebarNavItem {...item} />
        </li>
      ))}
    </ul>
  );
};
