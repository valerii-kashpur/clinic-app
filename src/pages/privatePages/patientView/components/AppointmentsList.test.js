import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import AppointmentsList from "./AppointmentsList";
import { appointmentsData } from "utils/appointmentsData";

describe("SignIn form", () => {
  it("render empty list massage if no appointments", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AppointmentsList appointments={[]} />
      </ThemeProvider>
    );

    expect(getByTestId("emptyList")).toBeInTheDocument();
  });

  it("render list of appointments", async () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <AppointmentsList appointments={appointmentsData} />
      </ThemeProvider>
    );

    expect(getAllByTestId("listItem")).toHaveLength(appointmentsData.length);
  });
});
