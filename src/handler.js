import Task from './task';
import Render from './render';
import Storage from './storage';
import Project from './project';
import FormEvents from './formevents';
import ProjectEvents from './projectevents';

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
    // console.log(taskName);
  }

  // TODO: Create delete task function.
  static deleteTask(event) {
    const task = event.target.parentElement.parentElement;
    // console.log(task);
    task.remove();
  }

  static project() {
    ProjectEvents.projectEvents();
  }

  static form() {
    FormEvents.formEvents();
  }
}
