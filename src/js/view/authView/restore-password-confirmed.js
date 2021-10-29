import AbstractComponent from "../abstract/abstract-component";
import { ROUTES } from "../../utils/routes";

const createRestorePasswordConfirmTemplate = () => {
  return `<div class="container aside__restorePassword">   
  <aside class="aside restorePass">
      <div class="aside__wrapper">
          <div class="aside__title_wrapper">
              <a class="aside__title__angle" href="#"></a>
              <h2 class="aside__title restorePass">Restore Password</h2>
          </div>
          <div class="restorePass__notification_wrapper">
              <p class="restorePass__notification">An email has been sent to <a href="#" class="restorePass__notification__accent">example@exam.com.</a> Check your inbox, and click the reset link provided.</p>
          </div>
      </div>
  </aside>
</div>`;
};

export default class RestorePasswordConfirmed extends AbstractComponent {
  constructor(changeState) {
    super();

    this._changeCurrentHandler = changeState;
    this._subsribeOnEvents();
  }

  getTemplate() {
    return createRestorePasswordConfirmTemplate();
  }

  _subsribeOnEvents() {
    const element = this.getElement();
    this._onChangeState(element);
  }

  _onChangeState(element) {
    element
      .querySelector(".aside__title__angle")
      .addEventListener("click", () =>
        this._changeCurrentHandler(ROUTES.signIn)
      );
  }
}
