import React from "react"

class TaskInput extends React.Component {
 constructor(props){
  super(props)
  this.state = {
    input: ''
  }
 }

 inputChange = event => {
    this.setState({input: event.target.value})
 }

 addTask = () => {
  const { input } = this.state
  if( input ) {
    this.props.addTask(input)
    this.setState({input: ''})
  }
 }

 handleEnter = event => {
  if(event.key === "Enter") {
    this.addTask()
  }
 }

  render() {
    const { input } = this.state

    return(
      <div className="task-input">
        <input onKeyDown={this.handleEnter} onChange={this.inputChange} value={input} type="text" />
        <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}

export default TaskInput