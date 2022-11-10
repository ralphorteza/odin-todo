
const createButton = (idName, displayText) => {
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', String(idName));
  btn.innerText = String(displayText);

  return btn;
};

export default createButton;