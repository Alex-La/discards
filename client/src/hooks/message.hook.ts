import { useCallback } from "react";
import { toast, ToastOptions } from "react-toastify";

type TMessage = {
  text: String;
  type: "success" | "error";
};

const settings: ToastOptions = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const useMessage = () =>
  useCallback(({ text, type }: TMessage) => toast[type](text, settings), []);
