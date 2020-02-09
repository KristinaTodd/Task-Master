import { generateId } from "../utils.js";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import Task from "./Task.js"

export default class List {
  /**
   * 
   * @param {{ title: any; id: string; tasks: Task[]}} data 
   */

  constructor(data) {
    this.title = data.title
    this.tasks = data.tasks || []
    this.id = data.id || generateId()
  }

  get Tasks() {
    let template = ""
    this.tasks.forEach(task => {
      task = new Task(task)
      template += task.TaskTemplate(this.id)
    })
    return template
  }

  get listTemplate() {
    return `
      <div class="col-3 m-2 card task-card">
        <div class="row">
          <div class="col-12" class="text-center">
            <h1 class="text-center">${this.title}</h1>
          </div>
          </div>
          <div class= "row" id="tasks">${this.Tasks}
          </div>
          <div class="row">
          <div class="col-12">
            <form onsubmit="app.listController.addTask(event, '${this.id}')">
              <div class="form-group"><span>
                <input type="text" class="form-control card-form" id="new-task" name="taskText" placeholder="Add A Task" required>
                <button type="submit" class="task-add"><i class="fas fa-plus-circle text-success"></i></button></span>
              </div>
            </form>
          </div>
          <div class="col-11 text-danger delete-button"></div>
           <div class="col-1"> <button onclick="app.listController.deleteList('${this.id}')" class="text-danger task-delete"><i
                class="far fa-trash-alt"></i></button></div>
          </div>
        </div>
      </div>`
  }

}