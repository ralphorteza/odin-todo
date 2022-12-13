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
    const buttonDeleteProjects = document.querySelectorAll('.button-delete-project');
    const buttonEditProjects = document.querySelectorAll('.button-edit-project');

    buttonProjects.forEach((buttonProject) => {
      buttonProject.addEventListener('click', ProjectEvents.selectedProjectInSidebar);
    });

    buttonEditProjects.forEach((buttonEditProject) => {
      buttonEditProject.addEventListener('click', ProjectEvents.openForm);
    });

    buttonDeleteProjects.forEach((buttonDeleteProject) => {
      buttonDeleteProject.addEventListener('click', ProjectEvents.deleteProject);
    });
  }

  // TODO: when pressed, opens project in main container
  static selectedProjectInSidebar(event) {
    const projectName = event.target.textContent;
    console.log(`project button ${projectName} clicked!`);

    ProjectEvents.openProject(projectName, this);
  }

  static openProject(projectName, projectButton) {
    // const projectPreview = document.querySelector('#project-preview');
    const projectNameHeader = document.querySelector('#project-name-header');
    const defaultProjectButtons = document.querySelectorAll('.button-default-project');
    const customProjectButtons = document.querySelectorAll('.button-project');

    projectNameHeader.textContent = projectName;
    const allProjectButtons = [...defaultProjectButtons, ...customProjectButtons];
    allProjectButtons.forEach((button) => button.classList.remove('active'));
    projectButton.classList.add('active');
  }

  // Deletes project from storage and in UI, then loads Inbox content.
  static deleteProject(event) {
    const projectCard = event.target.parentElement.parentElement;
    const projectName = projectCard.children[0].children[0].textContent;

    console.log(`${projectName} deleted!`);
    Storage.deleteProject(projectName);
    projectCard.remove();
    ProjectEvents.openProject('Inbox', document.querySelector('#button-inbox-projects'));
  }

  static openInboxProject() {
    const buttonInboxProjects = document.querySelector('#button-inbox-projects');
    buttonInboxProjects.addEventListener('click', ProjectEvents.selectedProjectInSidebar);
  }

  static openForm(event) {
    const overlay = document.querySelector('#overlay');
    const formContainer = document.querySelector('#form-project-container');
    overlay.classList.add('active');
    formContainer.classList.add('active');
    const buttonCancelProjectEdit = document.querySelector('#button-cancel-project-edit');
    const projectCard = event.target.parentElement.parentElement;
    const projectName = projectCard.children[0].children[0].textContent;

    console.log(`Openned edit form for project ${projectName}!`);
    buttonCancelProjectEdit.addEventListener('click', ProjectEvents.cancelForm);
  }

  static cancelForm(event) {
    console.log(event.target);
    const overlay = document.querySelector('#overlay');
    const formContainer = document.querySelector('#form-project-container');

    overlay.classList.remove('active');
    formContainer.classList.remove('active');
    // console.log(`Cancelled edit form for project ${projectName}!`);
    console.log('Cancelled edit form for project!');
  }

  // static cancelForm(projectName) {
  //   const buttonCancelProjectEdit = document.querySelector('#button-cancel-project-edit');
  //   // const projectCard = event.target.parentElement.parentElement;
  //   // const projectName = projectCard.children[0].children[0].textContent;
  //   // console.log('cancelled edit on project!');

  //   buttonCancelProjectEdit.addEventListener('click', () => {
  //     // console.log(`cancelled edit on project ${projectName}!`);
  //     const overlay = document.querySelector('#overlay');
  //     const formContainer = document.querySelector('#form-project-container');

  //     overlay.classList.remove('active');
  //     formContainer.classList.remove('active');
  //     console.log(`Cancelled edit form for project ${projectName}!`);
  //   });
  // }
}
