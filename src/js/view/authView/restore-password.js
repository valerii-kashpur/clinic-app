import AbstractComponent from "../abstract/abstract-component";
import { ROUTES } from "../../utils/routes";
import validator from "validator";
import { fetchData } from "../../utils/fakeFetch";


const createRestorePasswordTemplate = (emailValue = "") => {
  return `<div class="container aside__restorePassword">   
    <aside class="aside restorePass">
        <div class="aside__wrapper">
            <div class="aside__title_wrapper">
                <a class="aside__title__angle" href="#"></a>
                <h2 class="aside__title restorePass">Restore Password</h2>
            </div>
            <div class="restorePass__form__wrapper">
                <p class="restorePass__notification">Please use your email address, and we’ll send you the link to reset your password</p>
                <form action="" class="aside__form__signUp">          
                    <div class="aside__form__input__wrapper email">
                        <input value="${emailValue}" type="email" name="email" placeholder="Email" class="aside__form__input email">
                    </div>   
                    <button class="aside__form__restorePass__button">Send Resent Link <span class="form__button__vector"></span></button>
                </form>
            </div>
        </div>
    </aside>
</div>`;
};

export default class RestorePassword extends AbstractComponent {
  constructor(changeState) {
    super();

    this._isValidEmail = true;
    this._changeCurrentHandler = changeState;
    this._subscribeEvents();
  }

  recoveryListeners() {
    this._subscribeEvents();
    this._onChangeState(element);
  }

  getTemplate() {
    return createRestorePasswordTemplate();
  }

  _subscribeEvents() {
    const element = this.getElement();
    this._onChangeState(element);
    this._inputsValidation(element);
    this._getForm(element);
  }

  _onChangeState(element) {
    element
      .querySelector(".aside__title__angle")
      .addEventListener("click", () =>
        this._changeCurrentHandler(ROUTES.signIn)
      );
  }
  
  _inputsValidation(element) {
    element
    .querySelector(".aside__form__input.email")
    .addEventListener("input", (e) => {
      this._isValidEmail =
      validator.isEmail(e.target.value) ||
      validator.isEmpty(e.target.value);
      this._toggleAlert(element, this._isValidEmail, "email");
    });
  }

  _toggleAlert(element, isValid, fieldName) {
    if (isValid) {
      element
        .querySelector(`.aside__form__input.${fieldName}`)
        .classList.remove(`error`);
      return;
    }
    element
      .querySelector(`.aside__form__input.${fieldName}`)
      .classList.add("error");
  }
  
  _submitForm(event) {
    event.preventDefault();
    const input = document.querySelector(`.aside__form__input.email`);
    const value = input.value;
    fetchData(value);
  }

  _getForm(element) {
    const form = element.querySelector(`.aside__form__signUp`);
    form.addEventListener("click", this._submitForm);
  }
}
