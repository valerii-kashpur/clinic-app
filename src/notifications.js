import { toast } from "react-toastify";
import { errorReq, successReq } from "styles/notificationsStyles";

toast.configure();
export const notify = (status, message) => {
  switch (status) {
    case 200:
      return toast.success("success", successReq);
    case 201:
      return toast.success("success", successReq);
    default:
      return toast.error(message, errorReq);
  }
};