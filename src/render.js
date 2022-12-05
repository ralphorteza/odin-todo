export default class Render {
  static aProjectCard(name) {
    const userProjects = document.querySelector('#projects-list');
    const buttonProject = document.createElement('button');
    buttonProject.setAttribute('class', 'button-project');
    buttonProject.textContent = name;

    userProjects.append(buttonProject);
    // Dom.initProjectButtons();
  }

  static aTaskCard(name, dueDate) {
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
    // Dom.initTaskButtons();
  }
}
