import { toast } from "react-toastify";
import { errorReq, successReq } from "styles/notificationsStyles";

export const successNotification = (message:string) => {
  toast.success(message, successReq);
};

export const errorNotification = () => {
  toast.error("Something went wrong!", errorReq);
};
