import { add } from 'lodash';
import './style.css';
import {makeWebpage, makeCard} from './webpage/page.js';
import makeButton from './webpage/buttons.js';
import makeForm from './webpage/form.js';
import makeController from './webpage/controller.js'

const content = () => {
  const content = document.getElementById('content');
  
  const page = makeWebpage();
  const form = makeForm();

  const header = page.header;
  const sidebar = page.sidebar;
  const main = page.main;
  const footer = page.footer;
  const overlay = page.overlay;
  
  content.append(header);
  content.append(sidebar);
  content.append(main);
  content.append(footer);
  content.append(form);
  content.append(overlay);

  const controller = makeController();
};

// const navigate = () => {
//   const form = document.getElementById('form-container');
//   const overlay = document.getElementById('overlay');

//   const openFormBtns = document.querySelector('#add-task');
//   const closeFormBtns = document.querySelector('#cancel-task');

//   openFormBtns.addEventListener('click', () => {
//     openForm(form, overlay)
//   });

//   overlay.addEventListener('click', () => {
//     closeForm(form, overlay);
//   });

//   closeFormBtns.addEventListener('click', () => {
//     closeForm(form, overlay)
//   });
// };

// const openForm = (form, overlay) => {
//   if (form == null) return
//   form.classList.add('active')
//   overlay.classList.add('active')
// };

// const closeForm = (form, overlay) => {
//   if (form == null) return
//   form.classList.remove('active')
//   overlay.classList.remove('active')
// };

content();