import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import * as useAuth from "hooks/useAuth";
import { Provider } from "react-redux";
import { store } from "redux/index";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import SignUpForm from "./SignUpForm";

describe("SignIn form", () => {
  it("should take correct params", async () => {
    const registrationMock = jest.fn(() => {});
    jest.spyOn(useAuth, "useAuth").mockImplementation(() => {
      return { registrationRequest: (values) => registrationMock(values) };
    });

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      </ThemeProvider>
    );

    userEvent.type(screen.getByPlaceholderText(/first name/i), "mango121212");
    userEvent.type(screen.getByPlaceholderText(/last name/i), "mango121212");
    userEvent.type(screen.getByPlaceholderText(/email/i), "mango@a.com");
    userEvent.type(screen.getByPlaceholderText("Password"), "asdasdasd");
    userEvent.type(
      screen.getByPlaceholderText("Confirm Password"),
      "asdasdasd"
    );
    userEvent.click(screen.getByText(/sign up/i));

    await waitFor(() => {
      expect(registrationMock).toHaveBeenCalledWith({
        firstName: "mango121212",
        lastName: "mango121212",
        userName: "mango@a.com",
        password: "asdasdasd",
      });
    });
  });
});
