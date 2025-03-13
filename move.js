EasyElement.prototype.print = function(text) {
  const p = document.createElement("p");
  const pNode = document.createTextNode(text);
  p.appendChild(pNode);
  document.body.appendChild(p);
}
EasyElement.prototype.documentation = function() {
  EasyElement.print("Documentation")
}
