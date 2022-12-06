// export default class Form {
//   static open() {
//     const openFormBtn = document.querySelector('#add-task');
//     openFormBtn.addEventListener('click', () => {
//       document.querySelector('#form-container').classList.add('active');
//       document.querySelector('#overlay').classList.add('active');
//     });
//   }

//   static cancel() {
//     const cancelTaskBtn = document.querySelector('#cancel-task');
//     cancelTaskBtn.addEventListener('click', () => {
//       document.querySelector('#form-container').classList.remove('active');
//       document.querySelector('#overlay').classList.remove('active');
//     });
//   }

//   static submitTask() {
//     const form = document.querySelector('#form');

//     form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const projectName = document.querySelector('#project-name').textContent;
//       const taskName = document.querySelector('#task-title').value;
//       const date = document.querySelector('#task-date').value;

//       if (taskName === '') return;
//       if (Storage.getToDoList().getProject(projectName).contains(taskName)) return;

//       Storage.addTask(projectName, new Task(taskName, date));
//       Dom.createTask(taskName, date);

//       document.querySelector('#form-container').classList.remove('active');
//       document.querySelector('#overlay').classList.remove('active');
//     });
//   }

//   static form() {
//     Form.open();
//     Form.submitTask();
//     Form.cancel();
//   }
// }

// static taskCardTesting() {
//   const task1 = new Task('example 1', 123, '12/15/2022');
//   Render.aTaskCard(task1.getName(), task1.getDate());

//   const task2 = new Task('example 2', 3435, '11/15/2022');
//   Render.aTaskCard(task2.getName(), task2.getDate());

//   const task3 = new Task('example 3', 5324, '10/15/2022');
//   Render.aTaskCard(task3.getName(), task3.getDate());

//   return { task1, task2, task3 };
// }

// static projectTesting() {
//   const testProject1 = new Project('testProject1', 'ARFVB');
//   const tasks = this.taskCardTesting();

//   testProject1.addTask(tasks.task1.getName(), tasks.task1.getID(), tasks.task1.getDate());
//   testProject1.addTask(tasks.task2.getName(), tasks.task2.getID(), tasks.task2.getDate());
//   testProject1.addTask(tasks.task3.getName(), tasks.task3.getID(), tasks.task3.getDate());

//   // console.log(testProject1);

//   localStorage.setItem('testProject1', JSON.stringify(testProject1));

//   let retrieveProject1 = localStorage.getItem('testProject1');
//   console.log('retrievedProject: ', JSON.parse(retrieveProject1));

//   // add a task.
//   const task4 = new Task('example 4', 3324, '9/15/2022');
//   Render.aTaskCard(task4.getName(), task4.getDate());
//   testProject1.addTask(task4.getName(), task4.getID(), task4.getDate());
//   console.log('add task 4');

//   localStorage.setItem('testProject1', JSON.stringify(testProject1));
//   retrieveProject1 = localStorage.getItem('testProject1');
//   console.log('updated retrievedProject: ', JSON.parse(retrieveProject1));
// }
