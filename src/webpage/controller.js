
const createFormController = () => {
  const openFormBtns = document.querySelector('#add-task');
  const closeFormBtns = document.querySelector('#cancel-task');

  const form = document.getElementById('form-container');
  const overlay = document.getElementById('overlay');

  const  _openForm = (form, overlay) => {
    if (form == null) return
    form.classList.add('active')
    overlay.classList.add('active')
  };
  
  const _closeForm = (form, overlay) => {
    if (form == null) return
    form.classList.remove('active')
    overlay.classList.remove('active')
  };

  openFormBtns.addEventListener('click', () => {
    _openForm(form, overlay)
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
