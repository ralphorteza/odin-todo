export default class Form {
  static open() {
    const openFormBtn = document.querySelector('#add-task');
    openFormBtn.addEventListener('click', () => {
      document.querySelector('#form-container').classList.add('active');
      document.querySelector('#overlay').classList.add('active');
    });
  }

  static cancel() {
    const cancelTaskBtn = document.querySelector('#cancel-task');
    cancelTaskBtn.addEventListener('click', () => {
      document.querySelector('#form-container').classList.remove('active');
      document.querySelector('#overlay').classList.remove('active');
    });
  }

  static submitTask() {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const projectName = document.querySelector('#project-name').textContent;
      const taskName = document.querySelector('#task-title').value;
      const date = document.querySelector('#task-date').value;

      if (taskName === '') return;
      if (Storage.getToDoList().getProject(projectName).contains(taskName)) return;

      Storage.addTask(projectName, new Task(taskName, date));
      Dom.createTask(taskName, date);

      document.querySelector('#form-container').classList.remove('active');
      document.querySelector('#overlay').classList.remove('active');
    });
  }

  static form() {
    Form.open();
    Form.submitTask();
    Form.cancel();
  }
}
