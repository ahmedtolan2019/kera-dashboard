import clsx, { ClassValue } from "clsx";
import { Avatar } from "@/features/app";
import { BsThreeDotsVertical } from "react-icons/bs";

export interface MainSidebarFooterProps {
  className?: ClassValue;
}

export const MainSidebarFooter = ({ className }: MainSidebarFooterProps) => {
  return (
    <div
      className={clsx(
        "flex w-full border-spacing-2 items-center justify-between border-t-[1px] border-t-[#E7EDF3] pl-6 pr-2 pt-4",
        className
      )}
    >
      <Avatar
        title="Bubbles nursery & pre-school"
        subtitle="Admin"
        imgPlaceholderText="BP"
      />
      <button className="cursor-pointer hover:text-kera-blue-900/60">
        <BsThreeDotsVertical className="" />
      </button>
    </div>
  );
};
