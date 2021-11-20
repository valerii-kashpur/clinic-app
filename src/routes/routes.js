import { lazy } from "react";
import { v4 as uuidv4 } from "uuid";
import { Route } from "react-router-dom";

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
const PatientMakeAppointment = lazy(() =>
  import("pages/privatePages/patientMakeAppointment/PatientMakeAppointment")
);

const ROUTES = [
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
    path: "/patient-view/make-appointment",
    component: PatientMakeAppointment,
  },
  {
    path: "/patient-view",
    component: PatientView,
  },
];

const mapedRoutes = ROUTES.map(({ path, component }) => (
  <Route path={path} component={component} key={uuidv4()} />
));

export default mapedRoutes;
