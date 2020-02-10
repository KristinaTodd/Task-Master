import { generateId } from "../utils.js";

export default class Task {

  constructor(data) {
    this.taskName = data.taskName
    this.taskId = data.taskId || generateId()
  }

  TaskTemplate(listId) {
    return `
      <div class="col-10 list-items"><span><i class="fas fa-angle-right"></i> ${this.taskName}</span></div>
      <div class="col-2"> <button onclick="app.listController.deleteTask('${this.taskId}', '${listId}')" class="task-delete text-danger" title="DELETE">X</button></div>
    `
  }
}