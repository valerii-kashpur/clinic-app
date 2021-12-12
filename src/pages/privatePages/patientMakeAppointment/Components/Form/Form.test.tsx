import { render, screen, act, cleanup, waitFor } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
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
import userEvent from "@testing-library/user-event";
const queryClient = new QueryClient();

const middlewares:any[] = [];
const mockStore = configureStore(middlewares);

afterEach(cleanup);
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

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
  it("fetch create appointments was called", async () => {
    const store = mockStore(initialStateForFetch);

    const createAppointmentMock = jest.fn(() => {});
    jest
      .spyOn(useAppointmentForm, "useAppointmentForm")
      .mockImplementation(() => {
        return {
          createAppointmentRequest: () => createAppointmentMock(),
        };
      });

    await act(async () =>
      render(
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                <Form />
              </QueryClientProvider>
            </Provider>
          </ThemeProvider>
        </MemoryRouter>
      )
    );

    expect(screen.getByText(/submit/i)).toHaveProperty("disabled", false);
    userEvent.click(screen.getByText(/submit/i));
    await waitFor(() => {
      expect(createAppointmentMock).toHaveBeenCalledTimes(1);
    });
  });
});
