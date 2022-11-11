import './style.css';
import {makeWebpage, makeCard} from './webpage/page';
import makeButton from './webpage/buttons';

const makeForm = () => {
  const formContainer = document.createElement('div');
  formContainer.setAttribute('id', 'form-container');

  const fieldset = document.createElement('fieldset');
  formContainer.append(fieldset);

  const taskTitle = createInputAndLabel("task-title", "Task", "input", true);
  fieldset.append(taskTitle);

  const taskDesc = createInputAndLabel("task-desc", "Description", "textarea", false);
  fieldset.append(taskDesc);

  return formContainer;
}

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

const content = () => {
  const content = document.getElementById('content');
  const form = makeForm();
  content.append(form);

};

// const content = () => {
//   const content = document.getElementById('content');
//   const page = makeWebpage();
//   //const card = makeCard();

//   const header = page.header;
//   content.append(header);

//   const sidebar = page.sidebar;
//   content.append(sidebar);

//   const main = page.main;
//   content.append(main);
//   main.append(makeCard());
//   main.append(makeCard());
//   const btnAddTask = makeButton("add-task", "Add");
//   //console.log(btnAddTask.id);
//   main.append(btnAddTask)
//   const addListener = addTaskListener(btnAddTask);

//   const footer = page.footer;
//   content.append(footer);

// };

// const addTaskListener = (btnPressed) => {
//   const btn = document.querySelector(`#${btnPressed.id}`);
//   btn.addEventListener('click', () => {
//     main.append(makeCard());
//   });
// }

// const navigate = () => {
  
// };

content();