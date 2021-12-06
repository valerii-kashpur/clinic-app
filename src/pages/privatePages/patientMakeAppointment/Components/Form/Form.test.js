import { render, screen, act } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Form from "./Form";
import { QueryClient, QueryClientProvider } from "react-query";
import configureStore from "redux-mock-store";
import { SPECIALIZATIONS } from "__mock__/specializations";
import { DOCTORS } from "__mock__/doctors";
import { TIME } from "__mock__/time";
const queryClient = new QueryClient();

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("SignIn form", () => {
  it("block with radio buttons not disabled when specialization and doctor are picked", async () => {
    const initialState = {
      createAppointment: {
        specializations: SPECIALIZATIONS,
        selectedSpecialization: "c43fca01-3ea9-48f5-b5d8-4d7a4705e30f",
        doctors: DOCTORS,
        selectedDoctor: "8d662b40-4a13-11ec-a856-e9af5fdc77bf",
        reasons: "",
        note: "",
        selectedDate: "2021-12-30T19:13:05.000Z",
        availableTime: TIME,
        selectedTime: "",
        isFetching: false,
      },
    };
    const store = mockStore(initialState);

    await act(async () =>
      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <Form />
            </QueryClientProvider>
          </Provider>
        </ThemeProvider>
      )
    );

    await selectEvent.select(screen.getByText("select occupation"), [
      "surgeon",
    ]);
    await selectEvent.select(screen.getByText("select doctor"), [
      "Fedor Pomidor",
    ]);

    expect(await screen.findAllByTestId("radioIsNotDisabled")).toHaveLength(13);
  });
});
