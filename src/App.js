import React from "react"
import Task from "./components/Task"
import TaskInput from "./components/TaskInput"
import store from "./store"
import { observer } from "mobx-react"

class App extends React.Component {
  render() {
    const { sortedTasks, activeTasks } = store

    return(
      <div className="app">
        <h1 className="top">
          Active tasks: { activeTasks }
        </h1>
       { sortedTasks.map(el => (
          <Task 
          key={el.id} 
          task={el} 
          completeTask={() => store.completeTask(el.id)}
          deleteTask={() => store.deleteTask(el.id)}
          />
       )) }
       <TaskInput addTask={v => store.addTask(v)}/>
      </div>
    )
  }
}

export default observer(App)
