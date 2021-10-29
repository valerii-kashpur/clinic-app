import AbstractComponent from "../abstract/abstract-component";
import { ROUTES } from "../../utils/routes";
import validator from "validator";
import { fetchData } from "../../utils/fakeFetch";

const createSignInTemplate = (emailValue = "", passwordValue = "") => {
  return `<div class="container aside__signIn">
  <aside class="aside signIn">
      <div class="aside__wrapper">
          <h2 class="aside__title">Sign In</h2>
          <form action="" class="aside__form__signUp">          
              <div class="aside__form__input__wrapper email">
                  <input value="${emailValue}" type="email" placeholder="Email" class="aside__form__input email">
                  <p class="singUp__input__error__email hidden">Email not found. Please check the spelling</p>
              </div>
              <div class="aside__form__input__wrapper password aside__input__password">
                  <input value="${passwordValue}" type="password" min="8" placeholder="Password" class="aside__form__input password">
                  <span class="aside__input__password__eye"></span>
                  <p class="singUp__input__error__password hidden">Password contain unsupported characters</p>
              </div>      
              <button class="aside__form__signIn__button" type="submit">Sign In <span class="form__button__vector"></span></button>
          </form>
          <p class="aside__link__forgotPassword"><a class="aside__link__signIn_accent" href="#" data-link>Forgot password?</a></p>
          <div class="aside__signIn__link__wrapper">
              <p class="aside__link__signIn">Don't have an account?</p>
              <a class="aside__link__signUp_accent" href="#" data-link>Sign Up</a>
          </div>
      </div>
  </aside>
</div>`;
};

export default class SignIn extends AbstractComponent {
  constructor(changeState) {
    super();

    this._isValidEmail = true;
    this._isValidPass = true;

    this._changeCurrentHandler = changeState;
    this._subscribeEvents();
  }

  recoveryListeners() {
    this._subscribeEvents();
  }

  getTemplate() {
    return createSignInTemplate();
  }

  rerender() {
    super.rerender();
  }

  _subscribeEvents() {
    const element = this.getElement();

    this._onChangeState(element);
    this._inputsValidation(element);
    this._passwordToggle(element);
    this._getForm(element);
  }

  _onChangeState(element) {
    element
      .querySelector(".aside__link__signUp_accent")
      .addEventListener("click", () =>
        this._changeCurrentHandler(ROUTES.signUp)
      );
    element
      .querySelector(".aside__link__signIn_accent")
      .addEventListener("click", () =>
        this._changeCurrentHandler(ROUTES.restorePassword)
      );
  }

  _inputsValidation(element) {
    element
      .querySelector(".aside__form__input.email")
      .addEventListener("input", (e) => {
        const { value } = e.target;
        this._isValidEmail =
          validator.isEmail(value) || validator.isEmpty(value);
        this._toggleAlert(element, this._isValidEmail, "email");
      });

    element
      .querySelector(".aside__form__input.password")
      .addEventListener("input", (e) => {
        const { value } = e.target;
        this._isValidPass =
          !validator.isAlpha(value) || validator.isEmpty(value);
        this._toggleAlert(element, this._isValidPass, "password");
      });
  }

  _passwordToggle(element) {
    element
      .querySelector(".aside__input__password__eye")
      .addEventListener("click", () => {
        const passInput = element.querySelector(".aside__form__input.password");
        if (passInput.getAttribute("type") === "password") {
          passInput.setAttribute("type", "text");
          return;
        }
        passInput.setAttribute("type", "password");
      });
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
    const reqData = {email:emailInput.value, password: passwordInput.value}
    fetchData(reqData)
  }

  _getForm(element) {
    const form = element.querySelector(`.aside__form__signUp`);
    form.addEventListener("submit", this._submitForm);
  }
}
