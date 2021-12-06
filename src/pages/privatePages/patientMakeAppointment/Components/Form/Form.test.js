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
import {
  initialStateForFetch,
  initialStateForRadioButtonsTest,
} from "__mock__/statesForAppointment";
import * as useAppointmentForm from "hooks/useAppointmentForm";
const queryClient = new QueryClient();

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("SignIn form", () => {
  it("block with radio buttons not disabled when specialization and doctor are picked", async () => {
    const store = mockStore(initialStateForRadioButtonsTest);

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
  it("button is disabled after render", async () => {
    const store = mockStore(initialStateForRadioButtonsTest);

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

    expect(await screen.findByText(/submit/i)).toBeDisabled();
  });
  it("should take correct params", async () => {
    const store = mockStore(initialStateForFetch);

    const createAppointmentMock = jest.fn(() => {});
    jest
      .spyOn(useAppointmentForm, "useAppointmentForm")
      .mockImplementation(() => {
        return {
          createAppointmentRequest: (values) => createAppointmentMock(values),
        };
      });

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

    // Received element is disabled:
      // <button class="sc-gsDKAQ sc-furwcr hNkeGd" disabled="" height="56px" width="160px" />

    expect(await screen.findByText(/submit/i)).not.toBeDisabled();
  });
});
