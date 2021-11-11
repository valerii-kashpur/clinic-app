import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {routes} from "utils/routes";
import "./main.css";

function App() {
  return (
    <main id="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({path, component}) =>  <Route path={path} component={component} key={uuidv4()}/>)}
          <Redirect to="/sign-in" />
        </Switch>
      </Suspense>
    </main>
  );
}

export default App;
