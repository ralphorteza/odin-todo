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
  main.append(makeCard());
  main.append(makeCard());
  const btnAddTask = makeButton('add-task', 'Add');
  //console.log(btnAddTask.id);
  main.append(btnAddTask)
  const addListener = addTaskListener(btnAddTask);

  const footer = page.footer;
  content.append(footer);

};

const addTaskListener = (btnPressed) => {
  const btn = document.querySelector(`#${btnPressed.id}`);
  btn.addEventListener('click', () => {
    main.append(makeCard());
  });
}

const navigate = () => {
  
};

content();