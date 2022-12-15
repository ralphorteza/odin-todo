import Render from '../render';
import Storage from '../storage';

export default class TaskEvents {
  // TASK EVENT HANDLERS CODE BLOCKS BELOW. //

  static loadTasks() {
    const taskList = document.querySelector('#task-list');
    taskList.innerHTML = '';
    const projectName = document.querySelector('#project-name-header').textContent;
    Storage.getProjectsList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => Render.aTaskCard(task.name, task.dueDate));

    TaskEvents.initTaskButtons();
  }

  // TODO: Figure out eventlistner functions for task buttons.
  static initTaskButtons() {
    const taskEditButtons = document.querySelectorAll('.button-edit-task');
    const taskDeleteButtons = document.querySelectorAll('.button-delete-task');

    taskEditButtons.forEach((taskEditButton) => {
      taskEditButton.addEventListener('click', TaskEvents.editTaskHandler);
    });

    taskDeleteButtons.forEach((taskDeleteButton) => {
      taskDeleteButton.addEventListener('click', TaskEvents.deleteTask);
    });
  }

  static deleteTask(event) {
    const projectName = document.querySelector('#project-name-header').textContent;
    const taskCard = event.target.parentElement.parentElement;
    const taskName = taskCard.children[0].children[1].textContent;

    Storage.deleteTask(projectName, taskName);
    taskCard.remove();

    console.log(`delete task ${taskName} in project ${projectName}!`);
  }

  static editTaskHandler(event) {
    const projectName = document.querySelector('#project-name-header').textContent;
    const taskCard = event.target.parentElement.parentElement;
    const taskName = taskCard.children[0].children[1].textContent;
    const taskDate = taskCard.children[1].children[0].textContent;
    const currentTaskName = document.querySelector('#current-task-name');
    const taskNameInput = document.querySelector('#edit-task-title');
    const taskDateInput = document.querySelector('#edit-task-date');
    const overlay = document.querySelector('#overlay');
    const editTaskForm = document.querySelector('#form-edit-task-container');

    currentTaskName.textContent = taskName;
    currentTaskName.style.display = 'none';

    taskNameInput.placeholder = taskName;
    taskDateInput.value = taskDate;

    overlay.classList.add('active');
    editTaskForm.classList.add('active');

    // const editTaskButton = document.querySelector('#create-edit-task');
    const cancelEditTaskButton = document.querySelector('#cancel-edit-task');
    console.log(`Editing task ${taskName} in project ${projectName}!`);

    cancelEditTaskButton.addEventListener('click', TaskEvents.cancelTaskEdit);
  }

  static cancelTaskEdit() {
    const overlay = document.querySelector('#overlay');
    const editTaskForm = document.querySelector('#form-edit-task-container');
    const currentTaskName = document.querySelector('#current-task-name').textContent;
    const projectName = document.querySelector('#project-name-header').textContent;

    overlay.classList.remove('active');
    editTaskForm.classList.remove('active');
    console.log(`Cancelled editing task ${currentTaskName} in project ${projectName}!`);
  }
}
