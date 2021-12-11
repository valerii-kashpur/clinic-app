import { lazy } from "react";
import { v4 as uuidv4 } from "uuid";
import  PATHS  from "./paths";
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
    path: PATHS.doctorView,
    component: DoctorView,
    private: true,
    onlyForRole: "Doctor",
  },
  {
    path: PATHS.makeAppointment,
    component: PatientMakeAppointment,
    private: true,
    onlyForRole: "Patient",
  },
  {
    path: PATHS.patientView,
    component: PatientView,
    private: true,
    onlyForRole: "Patient",
  },
  {
    path: PATHS.signIn,
    component: SignIn,
    private: false,
  },
  {
    path: PATHS.signUp,
    component: SignUp,
    private: false,
  },
  {
    path: PATHS.restorePasswordConfirmed,
    component: RestorePasswordConfirmed,
    private: false,
  },
  {
    path: PATHS.restorePassword,
    component: RestorePassword,
    private: false,
  },
];

const mapedRoutes = (userRoleName:string) =>
  ROUTES.map((route) => {
    return route.private && userRoleName === route.onlyForRole ? (
      <PrivateRoutes
       // @ts-ignore: Unreachable code error
        path={route.path}
        component={route.component}
        forRole={route.onlyForRole}
        key={uuidv4()}
      />
    ) : (
      <PublicRoutes
        path={route.path}
         // @ts-ignore: Unreachable code error
        component={route.component}
        key={uuidv4()}
      />
    );
  });

export default mapedRoutes;
