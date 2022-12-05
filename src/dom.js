import Storage from './storage';
import Project from './project';
import Task from './task';
import ToDoList from './todolist';
import Render from './render';

export default class Dom {
  static loadPage() {
    const list = new ToDoList();
  }
}
