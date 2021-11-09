import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./main.css";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const RestorePassword = lazy(() => import("./pages/RestorePassword"));
const RestorePasswordConfirmed = lazy(() =>
  import("./pages/RestorePasswordConfirmed")
);
const DoctorView = lazy(() => import("./pages/DoctorView"));
const PatientView = lazy(() => import("./pages/PatientView"));

function App() {
  return (
    <main id="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route
            path="/restore-password-confirmed"
            component={RestorePasswordConfirmed}
          />
          <Route path="/restore-password" component={RestorePassword} />
          <Route path="/doctor-view" component={DoctorView} />
          <Route path="/patient-view" component={PatientView} />
          <Redirect to="/sign-in" />
        </Switch>
      </Suspense>
    </main>
  );
}

export default App;
