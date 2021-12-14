export type notificationReqType = {
  position: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left" | undefined
  ,
  autoClose: number,
  hideProgressBar: boolean,
  closeOnClick: boolean,
  pauseOnHover: boolean,
  pauseOnFocusLoss: boolean,
  draggable: boolean,
};

export const successReq: notificationReqType = {
  position: "bottom-left",
  autoClose: 5000, //false to disable
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: false,
  draggable: false,
};


export const errorReq: notificationReqType = {
  position: "bottom-left",
  autoClose: 5000, //false to disable
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: false,
  draggable: false,
};