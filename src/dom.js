import Storage from './storage';
import Project from './project';
import Task from './task';

export default class Dom {
  static loadPage() {
    Dom.form();
    Dom.initAddProjectButtons();
    Dom.openProject('Inbox', document.getElementById('button-inbox-projects'));
    // document.addEventListener('keydown', Dom.handleKeyboardInput);
  }

  static openProject(projectName, projectButton) {
    const defaultProjectButtons = document.querySelectorAll(
      '.button-default-project',
    );
    const projectButtons = document.querySelectorAll('.button-project');
    const buttons = [...defaultProjectButtons, ...projectButtons];

    buttons.forEach((button) => button.classList.remove('active'));
    projectButton.classList.add('active');
    Dom.closeAddProjectPopup();
    Dom.loadProjectContent(projectName);
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

  static openAddProjectPopup() {
    const addProjectPopup = document.querySelector('#add-project-popup');
    const addProjectButton = document.querySelector('#button-add-project');

    // Dom.closeAllPopups();
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

  // temporary break
  static createProject() {}

  static makeProject() {}

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
  }

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

  static form() {
    Dom.openForm();
    Dom.submitTask();
    Dom.cancelForm();
  }

  static submitTask() {
    // const submitTaskBtn = document.querySelector('#create-task');
    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const projectName = document.querySelector('#project-name').textContent;
      const taskName = document.querySelector('#task-title').value;
      const date = document.querySelector('#task-date').value;
      Storage.addTask(projectName, new Task(taskName, date));
      Dom.createTask(taskName, date);
    });
  }
}

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let title = document.getElementById('task-title').value;
//     let desc = document.getElementById('task-desc').value;
//     let priority = document.getElementById('task-priority').value;
//     let date = document.getElementById('task-date').value;
//     let id = Date.now();

//     let task = new Task(title, desc, priority, date, id);
//     const card = makeCard(title, desc, priority, date, id);
//     main.append(card);
//     tasks.push(task);

//     console.log(title);

//     console.log(tasks);
//     document.getElementById('form').reset();

//     closeForm();
//     console.log(task);
//     console.log("clicked submit!");
//   });
// const tasks = [];

// // TODO: a function to delete a card.
// const deleteCard = (idNumber) => {
//   const card = document.getElementById(idNumber);
//   card.innerHTML = '';
//   card.remove();

//   console.log(`id: ${idNumber}`);

//   //let removeIndex = tasks.findIndex(task => task.id === idNumber);
//   const removeIndex = tasks.findIndex( task => {
//     if (task.id === idNumber) {
//       console.log('hello!');
//     }
//     return task.id === idNumber;
//   })
//   tasks.splice(removeIndex, 1);
//   console.log(removeIndex);
//   console.log(tasks);

// };

// const makeCard = (title, desc, priority, date, id) => {
//   const cardID = id;
//   const taskContainer = document.createElement('div');
//   const checkBox = document.createElement('input');
//   const nameContainer = document.createElement('div');
//   const dateContainer = document.createElement('div');
//   const priorityDiv = document.createElement('div');
//   const editBtn = document.createElement('button');
//   const deleteBtn = document.createElement('button');

//   taskContainer.classList.add('card');
//   taskContainer.setAttribute('id', id);
//   nameContainer.classList.add('title');
//   dateContainer.classList.add('date');
//   priorityDiv.classList.add('priority');
//   editBtn.classList.add('edit');
//   deleteBtn.classList.add('delete');

//   checkBox.setAttribute('type', 'checkbox');

//   nameContainer.textContent = String (id);
//   dateContainer.textContent = String (date);
//   priorityDiv.textContent = String (priority);
//   editBtn.textContent = 'edit';
//   deleteBtn.textContent = 'delete';

//   taskContainer.append(checkBox);
//   taskContainer.append(nameContainer);
//   taskContainer.append(dateContainer);
//   taskContainer.append(priorityDiv);
//   taskContainer.append(editBtn);
//   taskContainer.append(deleteBtn);

//   deleteBtn.addEventListener('click', (e) => {
//     const card = e.target.parentElement.id;
//     deleteCard(card);
//   });

//   return taskContainer;
// };

// // TODO: a function to edit an existing card.
// const editCard = (id) => {

// };

// const doms = () => {
//   const main = document.querySelector('#main');
//   const form = document.querySelector('#form');
//   const formContainer = document.querySelector('#form-container');
//   const overlay = document.querySelector('#overlay');
//   const openFormBtn = document.querySelector('#add-task');
//   const closeFormBtns = document.querySelector('#cancel-task');
//   const createTaskBtn = document.querySelector('#create-task');

//   const displayForm = () => {
//     formContainer.classList.add('active');
//     overlay.classList.add('active');
//   };

//   const closeForm = () => {
//     formContainer.classList.remove('active');
//     overlay.classList.remove('active');
//   };

//   openFormBtn.addEventListener('click', () => {
//     displayForm();
//     console.log("open form!");
//   });

//   closeFormBtns.addEventListener('click', () => {
//     closeForm();
//     console.log("closed form!");
//   });

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let title = document.getElementById('task-title').value;
//     let desc = document.getElementById('task-desc').value;
//     let priority = document.getElementById('task-priority').value;
//     let date = document.getElementById('task-date').value;
//     let id = Date.now();

//     let task = new Task(title, desc, priority, date, id);
//     const card = makeCard(title, desc, priority, date, id);
//     main.append(card);
//     tasks.push(task);

//     console.log(title);

//     console.log(tasks);
//     document.getElementById('form').reset();

//     closeForm();
//     console.log(task);
//     console.log("clicked submit!");
//   });
// };

// export default doms;
