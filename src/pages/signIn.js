import React, { useState } from "react";
import AuthAside from "../components/AuthAside";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const SignIn = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  return (
    <AuthAside
      containerClass="aside__signIn"
      asideClass="signIn"
      title="Sign In"
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form action="" className="aside__form__signUp">
            <div className="aside__form__input__wrapper email">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={`aside__form__input email ${
                  errors.email && touched.email ? `error` : null
                }`}
              />
              {errors.email && touched.email ? (
                <p className="singUp__input__error__email">{errors.email}</p>
              ) : null}
              {/* <p className="singUp__input__error__email hidden">
                Email not found. Please check the spelling
              </p> */}
            </div>
            <div className="aside__form__input__wrapper password aside__input__password">
              <Field
                name="password"
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                className={`aside__form__input password ${
                  errors.password && touched.password ? `error` : ""
                }`}
              />
              <span
                className={`aside__input__password__eye ${
                  passwordToggle ? "eye_off" : ""
                }`}
                onClick={() => setPasswordToggle(!passwordToggle)}
              ></span>
              {errors.password && touched.password ? (
                <p className="singUp__input__error__password">
                  {errors.password}
                </p>
              ) : null}
              {/* <p className="singUp__input__error__password hidden">
                Password contain unsupported characters
              </p> */}
            </div>
            <button className="aside__form__signIn__button" type="submit">
              Sign In <span className="form__button__vector"></span>
            </button>
          </Form>
        )}
      </Formik>
      <p className="aside__link__forgotPassword">
        <Link className="aside__link__signIn_accent" to="/restore-password">
          Forgot password?
        </Link>
      </p>
      <div className="aside__signIn__link__wrapper">
        <p className="aside__link__signIn">Don't have an account?</p>
        <Link className="aside__link__signUp_accent" to="/sign-up">
          Sign Up
        </Link>
      </div>
    </AuthAside>
  );
};

export default SignIn;
