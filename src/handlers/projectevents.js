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
      // console.log('Project name cannot be empty!');
      return;
    }
    if (Storage.getProjectsList().contains(projectName)) {
      // console.log(`${projectName} already exist!`);
      return;
    }

    Storage.addProject(new Project(projectName));
    Render.aProjectCard(projectName);
    ProjectEvents.initProjectButtons();
    // console.log(projectName);
  }

  static cancelProject() {
    const inputAddProject = document.querySelector('#input-add-project');
    inputAddProject.value = '';
    // console.log('project cancelled');
  }

  // TODO: when pressed, opens project in main container
  // static selectedProjectInSidebar(e) {

  // }

  static initProjectButtons() {
    // const inboxProjectsButton = document.querySelector('#button-inbox-projects');
    // inboxProjectsButton.addEventListener('click', ProjectEvents.openInboxTasks);

    const buttonProjects = document.querySelectorAll('.button-project');
    buttonProjects.forEach((buttonProject) => {
      buttonProject.addEventListener('click', ProjectEvents.selectedProjectInSidebar);
    });
  }
}
