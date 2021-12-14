import React, { Suspense, useEffect } from "react";
import { ModalProvider } from "styled-react-modal";
import { Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import mapedRoutes from "routes/routes";
import GlobalStyle from "styles/globalStyles";
import { getUserTokenSelector, userRoleNameSelector } from "redux/selectors";
import LoaderComponent from "components/LoaderComponent";
import { fetchUser } from "redux/slices/userSlice";
import { SpecialModalBackground } from "styles/specialModalBackground";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "types/useAppDispatch";
import { useAppSelector } from "types/useAppSelector";

function App() {
  const token = useAppSelector(getUserTokenSelector);
  const userRole = useAppSelector(userRoleNameSelector);
  const dispatch = useAppDispatch();

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
