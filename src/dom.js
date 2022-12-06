import Storage from './storage';
// import ToDoList from './todolist';
import Project from './project';
import Task from './task';
import Render from './render';
import Handler from './handler';

export default class Dom {
  static loadPage() {
    // Dom.taskCardTesting();
    Storage.getToDoList();
    // Dom.projectTesting();
    Handler.formEvents();
    Handler.forTaskButtons();
    Handler.projectEvents();
  }

  static todolistTesting() {

  }
}
