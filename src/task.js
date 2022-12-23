export default class Task {
  constructor(name, id, status, priority, description, dueDate = 'No Date') {
    this.name = name;
    this.id = id;
    this.status = status;
    this.priority = priority;
    this.description = description;
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

  setPriority(priority) {
    this.priority = priority;
  }

  setDescription(description) {
    this.description = description;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getDescription() {
    return this.description;
  }

  getDate() {
    return this.dueDate;
  }
}
