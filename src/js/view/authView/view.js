import { render, remove } from "../../utils/render";
import { ROUTES } from "../../utils/routes";

import AbstractComponent from "../abstract/abstract-component";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import RestorePassword from "./restore-password";
import RestorePasswordConfirmed from "./restore-password-confirmed";

export default class View extends AbstractComponent {
  constructor() {
    super();

    this._stateComponent = null;
    this._renderState = this.renderState.bind(this);
  }

  getTemplate() {}

  renderState(state) {
    if (this._stateComponent) {
      remove(this._stateComponent);
    }

    switch (state) {
      case ROUTES.signIn:
        this._signInComponent = new SignIn(this._onChangeState);
        this._stateComponent = this._signInComponent;
        render(this._signInComponent);
        break;
      case ROUTES.signUp:
        this._signUpComponent = new SignUp(this._onChangeState);
        this._stateComponent = this._signUpComponent;
        render(this._signUpComponent);
        break;
      case ROUTES.restorePassword:
        this._restorePasswordComponent = new RestorePassword(
          this._onChangeState
        );
        this._stateComponent = this._restorePasswordComponent;
        render(this._restorePasswordComponent);
        break;
      case ROUTES.restorePasswordConfirmed:
        this._restorePasswordConfirmComponent = new RestorePasswordConfirmed(
          this._onChangeState
        );
        this._stateComponent = this._restorePasswordConfirmComponent;
        render(this._restorePasswordConfirmComponent);
        break;
    }
  }

  setChangeStateHandler(handler) {
    this._onChangeState = handler;
  }
}
