import React, { useState } from "react";
import AuthAside from "../components/AuthAside";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const SignUp = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [passwordConfirmToggle, setPasswordConfirmToggle] = useState(false);

  return (
    <AuthAside
      containerClass="aside__signUp"
      asideClass="signUp"
      title="Sign Up"
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form action="" className="aside__form__signUp">
            <div className="aside__form__input__wrapper firstName">
              <Field
                name="firstName"
                type="text"
                placeholder="First name"
                className="aside__form__input"
              />
            </div>
            <div className="aside__form__input__wrapper lastName">
              <Field
                name="lastName"
                placeholder="Last name"
                className="aside__form__input"
              />
            </div>
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
                  errors.password && touched.password ? `error` : null
                }`}
              />
              <span
                className="aside__input__password__eye"
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
            <div className="aside__form__input__wrapper aside__input__confirmPassword">
              <Field
                name="confirmPassword"
                type={passwordConfirmToggle ? "text" : "password"}
                placeholder="Confirm Password"
                className="aside__form__input password"
              />
              <span
                className="aside__input__password__eye__confirm"
                onClick={() => setPasswordConfirmToggle(!passwordConfirmToggle)}
              ></span>
            </div>
            <button className="aside__form__signUp__button" type="submit">
              Sign up <span className="form__button__vector"></span>
            </button>
          </Form>
        )}
      </Formik>
      <div className="aside__link__wrapper">
        <p className="aside__link__signUp">Already have an account?</p>
        <Link className="aside__link__signUp_accent" to="/">
          Sign in
        </Link>
      </div>
    </AuthAside>
  );
};

export default SignUp;
