import './style.css';
import {makeWebpage, makeCard} from './webpage/page';
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
  page.main.append(makeCard());
  page.main.append(makeCard());
  const footer = page.footer;
  content.append(footer);

};

const navigate = () => {
};

content();