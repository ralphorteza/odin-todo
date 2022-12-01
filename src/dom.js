import Storage from './storage';
import Project from './project';
import Task from './task';

export default class Dom {
  static loadPage() {
    Dom.loadProjects();
    Dom.form();
    Dom.initAddProjectButtons();
    Dom.openProject('Inbox', document.getElementById('button-inbox-projects'));
  }

  static loadTasks(projectName) {
    Storage.getToDoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => Dom.createTask(task.name, task.dueDate));
  }

  static loadProjectContent(projectName) {
    const projectPreview = document.querySelector('#project-preview');
    const h1ProjectName = document.createElement('h1');
    h1ProjectName.setAttribute('id', 'project-name');
    h1ProjectName.textContent = projectName;

    const taskList = document.createElement('div');
    taskList.setAttribute('id', 'tasks-list');

    projectPreview.append(h1ProjectName);
    projectPreview.append(taskList);

    Dom.loadTasks(projectName);
  }

  static loadProjects() {
    Storage.getToDoList()
      .getProjects()
      .forEach((project) => {
        if (project.name !== 'Inbox') {
          Dom.createProject(project.name);
        }
      });
    Dom.initAddProjectButtons();
  }

  static initAddProjectButtons() {
    const addProjectBtn = document.querySelector('#button-add-project');
    const addProjectPopupBtn = document.querySelector('#button-add-project-popup');
    const cancelProjectPopupBtn = document.querySelector('#button-cancel-project-popup');
    const addProjectPopupInput = document.querySelector('#input-add-project-popup');

    addProjectBtn.addEventListener('click', Dom.openAddProjectPopup);
    addProjectPopupBtn.addEventListener('click', Dom.addProject);
    cancelProjectPopupBtn.addEventListener('click', Dom.closeAddProjectPopup);
    addProjectPopupInput.addEventListener('keypress', Dom.handleAddProjectInput);
  }

  static openInboxTasks() {
    Dom.openProject('Inbox', this);
  }

  static handleProjectButton() {
    const projectName = this.textContent;
    Dom.openProject(projectName, this);
    // console.log(`opened project ${projectName}`);
  }

  static initProjectButtons() {
    const inboxProjectButton = document.querySelector('#button-inbox-projects');
    const projectButtons = document.querySelectorAll('.button-project');

    inboxProjectButton.addEventListener('click', Dom.openInboxTasks);
    projectButtons.forEach((projectButton) => {
      projectButton.addEventListener('click', Dom.handleProjectButton);
    });
  }

  static openAddProjectPopup() {
    const addProjectPopup = document.querySelector('#add-project-popup');
    const addProjectButton = document.querySelector('#button-add-project');
    addProjectPopup.classList.add('active');
    addProjectButton.classList.add('active');
  }

  static closeAddProjectPopup() {
    const addProjectPopup = document.querySelector('#add-project-popup');
    const addProjectButton = document.querySelector('#button-add-project');
    const addProjectPopupInput = document.querySelector('#input-add-project-popup');

    addProjectPopup.classList.remove('active');
    addProjectButton.classList.remove('active');
    addProjectPopupInput.value = '';
  }

  static handleAddProjectInput(e) {
    if (e.key === 'Enter') Dom.addProject();
  }

  static openProject(projectName, projectButton) {
    const defaultProjectButtons = document.querySelectorAll(
      '.button-default-project',
    );
    const projectButtons = document.querySelectorAll('.button-project');
    const buttons = [...defaultProjectButtons, ...projectButtons];

    const projectPreview = document.querySelector('#project-preview');
    projectPreview.innerHTML = '';

    buttons.forEach((button) => button.classList.remove('active'));
    projectButton.classList.add('active');
    Dom.closeAddProjectPopup();
    Dom.loadProjectContent(projectName);
  }

  static addProject() {
    const addProjectPopupInput = document.getElementById(
      'input-add-project-popup',
    );
    const projectName = addProjectPopupInput.value;

    if (projectName === '') {
      alert("project name can't be empty");
      return;
    }

    if (Storage.getToDoList().contains(projectName)) {
      addProjectPopupInput.value = '';
      alert('project name must be different');
      return;
    }

    Storage.addProject(new Project(projectName));
    Dom.createProject(projectName);
    Dom.closeAddProjectPopup();
  }

  static createProject(name) {
    const userProjects = document.querySelector('#projects-list');
    const buttonProject = document.createElement('button');
    buttonProject.setAttribute('class', 'button-project');
    buttonProject.textContent = name;

    userProjects.append(buttonProject);
    Dom.initProjectButtons();
  }

  static createTask(name, dueDate) {
    const tasksList = document.querySelector('#tasks-list');
    const taskContainer = document.createElement('div');
    const checkBox = document.createElement('input');
    const nameContainer = document.createElement('div');
    const dateContainer = document.createElement('div');

    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    taskContainer.classList.add('task');
    nameContainer.classList.add('task-name');
    dateContainer.classList.add('date');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');

    checkBox.setAttribute('type', 'checkbox');

    nameContainer.textContent = name;
    dateContainer.textContent = dueDate;
    editBtn.textContent = 'edit';
    deleteBtn.textContent = 'delete';

    taskContainer.append(checkBox);
    taskContainer.append(nameContainer);
    taskContainer.append(dateContainer);
    taskContainer.append(editBtn);
    taskContainer.append(deleteBtn);

    tasksList.append(taskContainer);
    Dom.initTaskButtons();
  }

  static initTaskButtons() {
    const deleteBtns = document.querySelectorAll('button.delete');
    const editBtns = document.querySelectorAll('button.edit');

    editBtns.forEach((editBtn) => {
      editBtn.addEventListener('click', Dom.taskDeleteBtnHandler);
    });

    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', Dom.taskDeleteBtnHandler);
    });
  }

  // TODO: edit task function
  static taskEditBtnHandler(e) {
    const taskContainer = e.target.parentElement;
    const taskName = taskContainer.children[1].textContent;
    const projectName = document.querySelector('#project-name').textContent;
  }

  static taskDeleteBtnHandler(e) {
    const taskContainer = e.target.parentElement;
    const taskName = taskContainer.children[1].textContent;
    const projectName = document.querySelector('#project-name').textContent;

    Storage.deleteTask(projectName, taskName);
    taskContainer.remove();
    // console.log(`Deleting task: ${taskName} in project: ${projectName}`);
  }

  // FORM ITEMS
  static openForm() {
    const openFormBtn = document.querySelector('#add-task');
    openFormBtn.addEventListener('click', () => {
      document.querySelector('#form-container').classList.add('active');
      document.querySelector('#overlay').classList.add('active');
    });
  }

  static cancelForm() {
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
    Dom.openForm();
    Dom.submitTask();
    Dom.cancelForm();
  }
}
