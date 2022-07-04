import {  makeAutoObservable } from "mobx"

class Store {

  constructor() {
    makeAutoObservable(this)
}

setTask(payload) {
  this.tasks = payload
}

get sortedTasks() {
  return this.tasks.slice().sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
}

tasks = [
    { id: 0, title: "Create todo-react app", done: true },
    { id: 1, title: "Learn React", done: false },
    { id: 2, title: "Create simple todo app", done: false },
  ]

  get activeTasks() {
    return this.tasks.filter(task => !task.done).length
  }

  addTask(task) {
    let tasks = this.tasks
    tasks.push({
      id: tasks.length || 0,
      title: task,
      done: false
    })
    this.setTask(tasks)
  }

  completeTask(id) {
    let tasks = this.tasks
    const index = tasks.map(task => task.id).indexOf(id)
    tasks[index].done = true
    this.setTask(tasks)
  }

  deleteTask(id) {
    this.setTask(this.sortedTasks.filter(item => item.id !== id))
  }

}


export default new Store() 