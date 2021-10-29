export default class Model {
  constructor() {
    this._stateChangeHandlers = [];
    this._state = null;
  }

  getCurrentState() {
    return this._state;
  }

  setState(state) {
    this._state = state;
    this.callHandlers(this._stateChangeHandlers);
  }

  callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }

  setStateChangeHandler(handler) {
    this._stateChangeHandlers.push(handler);
  }
}
