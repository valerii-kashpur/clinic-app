import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import mapedRoutes from "routes/routes";
import GlobalStyle from "styles/globalStyles";


function App() {
  return (
    <>
    <GlobalStyle/>
    <main id="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {mapedRoutes}
          <Redirect to="/patient-view/make-appointment" />
        </Switch>
      </Suspense>
    </main>
    </>
  );
}

export default App;
