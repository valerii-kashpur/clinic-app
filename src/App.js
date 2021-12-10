import React, { Suspense, useEffect } from "react";
import { ModalProvider } from "styled-react-modal";
import { Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import mapedRoutes from "routes/routes";
import GlobalStyle from "styles/globalStyles";
import { useSelector, useDispatch } from "react-redux";
import { getUserTokenSelector, userRoleNameSelector } from "redux/selectors";
import LoaderComponent from "components/LoaderComponent";
import { fetchUser } from "redux/userSlice";
import { SpecialModalBackground } from "styles/specialModalBackground";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const token = useSelector(getUserTokenSelector);
  const userRole = useSelector(userRoleNameSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token, dispatch]);

  return (
    <>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <GlobalStyle />
        <main id="main">
          <Suspense fallback={<LoaderComponent />}>
            <Switch>
              {mapedRoutes(userRole)}
              <Redirect to="/sign-in" />
            </Switch>
          </Suspense>
          <ToastContainer />
        </main>
      </ModalProvider>
    </>
  );
}

export default App;
