import Project from './project';
import Task from './task';
import ToDoList from './todolist';

export default class Storage {
  static toDoList() {
    const todolist = new ToDoList();
    return todolist;
  }

  static saveToDoList(data) {
    localStorage.setItem('toDoList', JSON.stringify(data));
  }

  static getToDoList() {
    const toDoList = Object.assign(
      new ToDoList(),
      JSON.parse(localStorage.getItem('toDoList')),
    );

    toDoList.setProjects(
      toDoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project)),
    );

    toDoList
      .getProjects()
      .forEach((project) => project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task)),
      ));

    return toDoList;
  }

  static addProject(project) {
    const toDoList = Storage.toDoList();
    toDoList.addProject(project);
    Storage.saveToDoList(toDoList);
  }

  static deleteProject(projectName) {
    const toDoList = Storage.toDoList();
    toDoList.deleteProject(projectName);
    Storage.saveToDoList(toDoList);
  }

  static addTask(projectName, task) {
    const toDoList = Storage.toDoList();
    toDoList.getProject(projectName).addTask(task);
    Storage.saveToDoList(toDoList);
  }

  static deleteTask(projectName, taskName) {
    const toDoList = Storage.toDoList();
    toDoList.getProject(projectName).deleteTask(taskName);
    Storage.saveToDoList(toDoList);
  }

  static renameTask(projectName, taskName, newTaskName) {
    const toDoList = Storage.getToDoList();
    toDoList.getProject(projectName).getTask(taskName).setName(newTaskName);
    Storage.saveToDoList(toDoList);
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const toDoList = Storage.getToDoList();
    toDoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
  }
}
