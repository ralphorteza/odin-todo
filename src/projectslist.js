import Project from './project';
// import Task from './task';

export default class ProjectsList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Inbox', 'ADRE'));
  }

  setProjects(projects) {
    this.projects = projects;
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
    const projectToDelete = this.projects
      .find((project) => project.getName() === projectName);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }
}
