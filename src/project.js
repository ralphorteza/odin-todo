import Task from './task';

export default class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskID) {
    return this.tasks.find((task) => task.getID() === taskID);
  }

  contains(taskID) {
    return this.tasks.some((task) => task.getID() === taskID);
  }

  addTask(taskName, taskID, taskDueDate) {
    const task = new Task(taskName, taskID, taskDueDate);
    this.tasks.push(task);
  }

  deleteTask(taskID) {
    const index = this.tasks.findIndex((task) => task.getID() === taskID);
    this.tasks.splice(index, 1);
  }
}
