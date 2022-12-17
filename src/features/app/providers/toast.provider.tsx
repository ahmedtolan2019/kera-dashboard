import { Toaster, toast } from "react-hot-toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export type TriggerToastArgsType = {
  message: string;
  type: "success" | "error" | "loading";
};

export const triggerToast = ({ message, type }: TriggerToastArgsType): void => {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else if (type === "loading") {
    toast.loading(message);
  }
};

export const dissmisToast = (id?: string): void => {
  !id ? toast.dismiss() : toast.dismiss(id);
};
