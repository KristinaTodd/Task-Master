import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {

  let lists = _store.State.lists
  let listElem = document.getElementById("task-area")

  let template = ""

  lists.forEach(task => {
    template += task.listTemplate
  })

  listElem.innerHTML = template

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
    }
    console.log(newList)
    ListService.addList(newList)

    formData.reset()

    $(`#new-task-form`).modal('toggle');
    _drawLists()
    _store.saveState()

  }

  addTask(event, id) {
    event.preventDefault()

    let formData = event.target
    let newTask = {
      taskName: formData.taskText.value
    }

    let listId = id
    ListService.addTask(newTask, listId)

    formData.reset()
    _drawLists()
    // _drawTasks(listId)
    _store.saveState()
  }

  //NOTE: After the store loads, we can automatically call to draw the lists.
  deleteList(id) {
    let didConfirm = confirm("Are you sure you want to delete this list?");
    if (didConfirm) {
      ListService.deleteList(id)
      _store.saveState()
      _drawLists()
    }
    console.log(_store.State.lists)
  }

  deleteTask(taskId, listId) {

    let didConfirm = confirm("Are you sure you want to delete this task?");
    if (didConfirm) {
      (ListService.deleteTask(taskId, listId))
      _store.saveState()
      _drawLists()
    }
    console.log(_store.State.lists)
  }
}

  //TODO: Your app will need the ability to create, and delete both lists and listItems

