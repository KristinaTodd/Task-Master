import { generateId } from "../utils.js";



export default class Task {
  constructor(data) {
    this.tasks = data.tasks || []
  }

  get taskTemplate() {
    return `
    <div class="col-10 list-items"><span><i class="fas fa-angle-right"></i> ${this.tasks}</span></div>
    <div class="col-2">
      <button onclick="app.listController.deleteTask('${this.tasks}')" class="task-delete text-danger" title="DELETE">X</button>
    </div>
    `
  }
}