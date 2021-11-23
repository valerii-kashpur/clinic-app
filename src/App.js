import React, { Suspense, useEffect } from "react";
import { ModalProvider } from "styled-react-modal";
import { Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import mapedRoutes from "routes/routes";
import GlobalStyle from "styles/globalStyles";
import { useSelector, useDispatch } from "react-redux";
import { tokenSelector, userRoleName } from "Redux/selectors";
import { getProfile } from "network/fetchOperations";
import { setAuthorizedStatus } from "Redux/userSlice";
import LoaderComponent from "components/LoaderComponent";

import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const SpecialModalBackground = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 30;
background-color: rgba(0, 0, 0, 0.5);
align-items: center;
justify-content: center;
`;

function App() {
  const token = useSelector((state) => tokenSelector(state));
  const userRole = useSelector((state) => userRoleName(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getProfile(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (userRole) {
      dispatch(setAuthorizedStatus(true));
    }
  }, [userRole, dispatch]);



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
