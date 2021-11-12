import { lazy } from "react";

const SignIn = lazy(() => import("pages/authPages/signIn/SignIn"));
const SignUp = lazy(() => import("pages/authPages/signUp/SignUp"));
const RestorePassword = lazy(() =>
  import("pages/authPages/restorePassword/RestorePassword")
);
const RestorePasswordConfirmed = lazy(() =>
  import("pages/authPages/restorePasswordConfirmed/RestorePasswordConfirmed")
);
const DoctorView = lazy(() =>
  import("pages/privatePages/doctorView/DoctorView")
);
const PatientView = lazy(() =>
  import("pages/privatePages/patientView/PatientView")
);

export const routes = [
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/restore-password-confirmed",
    component: RestorePasswordConfirmed,
  },
  {
    path: "/restore-password",
    component: RestorePassword,
  },
  {
    path: "/doctor-view",
    component: DoctorView,
  },
  {
    path: "/patient-view",
    component: PatientView,
  },
];
