import { showToast } from "nextjs-toast-notify";
import { CONFIG_TOAST } from "@/lib/constants/toast";

export const toast = {
  success: (message: string) => {
    showToast.success(message, CONFIG_TOAST);
  },
  error: (message: string) => {
    showToast.error(message, {
      ...CONFIG_TOAST,
    });
  },
  warning: (message: string) => {
    showToast.warning(message, {
      position: "top-right",
      duration: 3000,
    });
  },
  info: (message: string) => {
    showToast.info(message, {
      ...CONFIG_TOAST,
    });
  },
};
