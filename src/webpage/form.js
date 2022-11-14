const createButton = (id, label, type) => {
  const _id = String (id);
  const _type = String (type);
  const _label = String (label);
  const btn = document.createElement('button');
  btn.innerText = _label;
  btn.setAttribute('id', _id);
  btn.setAttribute('type', _type);

  return btn;
}

const createCalendar = (id, labelText) => {
  const _id = String(id);
  const _text = String(labelText);

  const pairContainer = document.createElement('div');

  const label = document.createElement('label');
  label.setAttribute('for', _id);
  label.innerText = `${_text}: `;
  pairContainer.append(label);

  const input = document.createElement('input');
  input.setAttribute('id', _id);
  input.setAttribute('name', _id);
  input.setAttribute('type', 'date');
  pairContainer.append(input);

  const span = document.createElement('span');
  pairContainer.append(span);
  
  return pairContainer;
};

const createSelect = (id, label) => {
  const _id = String(id);
  const _text = String(label);

  const selectContainer = document.createElement('div');

  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', _id);
  textLabel.innerText = `${_text}: `;
  selectContainer.append(textLabel);

  const select = document.createElement('select');
  select.setAttribute('id', _id);
  select.setAttribute('name', _id);
  selectContainer.append(select);

  const optionLow = createOption('low');
  select.add(optionLow, 0);
  const optionNormal = createOption('normal');
  select.add(optionNormal, 1);
  const optionHigh = createOption('high');
  select.add(optionHigh, 2);

  return selectContainer;
};

const createOption = (optionName) => {
  const _name = optionName;
  const option = document.createElement('option');
  option.value = _name;
  option.innerText = String (_name);
  return option;
};

const createInputAndLabel = (id, labelText, inputType, booleanValue) => {
  const _id = String(id);
  const _text = String(labelText);
  const _type = String(inputType);
  const _flag = booleanValue;

  const pairContainer = document.createElement('div');

  const label = document.createElement('label');
  label.setAttribute('for', _id);
  label.innerText = `${_text}: `;
  pairContainer.append(label);

  const input = document.createElement(_type);
  input.setAttribute('id', _id);
  input.setAttribute('name', _id);
  input.required = _flag;
  pairContainer.append(input);

  const span = document.createElement('span');
  pairContainer.append(span);
  
  return pairContainer;
};

const makeForm = () => {
  const formContainer = document.createElement('div');
  formContainer.setAttribute('id', 'form-container');

  const fieldset = document.createElement('fieldset');
  formContainer.append(fieldset);

  const taskTitle = createInputAndLabel('task-title', 'Task', 'input', true);
  fieldset.append(taskTitle);

  const taskDesc = createInputAndLabel('task-desc', 'Description', 'textarea', false);
  fieldset.append(taskDesc);

  const selectPriority = createSelect('task-priority', 'Priority');
  fieldset.append(selectPriority);

  const date = createCalendar('task-date', 'Due Date');
  fieldset.append(date);

  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('btn-container');
  fieldset.append(btnsContainer);
  const createTaskBtn = createButton('create-task', 'Add', 'submit');
  const cancelTaskBtn = createButton('cancel-task', 'Cancel', 'button');

  btnsContainer.append(createTaskBtn);
  btnsContainer.append(cancelTaskBtn);

  return formContainer;
};

export default makeForm;