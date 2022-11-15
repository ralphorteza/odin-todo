import { add } from 'lodash';
import './style.css';
import {makeWebpage, makeCard} from './webpage/page.js';
import makeButton from './webpage/buttons.js';
import makeForm from './webpage/form.js';


const content = () => {
  const content = document.getElementById('content');
  const page = makeWebpage();
  //const card = makeCard();

  const header = page.header;
  content.append(header);

  const sidebar = page.sidebar;
  content.append(sidebar);

  const main = page.main;
  content.append(main);
  // main.append(makeCard());
  // main.append(makeCard());
  //const btnAddTask = makeButton('add-task', 'Add');
  //console.log(btnAddTask.id);
  //main.append(btnAddTask)
  //const addListener = addTaskListener(btnAddTask);
  const form = makeForm();
  main.append(form);

  const footer = page.footer;
  content.append(footer);

  const nav = navigate();
};

const addTaskListener = (btnPressed) => {
  const btn = document.querySelector(`#${btnPressed.id}`);
  btn.addEventListener('click', () => {
    main.append(makeCard());
  });
}

// TODO!!
const navigate = () => {
  const main = document.getElementById('main');
  const addBtn = document.querySelector('#add-task');
  const cancelBtn = document.querySelector('#cancel-task');
  const createBtn = document.querySelector('#create-task');
  
  addBtn.addEventListener('click', () => {
    //main.append(form);
  });
  cancelBtn.addEventListener('click', () => {
    //main.remove(form);
  });
};

content();