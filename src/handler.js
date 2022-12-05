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

  static cancelTaskForm() {
    const overlay = document.querySelector('#overlay');
    const formContainer = document.querySelector('#form-container');

    overlay.classList.remove('active');
    formContainer.classList.remove('active');
  }

  static forTaskForm() {

  }
}
