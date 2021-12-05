import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import PatientsList from "./PatientsList";
import { appointmentsData } from "utils/doctorAppointmentsData";
import { Provider } from "react-redux";
import { store } from "redux/index";

describe("SignIn form", () => {
  it("render empty list massage if no appointments", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PatientsList appointments={[]} />
        </Provider>
      </ThemeProvider>
    );

    expect(getByTestId("emptyList")).toBeInTheDocument();
  });

  it("render list of appointments", async () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PatientsList appointments={appointmentsData} />
        </Provider>
      </ThemeProvider>
    );

    expect(getAllByTestId("listItem")).toHaveLength(appointmentsData.length);
  });
});
