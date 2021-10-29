import View from "./js/view/authView/view";
import Controller from "./js/controller/authController";
import Model from "./js/model/authModel";

const rootContainer = document.getElementById('root');
const controller = new Controller(new Model(), new View());
controller.draw(rootContainer)


