import { render } from "../utils/render";
import { ROUTES } from "../utils/routes";


export default class Controller {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    this._element = null;
    this._state = null;

    this.changeState = this.changeState.bind(this);
    this._renderStateComponent = this._renderStateComponent.bind(this);

    this._model.setState(ROUTES.signUp);
    this._model.setStateChangeHandler(this._renderStateComponent);
  }

  draw(element) {
    this._element = element;
    this._state = this._model.getCurrentState();
    this._initRouting(this._state);

    render(element);

    this._view.setChangeStateHandler(this.changeState);
    this._view.renderState(this._state);
  }

  _renderStateComponent() {
    this._state = this._model.getCurrentState();
    this._view._renderState(this._state);
  }

  _setStateComponent(state) {
    this._model.setState(state);
  }

  changeState(state) {
    history.pushState({ state: state }, `${state}`, `${state}`);
  }

  _initRouting(state) {
    history.pushState({ state: state }, `${state}`, `${state}`);
    window.addEventListener("popstate", () => {
      if (location.pathname === "/") {
        this._setStateComponent(ROUTES.signUp);
        return;
      }
      this._setStateComponent(location.pathname);
    });
  }
}
