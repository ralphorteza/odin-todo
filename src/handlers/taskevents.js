export default class TaskEvents {
  // TASK EVENT HANDLERS CODE BLOCKS BELOW. //

  // TODO: Figure out eventlistner functions for task buttons.
  static taskEvents() {
    const taskEditButtons = document.querySelectorAll('.button-edit-task');
    const taskDeleteButtons = document.querySelectorAll('.button-delete-task');

    taskEditButtons.forEach((taskEditButton) => {
      taskEditButton.addEventListener('click', TaskEvents.editTask);
    });

    taskDeleteButtons.forEach((taskDeleteButton) => {
      taskDeleteButton.addEventListener('click', TaskEvents.deleteTask);
    });
  }

  // TODO: create edit task function. Currently, prints out task name when pressing edit button.
  // static editTask(event) {
  //   const task = event.target.parentElement.parentElement;
  //   const taskName = task.children[0].children[1].textContent;
  //   console.log(taskName);
  // }

  // TODO: Create delete task function.
  // static deleteTask(event) {
  //   const task = event.target.parentElement.parentElement;
  //   // console.log(task);
  //   task.remove();
  // }
}
