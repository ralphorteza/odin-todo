export default class Task {
  constructor(name, id, status, dueDate = 'No Date') {
    this.name = name;
    this.id = id;
    this.status = status;
    this.dueDate = dueDate;
  }

  setName(name) {
    this.name = name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  setStatus(status) {
    this.status = status;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getDate() {
    return this.dueDate;
  }
}
