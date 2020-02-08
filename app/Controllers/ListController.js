import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let tasks = _store.State.lists
  let listElem = document.getElementById("task-area")
  let template = ""

  tasks.forEach(task => {
    template += task.Template
  })

  listElem.innerHTML = template
}

function _drawTasks() {
  let tasks = _store.State.lists
  let taskElem = document.getElementById("tasks")

  let template = ""

  tasks.forEach(tasks => {
    template += tasks.
  })
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
    console.log("listcontroller is working")
  }

  addList(event) {
    event.preventDefault()

    let formData = event.target
    let newList = {
      title: formData.title.value,
      tasks: formData.task.value,
    }
    console.log(newList)
    ListService.addList(newList)

    formData.reset()

    $(`#new-task-form`).modal('toggle');
    _drawLists()
    _store.saveState()

  }

  addTask(event) {
    event.preventDefault()

    let formData = event.target
    let newTask = {
      tasks: formData.task.value
    }
    ListService.addTask(newTask)

    formData.reset()
    _drawLists()
    _store.saveState()
  }

  //NOTE: After the store loads, we can automatically call to draw the lists.
  deleteList(id) {
    ListService.deleteList(id)
    _store.saveState()
    _drawLists()
    console.log(_store.State.lists)
  }

  deleteTask(task) {
    ListService.deleteTask(task)
    _store.saveState()
    _drawLists()
    console.log(_store.State.lists)
  }
}

  //TODO: Your app will need the ability to create, and delete both lists and listItems

