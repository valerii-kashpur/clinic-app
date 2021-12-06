import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { store } from "redux/index";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Form from "./Form";
import { QueryClient, QueryClientProvider } from "react-query";
import * as useAppointmentform from "hooks/useAppointmentForm";
const queryClient = new QueryClient();

jest.mock("network/fetchOperations", () => ({}));

describe("SignIn form", () => {
  it("should take correct params", async () => {
    const loginMock = jest.fn(() => {});

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
  });
});
