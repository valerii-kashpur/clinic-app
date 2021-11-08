import AbstractComponent from "../abstract/abstract-component";
import { ROUTES } from "../../utils/routes";
import validator from "validator";
import { fetchData } from "../../utils/fakeFetch";

const createSignUpTemplate = (emailValue = "", passwordValue = "") => {
  return `<div class="container aside__signUp">
  <aside class="aside signUp">
      <div class="aside__wrapper">
          <h2 class="aside__title">Sign Up</h2>
          <form action="" class="aside__form__signUp">
              <div class="aside__form__input__wrapper firstName">
                  <input type="text" placeholder="First name" class="aside__form__input">
              </div>
              <div class="aside__form__input__wrapper lastName">
                  <input type="text" placeholder="Last name" class="aside__form__input">
              </div>
              <div class="aside__form__input__wrapper email">
                  <input value="${emailValue}" type="email" placeholder="Email" class="aside__form__input email">
                  <p class="singUp__input__error__email hidden">Email not found. Please check the spelling</p>
              </div>
              <div class="aside__form__input__wrapper password aside__input__password">
                  <input value="${passwordValue}" type="password" placeholder="Password" class="aside__form__input password">
                  <span class="aside__input__password__eye"></span>
                  <p class="singUp__input__error__password hidden">Password contain unsupported characters</p>

              </div>
              <div class="aside__form__input__wrapper aside__input__confirmPassword">
                  <input type="password" placeholder="Confirm Password" class="aside__form__input password">
                  <span class="aside__input__password__eye__confirm"></span>
              </div>
              <button class="aside__form__signUp__button" type="submit">Sign up <span class="form__button__vector"></span></button>
          </form>
          <div class="aside__link__wrapper">
              <p class="aside__link__signUp">Already have an account?</p>
              <a class="aside__link__signUp_accent" href="#">Sign in</a>
          </div>
      </div>
  </aside>
</div>`;
};

export default class SignUp extends AbstractComponent {
  constructor(changeState) {
    super();

    this._changeCurrentHandler = changeState;
    this._isValidPass = true;
    this._isValidEmail = true;

    this._subscribeEvents();

  }

  getTemplate() {
    return createSignUpTemplate();
  }

  recoveryListeners() {
    this._subscribeEvents();
  }

  _subscribeEvents() {
    const element = this.getElement();

    this._setChangeStateHandler(element);
    this._inputsValidation(element);
    this._initEvents(element);
    this._getForm(element);
  }

  _setChangeStateHandler(element) {
    element
      .querySelector(".aside__link__signUp_accent")
      .addEventListener("click", () =>
        this._changeCurrentHandler(ROUTES.signIn)
      );
  }

  _inputsValidation(element) {
    element
      .querySelector(".aside__form__input__wrapper.email")
      .addEventListener("input", (e) => {
        const { value } = e.target;
        this._isValidEmail =
          validator.isEmail(value) || validator.isEmpty(value);
        this._toggleAlert(element, this._isValidEmail, "email");
      });

    element
      .querySelector(".aside__form__input__wrapper.aside__input__password")
      .addEventListener("input", (e) => {
        const { value } = e.target;
        this._isValidPass =
          !validator.isAlpha(value) || validator.isEmpty(value);
        this._toggleAlert(element, this._isValidPass, "password");
      });
  }

  _initEvents(element) {
    element
      .querySelector(".aside__input__password__eye")
      .addEventListener("click", (e) => {
        this._passwordToggle(e.currentTarget);
      });
    element
      .querySelector(".aside__input__password__eye__confirm")
      .addEventListener("click", (e) => {
        this._passwordToggle(e.currentTarget);
      });
  }

  _passwordToggle(target) {
    const parentOfTarget = target.parentElement;
    const passInput = parentOfTarget.querySelector(
      ".aside__form__input.password"
    );
    if (passInput.getAttribute("type") === "password") {
      parentOfTarget;
      passInput.setAttribute("type", "text");
      return;
    }
    parentOfTarget;
    passInput.setAttribute("type", "password");
  }

  _toggleAlert(element, isValid, fieldName) {
    if (isValid) {
      element
        .querySelector(`.singUp__input__error__${fieldName}`)
        .classList.add(`hidden`);
      element
        .querySelector(`.aside__form__input.${fieldName}`)
        .classList.remove(`error`);
      return;
    }
    element
      .querySelector(`.singUp__input__error__${fieldName}`)
      .classList.remove("hidden");
    element
      .querySelector(`.aside__form__input.${fieldName}`)
      .classList.add(`error`);
  }

  _submitForm(event) {
    event.preventDefault();
    const emailInput = document.querySelector(`.aside__form__input.email`);
    const passwordInput = document.querySelector(`.aside__form__input.password`);
    const reqData = {email:emailInput.value, password: passwordInput.value};

    fetchData(reqData)
  }

  _getForm(element) {
    const form = element.querySelector(`.aside__form__signUp`);
    form.addEventListener("submit", this._submitForm);
  }
}
