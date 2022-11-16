
import { makeCard } from "./page.js";

const createFormController = () => {
  const main = document.getElementById('main');
  const form = document.getElementById('form-container');
  const overlay = document.getElementById('overlay');

  const openFormBtns = document.querySelector('#add-task');
  const closeFormBtns = document.querySelector('#cancel-task');
  const createTaskBtn = document.querySelector('#create-task');

  const _openForm = (form, overlay) => {
    if (form == null) return;
    form.classList.add('active');
    overlay.classList.add('active');
  };

  const _closeForm = (form, overlay) => {
    if (form == null) return;
    form.classList.remove('active');
    overlay.classList.remove('active');
  };

  // TODO: push information into card
  const _createTaskCard = () => {
    const card = makeCard();
    main.append(card);
    _closeForm(form, overlay);
  };

  openFormBtns.addEventListener('click', () => {
    _openForm(form, overlay)
  });

  createTaskBtn.addEventListener('click', () => {
    _createTaskCard();
  });

  overlay.addEventListener('click', () => {
    _closeForm(form, overlay);
  });

  closeFormBtns.addEventListener('click', () => {
    _closeForm(form, overlay)
  });  
};

const createController = () => {
  const formController = createFormController();
};

export default createController;
