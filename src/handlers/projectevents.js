import Project from '../project';
import Render from '../render';
import Storage from '../storage';

export default class ProjectEvents {
  static projectEvents() {
    ProjectEvents.addProjectButtons();
  }

  static addProjectButtons() {
    const buttonAddProject = document.querySelector('#button-add-project');
    const buttonCancelProject = document.querySelector('#button-cancel-project');

    buttonAddProject.addEventListener('click', ProjectEvents.addProject);
    buttonCancelProject.addEventListener('click', ProjectEvents.cancelProject);
  }

  static addProject() {
    const projectName = document.querySelector('#input-add-project').value;

    if (projectName === '') {
      console.log('Project name cannot be empty!');
      return;
    }
    if (Storage.getProjectsList().contains(projectName)) {
      console.log(`${projectName} already exist!`);
      return;
    }

    Storage.addProject(new Project(projectName));
    Render.aProjectCard(projectName);
    ProjectEvents.initProjectButtons();
    console.log(`${projectName} created!`);
  }

  static cancelProject() {
    const inputAddProject = document.querySelector('#input-add-project');
    inputAddProject.value = '';
    console.log('project cancelled');
  }

  static initProjectButtons() {
    // const inboxProjectsButton = document.querySelector('#button-inbox-projects');
    // inboxProjecatsButton.addEventListener('click', ProjectEvents.openInboxTasks);

    const buttonProjects = document.querySelectorAll('.button-project');
    buttonProjects.forEach((buttonProject) => {
      buttonProject.addEventListener('click', ProjectEvents.selectedProjectInSidebar);
    });
  }

  // TODO: when pressed, opens project in main container
  static selectedProjectInSidebar(event) {
    const projectName = event.target.textContent;
    console.log(`project button ${projectName} clicked!`);

    ProjectEvents.openProject(projectName, this);
  }

  static openProject(projectName, projectButton) {
    const projectPreview = document.querySelector('#project-preview');
    const projectNameHeader = document.querySelector('#project-name-header');
    const defaultProjectButtons = document.querySelectorAll('.button-default-project');
    const customProjectButtons = document.querySelectorAll('.button-project');
    const buttonDeleteProject = document.querySelector('#button-delete-project');
    buttonDeleteProject.style.display = 'none';

    if (projectName !== 'Inbox') {
      buttonDeleteProject.style.display = 'block';
    }
    projectNameHeader.textContent = projectName;
    const allProjectButtons = [...defaultProjectButtons, ...customProjectButtons];
    allProjectButtons.forEach((button) => button.classList.remove('active'));
    projectButton.classList.add('active');
  }

  static deleteProject() {
    const projectName = document.querySelector('#project-name-header').textContent;
    Storage.deleteProject(projectName);
  }

  static openInboxProject() {
    const buttonInboxProjects = document.querySelector('#button-inbox-projects');
    buttonInboxProjects.addEventListener('click', ProjectEvents.selectedProjectInSidebar);
  }
}
