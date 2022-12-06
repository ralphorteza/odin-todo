import Project from './project';
import Task from './task';
import ToDoList from './todolist';

export default class Storage {
  // static todolist() {
  //   const todolist = new ToDoList();
  //   return todolist;
  // }

  static saveToDoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getToDoList() {
    let todolist;
    if (localStorage.getItem('todolist') === null) {
      todolist = new ToDoList();
      localStorage.setItem('todolist', JSON.stringify(todolist));
    } else {
      todolist = JSON.parse(localStorage.getItem('todolist'));
    }
    return todolist;
  }

  // static getToDoList() {
  //   const todolist = Object.assign(
  //     new ToDoList(),
  //     JSON.parse(localStorage.getItem('todolist')),
  //   );

  //   todolist.setProjects(
  //     todolist
  //       .getProjects()
  //       .map((project) => Object.assign(new Project(), project)),
  //   );

  //   todolist
  //     .getProjects()
  //     .forEach((project) => project.setTasks(
  //       project.getTasks().map((task) => Object.assign(new Task(), task)),
  //     ));

  //   return todolist;
  // }

  static addProject(project) {
    const todolist = Storage.getToDoList();
    todolist.addProject(project);
    Storage.saveToDoList(todolist);
  }

  static deleteProject(projectName) {
    const todolist = Storage.todolist();
    todolist.deleteProject(projectName);
    Storage.saveToDoList(todolist);
  }

  static addTask(projectName, task) {
    const todolist = Storage.todolist();
    todolist.getProject(projectName).addTask(task);
    Storage.saveToDoList(todolist);
  }

  static deleteTask(projectName, taskName) {
    const todolist = Storage.todolist();
    todolist.getProject(projectName).deleteTask(taskName);
    Storage.saveToDoList(todolist);
  }

  static renameTask(projectName, taskName, newTaskName) {
    const todolist = Storage.getToDoList();
    todolist.getProject(projectName).getTask(taskName).setName(newTaskName);
    Storage.saveToDoList(todolist);
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const todolist = Storage.getToDoList();
    todolist.getProject(projectName).getTask(taskName).setDate(newDueDate);
  }
}
