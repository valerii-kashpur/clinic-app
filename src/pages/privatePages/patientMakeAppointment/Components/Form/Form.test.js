import { render, screen, act } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { store } from "redux/index";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Form from "./Form";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const specializations = [
  {
    id: "c43fca01-3ea9-48f5-b5d8-4d7a4705e30f",
    specialization_name: "surgeon",
  },
  {
    id: "902240b7-514a-48c3-a67f-6acfb1d35030",
    specialization_name: "therapist",
  },
  {
    id: "ff01ee4f-f005-48f2-830c-7dd456a1cc17",
    specialization_name: "ophthalmologist",
  },
  {
    id: "fbebec6f-5ec0-4dcd-8e87-2a27af771f5a",
    specialization_name: "pediatrician",
  },
];

jest.mock("network/fetchOperations", () => ({}));

describe("SignIn form", () => {
  it("should take correct params", async () => {

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
