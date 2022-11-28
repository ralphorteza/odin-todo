//

const tasks = [];

// TODO: a function to delete a card.
const deleteCard = (idNumber) => {
  const card = document.getElementById(idNumber);
  card.innerHTML = '';
  card.remove();

  console.log(`id: ${idNumber}`);

  // let removeIndex = tasks.findIndex(task => task.id === idNumber);
  const removeIndex = tasks.findIndex((task) => {
    if (task.id === idNumber) {
      console.log('hello!');
    }
    return task.id === idNumber;
  });
  tasks.splice(removeIndex, 1);
  console.log(removeIndex);
  console.log(tasks);
};

const makeCard = (title, desc, priority, date, id) => {
  const cardID = id;
  const cardContainer = document.createElement('div');
  const checkBox = document.createElement('input');
  const titleDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const priorityDiv = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  cardContainer.classList.add('card');
  cardContainer.setAttribute('id', id);
  titleDiv.classList.add('title');
  dateDiv.classList.add('date');
  priorityDiv.classList.add('priority');
  editBtn.classList.add('edit');
  deleteBtn.classList.add('delete');

  checkBox.setAttribute('type', 'checkbox');

  titleDiv.textContent = String(id);
  dateDiv.textContent = String(date);
  priorityDiv.textContent = String(priority);
  editBtn.textContent = 'edit';
  deleteBtn.textContent = 'delete';

  cardContainer.append(checkBox);
  cardContainer.append(titleDiv);
  cardContainer.append(dateDiv);
  cardContainer.append(priorityDiv);
  cardContainer.append(editBtn);
  cardContainer.append(deleteBtn);

  deleteBtn.addEventListener('click', (e) => {
    const card = e.target.parentElement.id;
    deleteCard(card);
  });

  return cardContainer;
};

// TODO: a function to edit an existing card.
const editCard = (id) => {

};

const doms = () => {
  const main = document.querySelector('#main');
  const form = document.querySelector('#form');
  const formContainer = document.querySelector('#form-container');
  const overlay = document.querySelector('#overlay');
  const openFormBtn = document.querySelector('#add-task');
  const closeFormBtns = document.querySelector('#cancel-task');
  const createTaskBtn = document.querySelector('#create-task');

  const displayForm = () => {
    formContainer.classList.add('active');
    overlay.classList.add('active');
  };

  const closeForm = () => {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
  };

  openFormBtn.addEventListener('click', () => {
    displayForm();
    console.log('open form!');
  });

  closeFormBtns.addEventListener('click', () => {
    closeForm();
    console.log('closed form!');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const priority = document.getElementById('task-priority').value;
    const date = document.getElementById('task-date').value;
    const id = Date.now();

    const task = new Task(title, desc, priority, date, id);
    const card = makeCard(title, desc, priority, date, id);
    main.append(card);
    tasks.push(task);

    console.log(title);

    console.log(tasks);
    document.getElementById('form').reset();

    closeForm();
    console.log(task);
    console.log('clicked submit!');
  });
};

export default doms;
