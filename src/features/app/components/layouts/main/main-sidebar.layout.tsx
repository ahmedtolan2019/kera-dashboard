import { AiOutlineHome } from "react-icons/ai";
import { RiParentLine } from "react-icons/ri";
import { MainSidebarNavList } from "./main-sidebar-nav-list";
import { MainSidebarNavItemType } from "./main-sidebar-nav-item.type";
import { MainSidebarLogo } from "./main-sidebar-logo.layout";
import { MainSidebarFooter } from "./main-sidebar-footer";
const navItems: MainSidebarNavItemType[] = [
  {
    title: "Home",
    to: "/",
    startIcon: <AiOutlineHome />,
  },
  {
    title: "Parents",
    to: "parents",
    startIcon: <RiParentLine />,
    end: true,
  },
];

export const MainLayoutSidebar = () => {
  return (
    <div className="left-1 hidden h-full w-[400px] content-between space-y-4 border-r-[1px]  border-r-[#E7EDF3] py-8 md:flex md:flex-col">
      <MainSidebarLogo className="pl-16" />
      <MainSidebarNavList items={navItems} className="pr-4 pl-10" />
      <MainSidebarFooter />
    </div>
  );
};
