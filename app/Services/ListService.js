import List from "../Models/List.js";
import _store from "../store.js"
import Task from "../Models/Task.js"

//Public
class ListService {

  constructor() {
    console.log("listservice is working")
  }

  addList(newList) {
    newList = new List(newList)
    _store.State.lists.push(newList)
    console.log(_store.State.lists)
  }

  addTask(newTask, listId) {
    newTask = new Task(newTask)
    let list = _store.State.lists.find(l => l.id === listId)
    list.tasks.push(newTask)
    _store.saveState()
  }


  deleteList(id) {
    let lists = _store.State.lists.filter(list => list.id !== id)
    _store.State.lists = lists
    _store.saveState()
  }

  deleteTask(taskId, listId) {
    let list = _store.State.lists.find(l => l.id === listId)
    let tasks = list.tasks.filter(task => task.taskId !== taskId)
    list.tasks = tasks

    _store.saveState()
  }


  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
