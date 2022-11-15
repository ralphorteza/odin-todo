
const createButton = (idName, displayText) => {
  const _id = String (idName);
  const _text = String (displayText);

  const btn = document.createElement('button');

  btn.setAttribute('type', 'button');
  btn.setAttribute('id',_id);
  btn.innerText = _text;

  return btn;
};

export default createButton;