const Task = ({task, completeTask, deleteTask}) => {

  const ActionBtn = () => (
    <div className="action-btn">
      { !task.done ? (
      <p onClick={completeTask}>✔️</p>
      ) : (
      <p onClick={deleteTask}>❌</p>
      ) }
    </div>
  )

    const classes = 'task' + (task.done ? ' task-done' : '')

  return (
    <div className={classes}>
      <p>{ task.title } </p>
      <ActionBtn />
    </div>
  )
}

export default Task