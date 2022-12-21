import FormEvents from './formevents';
import ProjectEvents from './projectevents';

export default class Handler {
  static project() {
    ProjectEvents.createProject();
  }

  static initProjectButtons() {
    ProjectEvents.initProjectButtons();
  }

  static openProject(projectName, projectButton) {
    ProjectEvents.openProject(projectName, projectButton);
  }

  static projectForm() {
    ProjectEvents.forProjectFormButtons();
  }

  static openInboxProject() {
    ProjectEvents.openInboxProject();
  }

  static form() {
    FormEvents.formEvents();
  }
}
