import  PATHS  from "./paths";

export const roles: { [key: string]: string } = {
  Patient: PATHS.patientView,
  Doctor: PATHS.doctorView,
};
