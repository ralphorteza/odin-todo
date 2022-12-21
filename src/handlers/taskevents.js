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
      .forEach((task) => Render.aTaskCard(task.name, task.id, task.dueDate));

    TaskEvents.initTaskButtons();
  }

  // TODO: Figure out eventlistener functions for task buttons.
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
    const taskID = taskCard.children[2].textContent;
    const currentTaskName = document.querySelector('#current-task-name');
    const taskIDContainer = document.querySelector('#unique-id');
    const taskNameInput = document.querySelector('#edit-task-title');
    const taskDateInput = document.querySelector('#edit-task-date');
    const overlay = document.querySelector('#overlay');
    const editTaskForm = document.querySelector('#form-edit-task-container');

    currentTaskName.textContent = taskName;
    currentTaskName.style.display = 'none';

    taskIDContainer.textContent = taskID;
    taskIDContainer.style.display = 'none';

    taskNameInput.placeholder = taskName;
    taskDateInput.value = taskDate;

    overlay.classList.add('active');
    editTaskForm.classList.add('active');

    console.log(`Editing task ${taskName} (id #${taskID}) in project ${projectName}!`);
    TaskEvents.initEditTaskButtons();
  }

  static initEditTaskButtons() {
    const editTaskButton = document.querySelector('#create-edit-task');
    const cancelEditTaskButton = document.querySelector('#cancel-edit-task');

    cancelEditTaskButton.addEventListener('click', TaskEvents.cancelTaskEdit);
    editTaskButton.addEventListener('click', TaskEvents.submitTaskEdit);
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

  // TODO: work logic for validating existing taskName
  static submitTaskEdit(event) {
    event.preventDefault();
    const overlay = document.querySelector('#overlay');
    const formEditTask = document.querySelector('#form-edit-task');
    const editTaskForm = document.querySelector('#form-edit-task-container');
    const currentTaskName = document.querySelector('#current-task-name').textContent;
    const taskID = document.querySelector('#unique-id').textContent;
    const projectName = document.querySelector('#project-name-header').textContent;
    const newTaskName = document.querySelector('#edit-task-title').value;
    const newDueDate = document.querySelector('#edit-task-date').value;
    const currentDate = Storage
      .getProjectsList()
      .getProject(projectName)
      .getTask(currentTaskName)
      .getDate();

    console.log(`Current task name: ${currentTaskName} (id #${taskID})`);
    console.log(`Current due date of task: ${currentDate}`);

    if (newTaskName === '') {
      console.log('New task name cannot be empty!');
      return;
    }

    if ((newTaskName === currentTaskName) && (currentDate === newDueDate)) {
      console.log('No changes have been made!');
      return;
    }

    if (Storage.getProjectsList().getProject(projectName).contains(newTaskName)) {
      console.log('This task name already exist!');
      return;
    }

    const taskCards = document.querySelectorAll('.task');
    taskCards.forEach((taskCard) => {
      const taskName = taskCard.children[0].children[1];
      if (currentTaskName !== taskName.textContent) return;
      Render.changeTaskName(taskCard, newTaskName);
      Render.changeDueDate(taskCard, newDueDate);
    });

    Storage.editTask(projectName, currentTaskName, newTaskName, newDueDate);

    overlay.classList.remove('active');
    editTaskForm.classList.remove('active');
    formEditTask.reset();
    console.log(`Submit edited task ${currentTaskName} in project ${projectName}!`);
    console.log(`Task name changed from ${currentTaskName} to ${newTaskName}!`);
  }
}
