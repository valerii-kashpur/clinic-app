export const createTemplate = (template) => {
  const newElement = document.createElement("div");
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (node) => {
    if(!node._element){
        return
    }
    const ROOT = document.getElementById(`root`);
    ROOT.append(node.getElement());
};

export const remove = (node) => {
  node.getElement().remove();
  node.removeElement();
};
