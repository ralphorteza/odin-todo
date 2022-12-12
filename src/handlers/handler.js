import FormEvents from './formevents';
import ProjectEvents from './projectevents';
import TaskEvents from './taskevents';

export default class Handler {
  static task() {
    TaskEvents.taskEvents();
  }

  static project() {
    ProjectEvents.projectEvents();
  }

  static initProjectButtons() {
    ProjectEvents.initProjectButtons();
  }

  static openProject(projectName, projectButton) {
    ProjectEvents.openProject(projectName, projectButton);
  }

  static openInboxProject() {
    ProjectEvents.openInboxProject();
  }

  static form() {
    FormEvents.formEvents();
  }
}
