export default class Task {
  constructor(title, description, priority, date, id) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }

  getId() {
    return this.id;
  }
}
