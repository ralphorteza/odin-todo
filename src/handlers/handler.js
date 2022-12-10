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

  static form() {
    FormEvents.formEvents();
  }
}
