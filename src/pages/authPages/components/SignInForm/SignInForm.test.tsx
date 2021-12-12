import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import SignInForm from "./SignInForm";
import * as useAuth from "hooks/useAuth";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { ToastContainer } from "react-toastify";
import { setupServer } from "msw/node";
import { handlers } from "__mock__/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("SignIn form", () => {
  it("should take correct params", async () => {
    const loginMock = jest.fn(() => {});
    const mockedRequest = jest
      .spyOn(useAuth, "useAuth")
      .mockImplementation(() => {
        return { loginRequest: (values) => loginMock(values) };
      });

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SignInForm />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    );

    userEvent.type(screen.getByPlaceholderText(/email/i), "mango@a.com");
    userEvent.type(screen.getByPlaceholderText(/password/i), "asdasdasd");
    userEvent.click(screen.getByText(/sign in/i));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith({
        userName: "mango@a.com",
        password: "asdasdasd",
      });
    });

    mockedRequest.mockRestore();
  });

  it("render message when fetch is success", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SignInForm />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    );

    userEvent.type(screen.getByPlaceholderText(/email/i), "mango@a.com");
    userEvent.type(screen.getByPlaceholderText(/password/i), "asdasdasd");
    userEvent.click(screen.getByText(/sign in/i));

    await waitFor(() => {
      expect(
        screen.getByText("You have been successfully login!")
      ).toBeInTheDocument();
    });
  });

  it("render error when fetch is failure", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SignInForm />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    );

    userEvent.type(screen.getByPlaceholderText(/email/i), "123321123312@a.com");
    userEvent.type(screen.getByPlaceholderText(/password/i), "1233211233");
    userEvent.click(screen.getByText(/sign in/i));

    await waitFor(() => {
      expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    });
  });
});
