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
    // const taskEditButtons = document.querySelectorAll('.button-edit-task');
    const taskDeleteButtons = document.querySelectorAll('.button-delete-task');

    // taskEditButtons.forEach((taskEditButton) => {
    //   taskEditButton.addEventListener('click', TaskEvents.editTask);
    // });

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
}
