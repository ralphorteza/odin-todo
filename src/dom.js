import Task from './task.js';

const doms = () => {
  const main = document.querySelector('#main');
  const form = document.querySelector('#form');
  const formContainer = document.querySelector('#form-container');
  const overlay = document.querySelector('#overlay');
  const openFormBtn = document.querySelector('#add-task');
  const closeFormBtns = document.querySelector('#cancel-task');
  const createTaskBtn = document.querySelector('#create-task');

  const tasks = [];
  const displayForm = () => {
    formContainer.classList.add('active');
    overlay.classList.add('active');
  };

  const closeForm = () => {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
  };

  openFormBtn.addEventListener('click', () => {
    displayForm();
    console.log("open form!");
  });

  closeFormBtns.addEventListener('click', () => {
    closeForm();
    console.log("closed form!");
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let title = document.getElementById('task-title').value; 
    let desc = document.getElementById('task-desc').value;
    let priority = document.getElementById('task-priority').value;
    let date = document.getElementById('task-date').value;
    let id = Date.now();
    
    let task = new Task(title, desc, priority, date, id);
    tasks.push(task);
    console.log(tasks);
    document.getElementById('form').reset();
    
    closeForm();
    console.log(task);
    console.log("clicked submit!");
  });
};

export default doms;