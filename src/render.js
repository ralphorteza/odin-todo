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
    // projectPreview used for testing purposes.
    const projectPreview = document.querySelector('#project-preview');
    // const tasksList = document.querySelector('#tasks-list');

    const taskContainer = document.createElement('div');
    const leftPanel = document.createElement('div');
    const rightPanel = document.createElement('div');

    const checkBox = document.createElement('input');
    const nameContainer = document.createElement('p');
    const dateContainer = document.createElement('p');

    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    taskContainer.classList.add('task');
    leftPanel.classList.add('left-panel');
    rightPanel.classList.add('right-panel');
    nameContainer.classList.add('task-name');
    dateContainer.classList.add('date');
    editBtn.classList.add('button-edit-task');
    deleteBtn.classList.add('button-delete-task');

    checkBox.setAttribute('type', 'checkbox');

    nameContainer.textContent = name;
    dateContainer.textContent = dueDate;
    editBtn.textContent = 'edit';
    deleteBtn.textContent = 'delete';

    leftPanel.append(checkBox);
    leftPanel.append(nameContainer);
    rightPanel.append(dateContainer);
    rightPanel.append(editBtn);
    rightPanel.append(deleteBtn);

    taskContainer.append(leftPanel);
    taskContainer.append(rightPanel);

    projectPreview.append(taskContainer);
    // tasksList.append(taskContainer);
    // Dom.initTaskButtons();
  }
}
