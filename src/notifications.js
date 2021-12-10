import { toast } from "react-toastify";
import { errorReq, successReq } from "styles/notificationsStyles";

export const successNotification = (message) => {
  toast.success(message, successReq);
};

export const errorNotification = () => {
  toast.success("Something went wrong!", errorReq);
};
