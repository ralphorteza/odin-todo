import Handler from './handlers/handler';
// import Project from './project';
// import Task from './task';
// import Render from './render';
// import Storage from './storage';

export default class Dom {
  static loadPage() {
    // Dom.initializeProjectsList();
    // console.log(this.projectsList);
    Handler.form();
    Handler.task();
    Handler.project();
  }
}
