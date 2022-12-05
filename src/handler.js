import Task from './task';
import Render from './render';

export default class Handler {
  // TASK EVENT HANDLERS CODE BLOCKS BELOW. //

  // TODO: Figure out eventlistner functions for task buttons.
  static forTaskButtons() {
    const taskEditButtons = document.querySelectorAll('.button-edit-task');
    const taskDeleteButtons = document.querySelectorAll('.button-delete-task');

    taskEditButtons.forEach((taskEditButton) => {
      taskEditButton.addEventListener('click', Handler.editTask);
    });

    taskDeleteButtons.forEach((taskDeleteButton) => {
      taskDeleteButton.addEventListener('click', Handler.deleteTask);
    });
  }

  // TODO: create edit task function. Currently, prints out task name when pressing edit button.
  static editTask(event) {
    const task = event.target.parentElement.parentElement;
    const taskName = task.children[0].children[1].textContent;
    console.log(taskName);
  }

  // TODO: Create delete task function.
  static deleteTask(event) {
    const task = event.target.parentElement.parentElement;
    console.log(task);
    task.remove();
  }

  // PROJECT EVENT HANDLERS CODE BLOCK BELOW. //
  static projectEvents() {
    Handler.addProjectButtons();
  }

  static addProjectButtons() {
    const buttonAddProject = document.querySelector('#button-add-project');
    const buttonCancelProject = document.querySelector('#button-cancel-project');

    buttonAddProject.addEventListener('click', Handler.addProject);
    buttonCancelProject.addEventListener('click', Handler.cancelProject);
  }

  static addProject() {
    const projectName = document.querySelector('#input-add-project').value;
    Render.aProjectCard(projectName);
    console.log(projectName);
  }

  static cancelProject() {
    const inputAddProject = document.querySelector('#input-add-project');
    inputAddProject.value = '';
    console.log('project cancelled');
  }

  // FORM EVENT HANDLERS CODE BLOCKS BELOW. //

  static formEvents() {
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
