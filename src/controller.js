import allProjects from './index';
import { addTodo, editHeadingDom } from './domFunctionality';
import { renderProjects, renderHeading, renderTodos } from './render';

function _clearActiveProjects() {
  allProjects.forEach((project) => project.active = false);
}

function complete

function deleteProject(index) {
  if (allProjects.length > 1) {
    if (allProjects[index] == activeProject()) {
      if (index !== 0) {
        allProjects[index - 1].active = true;
        allProjects.splice(index, 1);
      } else {
        allProjects[1].active = true;
        allProjects.splice(0, 1);
      }
    } else {
      allProjects.splice(index, 1);
    }
  }
  renderProjects();
  renderHeading();
  renderTodos();
}

function switchActiveProject(index) {
  _clearActiveProjects();
  allProjects[index].active = true;
  renderProjects();
  renderHeading();
  renderTodos();
  editHeadingDom.hide();
  addTodo.hide();
}

function activeProject() {
  const activeProjectArray = allProjects.filter((project) => project.active);
  return activeProjectArray[0];
}

const createToDo = (name, dueDate) => {
  activeProject().toDoList.push({
    name,
    dueDate,
    complete: false,
  });
};

const createProject = (name, description) => {
  _clearActiveProjects();
  allProjects.push({
    name,
    description,
    toDoList: [],
    active: true,
  });
  createToDo('Default task', '2022-12-31');
  renderProjects();
  renderHeading();
  renderTodos();
};
