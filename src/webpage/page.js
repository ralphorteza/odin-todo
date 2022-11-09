
// TODO: header
const makeHeader = () => {
  const headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'header');

  return headerContainer;
};

// TODO: footer
const makeFooter = () => {
  const footerContainer = document.createElement('div');
  footerContainer.setAttribute('id', 'footer');

  return footerContainer;
};

// TODO: main
const makeMain = () => {
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main');

  return mainContainer;
};

// TODO: card
const makeCard = () => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  return cardContainer;
};

// TODO: sidebar
const makeSidebar = () => {
  const sidebarContainer = document.createElement('div');
  sidebarContainer.setAttribute('id', 'sidebar');

  return sidebarContainer;
};

// TODO: webpage
const makeWebpage = () => {
  const sidebar = makeSidebar();
  const header = makeHeader();
  const main = makeMain();
  const footer = makeFooter();

  return {sidebar, header, main, footer};
};


export {makeWebpage, makeCard};
