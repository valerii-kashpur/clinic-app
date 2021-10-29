import { createTemplate } from "../../utils/render";

export default class AbstractComponent {
    constructor() {
        this._element = null;
    }

    getElement() {
        if(this._element === null) {    
            this._element = createTemplate(this.getTemplate());
        }
        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}