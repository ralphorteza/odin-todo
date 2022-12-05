import Project from './project';
// import Task from './task';

export default class ToDoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Inbox'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name)) return;
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    const index = this.projects.indexOf((project) => project.getName() === projectName);
    this.projects.splice(index, 1);
  }
}
