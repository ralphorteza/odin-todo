// import Storage from './storage';
// import Project from './project';
// import ToDoList from './todolist';
import Task from './task';
import Render from './render';
import Handler from './handler';

export default class Dom {
  static loadPage() {
    Dom.taskCardTesting();
    Handler.formEvents();
    Handler.forTaskButtons();
    Handler.projectEvents();
  }

  static taskCardTesting() {
    const task1 = new Task('example 1', 123, '12/15/2022');
    Render.aTaskCard(task1.getName(), task1.getDate());

    const task2 = new Task('example 2', 3435, '11/15/2022');
    Render.aTaskCard(task2.getName(), task2.getDate());

    const task3 = new Task('example 3', 5324, '10/15/2022');
    Render.aTaskCard(task3.getName(), task3.getDate());
  }
}
