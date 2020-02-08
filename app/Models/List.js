import { generateId } from "../utils.js";


export default class List {
  constructor(data) {
    this.title = data.title
    this.tasks = data.tasks || []
    this.id = data.id || generateId()
  }

  get Template() {
    return `
      <div class="col-3 m-2 card task-card">
        <div class="row">
          <div class="col-12" class="text-center">
            <h1 class="text-center">${this.title}</h1>
          </div>
          </div>
          <div class= "row" id="tasks">
          <div class="col-10 list-items"><span><i class="fas fa-angle-right"></i> ${this.tasks}</span></div>
          <div class="col-2"> <button onclick="app.listController.deleteTask('${this.tasks}')" class="task-delete text-danger" title="DELETE">X</button></div>
          <div class="col-12">
            <form onsubmit="app.listController.addTask(event, '${this.id}')">
              <div class="form-group"><span>
                <input type="text" class="form-control card-form" id="new-task" placeholder="Add Another Task" required>
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
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
