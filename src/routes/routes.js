import { lazy } from "react";
import { v4 as uuidv4 } from "uuid";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

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
    path: "/doctor-view",
    component: DoctorView,
    private: true,
    onlyForRole: "Doctor",
  },
  {
    path: "/patient-view/make-appointment",
    component: PatientMakeAppointment,
    private: true,
    onlyForRole: "Patient",
  },
  {
    path: "/patient-view",
    component: PatientView,
    private: true,
    onlyForRole: "Patient",
  },
  {
    path: "/sign-in",
    component: SignIn,
    private: false,
  },
  {
    path: "/sign-up",
    component: SignUp,
    private: false,
  },
  {
    path: "/restore-password-confirmed",
    component: RestorePasswordConfirmed,
    private: false,
  },
  {
    path: "/restore-password",
    component: RestorePassword,
    private: false,
  },
];

const mapedRoutes = (userRoleName) =>
  ROUTES.map((route) => {
    return route.private && userRoleName === route.onlyForRole ? (
      <PrivateRoutes
        path={route.path}
        component={route.component}
        forRole={route.onlyForRole}
        key={uuidv4()}
      />
    ) : (
      <PublicRoutes
        path={route.path}
        component={route.component}
        key={uuidv4()}
      />
    );
  });

export default mapedRoutes;
