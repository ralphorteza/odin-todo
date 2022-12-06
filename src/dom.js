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
    Dom.todolistTesting();
    // Dom.projectTesting();
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

    const task4 = new Task('example 4', 3324, '9/15/2022');
    Render.aTaskCard(task4.getName(), task4.getDate());

    const task5 = new Task('example 5', 3411, '8/15,2022');
    Render.aTaskCard(task5.getName, task5.getDate);

    return {
      task1, task2, task3, task4,
    };
  }

  static projectTesting() {
    const testProject1 = new Project('testProject1', 'ARFVB');
    const testProject2 = new Project('testProject2', 'DFDFD');
    const tasks = this.taskCardTesting();

    testProject1.addTask(tasks.task1.getName(), tasks.task1.getID(), tasks.task1.getDate());
    testProject1.addTask(tasks.task2.getName(), tasks.task2.getID(), tasks.task2.getDate());
    testProject1.addTask(tasks.task3.getName(), tasks.task3.getID(), tasks.task3.getDate());

    testProject2.addTask(tasks.task4.getName, tasks.task4.getID, tasks.task4.getDate);

    return { testProject1, testProject2 };
  }

  static todolistTesting() {
    const todolist = Storage.getToDoList();
    const projects = this.projectTesting();

    console.log('before adding project');
    console.log(todolist);

    console.log('After adding testProject1');
    Storage.addProject(projects.testProject1);
    console.log(todolist);
  }
}
