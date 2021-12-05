import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import SignInForm from "./SignInForm";
import * as useAuth from "hooks/useAuth";
import { Provider } from "react-redux";
import { store } from "redux/index";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

describe("SignIn form", () => {
  it("should take correct params", async () => {
    const loginMock = jest.fn(() => {});
    jest.spyOn(useAuth, "useAuth").mockImplementation(() => {
      return { loginRequest: (values) => loginMock(values) };
    });

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SignInForm />
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
  });
});
