const createController = () => {
  const form = document.getElementById('form-container');
  const overlay = document.getElementById('overlay');

  const openFormBtns = document.querySelector('#add-task');
  const closeFormBtns = document.querySelector('#cancel-task');

  openFormBtns.addEventListener('click', () => {
    openForm(form, overlay)
  });

  overlay.addEventListener('click', () => {
    closeForm(form, overlay);
  });

  closeFormBtns.addEventListener('click', () => {
    closeForm(form, overlay)
  });
};

const openForm = (form, overlay) => {
  if (form == null) return
  form.classList.add('active')
  overlay.classList.add('active')
};

const closeForm = (form, overlay) => {
  if (form == null) return
  form.classList.remove('active')
  overlay.classList.remove('active')
};


export default createController;
