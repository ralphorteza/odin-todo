import './style.css';
import makeWebpage from './webpage/page';
const content = () => {
  const content = document.getElementById('content');
  const page = makeWebpage();

  content.append(page.sidebar);
  content.append(page.header);
  content.append(page.main);
  content.append(page.footer);

};

content();