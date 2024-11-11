import { toast } from "react-toastify";

export const showError = (msg: string) => {
  toast.dismiss();
  toast.error(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
  });
};

export const showInfo = (msg: string) => {
  toast.dismiss();
  toast.success(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
  });
};
