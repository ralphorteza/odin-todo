const doms = () => {
  const main = document.querySelector('#main');
  const form = document.querySelector('#form-container');
  const overlay = document.querySelector('#overlay');
  const openFormBtn = document.querySelector('#add-task');
  const closeFormBtns = document.querySelector('#cancel-task');
  const createTaskBtn = document.querySelector('#create-task');

  openFormBtn.addEventListener('click', () => {
    form.classList.add('active');
    overlay.classList.add('active');
  });

  closeFormBtns.addEventListener('click', () => {
    form.classList.remove('active');
    overlay.classList.remove('active');
  });
};

export default doms;