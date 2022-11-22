import { add } from 'lodash';
//  import './style.css';
import {makeWebpage, makeCard} from './webpage/page.js';
import makeButton from './webpage/buttons.js';
import makeForm from './webpage/form.js';
import makeController from './webpage/controller.js';

const home = [];

const content = () => {
  const content = document.getElementById('content');
  
  // const page = makeWebpage();
  const form = makeForm();

  // const header = page.header;
  // const sidebar = page.sidebar;
  // const main = page.main;
  // const footer = page.footer;
  // const overlay = page.overlay;
  
  // content.append(header);
  // content.append(sidebar);
  // content.append(main);
  // content.append(footer);
  content.append(form);
  // content.append(overlay);

  // const tempCard = makeCard();
  // main.append(tempCard);

  const controller = makeController();
};

content();