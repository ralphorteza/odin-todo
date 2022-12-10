import Project from './project';
import Task from './task';
import Render from './render';
import Handler from './handler';
import Storage from './storage';

export default class Dom {
  static loadPage() {
    // Dom.initializeProjectsList();
    // console.log(this.projectsList);
    Handler.form();
    Handler.forTaskButtons();
    Handler.projectEvents();
  }
}
