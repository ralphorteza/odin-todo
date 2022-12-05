import Task from './task';
import Render from './render';

export default class Handler {
  // TODO: Figure out eventlistner functions for task buttons.
  static forTaskButtons() {
    const taskEditButtons = document.querySelectorAll('.button-edit-task');
    const taskDeleteButtons = document.querySelectorAll('.button-delete-task');

    taskEditButtons.forEach((taskEditButton) => {
      taskEditButton.addEventListener('click', someFunct());
    });

    taskDeleteButtons.forEach((taskDeleteButton) => {
      taskDeleteButton.addEventListener('click', someFunct());
    });
  }

  static formHandlers() {
    Handler.forAddTaskButton();
    Handler.forTaskFormButtons();
  }

  static forAddTaskButton() {
    const addTaskButton = document.querySelector('#add-task');
    addTaskButton.addEventListener('click', Handler.openTaskForm);
  }

  static openTaskForm() {
    const overlay = document.querySelector('#overlay');
    const formContainer = document.querySelector('#form-container');

    overlay.classList.add('active');
    formContainer.classList.add('active');
  }

  static forTaskFormButtons() {
    // const createTaskButton = document.querySelector('#create-task');
    const cancelTaskButton = document.querySelector('#cancel-task');
    const form = document.querySelector('#form');

    cancelTaskButton.addEventListener('click', Handler.cancelTaskForm);
    form.addEventListener('submit', Handler.createTask);
  }

  static cancelTaskForm() {
    const overlay = document.querySelector('#overlay');
    const formContainer = document.querySelector('#form-container');

    overlay.classList.remove('active');
    formContainer.classList.remove('active');
  }

  static createTask(event) {
    event.preventDefault();
    // const projectName = document.querySelector('#project-name').textContent;
    const taskName = document.querySelector('#task-title').value;
    const date = document.querySelector('#task-date').value;

    const newTask = new Task(taskName, date);
    Render.aTaskCard(newTask.getName(), newTask.getDate());

    document.querySelector('#form-container').classList.remove('active');
    document.querySelector('#overlay').classList.remove('active');
  }
}
