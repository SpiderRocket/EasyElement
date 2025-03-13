HTMLElement.prototype.moveElement = function(parent) {
  const newParent = document.querySelector(parent);
  newParent.appendChild(this);
}