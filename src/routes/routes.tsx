import { lazy } from "react";
import { v4 as uuidv4 } from "uuid";
import PATHS from "./paths";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const SignIn = lazy(() => import("pages/authPages/signIn/SignIn"));
const SignUp = lazy(() => import("pages/authPages/signUp/SignUp"));
const RestorePassword = lazy(
  () => import("pages/authPages/restorePassword/RestorePassword")
);
const RestorePasswordConfirmed = lazy(
  () =>
    import("pages/authPages/restorePasswordConfirmed/RestorePasswordConfirmed")
);
const DoctorView = lazy(
  () => import("pages/privatePages/doctorView/DoctorView")
);
const DoctorResolutions = lazy(
  () => import("pages/privatePages/doctorResolutions/DoctorResolutions")
);
const PatientView = lazy(
  () => import("pages/privatePages/patientView/PatientView")
);
const PatientMakeAppointment = lazy(
  () =>
    import("pages/privatePages/patientMakeAppointment/PatientMakeAppointment")
);
const PatientResolutions = lazy(
  () => import("pages/privatePages/patientsResolutions/PatientsResolutions")
);

const ROUTES = [
  {
    path: PATHS.doctorResolutions,
    component: DoctorResolutions,
    private: true,
    onlyForRole: "Doctor",
  },
  {
    path: PATHS.doctorView,
    component: DoctorView,
    private: true,
    onlyForRole: "Doctor",
  },
  {
    path: PATHS.patientsResolutions,
    component: PatientResolutions,
    private: true,
    onlyForRole: "Patient",
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

// Тип "LazyExoticComponent<() => Element>" не может быть назначен для типа "typeof Component".
//   Тип "ExoticComponent<unknown> & { readonly _result: () => Element; }" не предоставляет соответствия для сигнатуры "new <P = {}, S = {}, SS = any>(props: P | Readonly<P>): Component<P, S, SS>".ts(2322)
// PrivateRoutes.tsx(6, 16): Ожидаемый тип поступает из свойства "component", объявленного здесь в типе "IntrinsicAttributes & Props"

const mapedRoutes = (userRoleName: string) =>
  ROUTES.map((route) => {
    return route.private && userRoleName === route.onlyForRole ? (
      <PrivateRoutes
        path={route.path}
        // @ts-ignore: Unreachable code error
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
