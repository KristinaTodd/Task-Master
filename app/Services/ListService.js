import List from "../Models/List.js";
import Task from "../Models/Task.js";
import _store from "../store.js"

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

  addTask(newTask) {
    let list = _store.State.lists
    list.push(newTask)

  }


  deleteList(id) {
    let lists = _store.State.lists.filter(list => list.id !== id)
    _store.State.lists = lists
    _store.saveState()
  }

  deleteTask(task) {
    let list = _store.State.lists[task]
    let newTasks = list.tasks.filter(t => t !== list.tasks)
    list.tasks = newTasks
    _store.saveState()
  }


  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
