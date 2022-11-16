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
  const input = document.createElement('input');
  const span = document.createElement('span');

  label.setAttribute('for', _id);
  label.innerText = `${_text}: `;
  
  input.setAttribute('id', _id);
  input.setAttribute('name', _id);
  input.setAttribute('type', 'date');
  
  pairContainer.append(label);
  pairContainer.append(input);
  pairContainer.append(span);

  
  return pairContainer;
};

const createSelect = (id, label) => {
  const _id = String(id);
  const _text = String(label);

  const selectContainer = document.createElement('div');
  const textLabel = document.createElement('label');
  const select = document.createElement('select');

  textLabel.setAttribute('for', _id);
  textLabel.innerText = `${_text}: `;
  
  select.setAttribute('id', _id);
  select.setAttribute('name', _id);
  
  selectContainer.append(textLabel);
  selectContainer.append(select);

  const optionLow = createOption('low');
  const optionNormal = createOption('normal');
  const optionHigh = createOption('high');
  
  select.add(optionLow, 0);
  select.add(optionNormal, 1);
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
  const input = document.createElement(_type);
  const span = document.createElement('span');

  label.setAttribute('for', _id);
  label.innerText = `${_text}: `;

  input.setAttribute('id', _id);
  input.setAttribute('name', _id);
  input.required = _flag;
  
  
  pairContainer.append(label);
  pairContainer.append(input);
  pairContainer.append(span);
  
  return pairContainer;
};

const makeForm = () => {
  const formContainer = document.createElement('div');
  const fieldset = document.createElement('fieldset');
  const btnsContainer = document.createElement('div');

  formContainer.setAttribute('id', 'form-container');
  formContainer.append(fieldset);

  btnsContainer.classList.add('btn-container');

  const taskTitle = createInputAndLabel('task-title', 'Task', 'input', true);
  const taskDesc = createInputAndLabel('task-desc', 'Description', 'textarea', false);
  const selectPriority = createSelect('task-priority', 'Priority');
  const date = createCalendar('task-date', 'Due Date');

  const createTaskBtn = createButton('create-task', 'Create', 'submit');
  const cancelTaskBtn = createButton('cancel-task', 'Cancel', 'button');

  fieldset.append(taskTitle);
  fieldset.append(taskDesc);
  fieldset.append(selectPriority);
  fieldset.append(date);
  fieldset.append(btnsContainer);

  btnsContainer.append(createTaskBtn);
  btnsContainer.append(cancelTaskBtn);

  return formContainer;
};

export default makeForm;