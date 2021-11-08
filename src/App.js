import { Switch, Route, Redirect } from 'react-router-dom';
import DoctorView from './pages/doctorView';
import PatientView from './pages/patientView';
import restorePassword from './pages/restorePassword';
import restorePasswordConfirmed from './pages/restorePasswordConfirmed';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

import "./main.css";

function App() {
  return (
    <main id="main">
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/restore-password-confirmed" component={restorePasswordConfirmed} />
        <Route path="/restore-password" component={restorePassword} />
        <Route path="/doctor-view" component={DoctorView} />
        <Route path="/patient-view" component={PatientView} />
        <Redirect to="/sign-in" />
      </Switch>
    </main>
  );
}

export default App;
