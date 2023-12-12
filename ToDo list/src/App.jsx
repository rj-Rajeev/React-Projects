import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [task, setTask] = useState('')
  let [tasklist, setTaskList] = useState([])
  
  
  const submitTask = (newTask)=>{
    if (newTask!='') {
      setTaskList(prevTask => [...prevTask, newTask])
    }
    setTask("");
  }

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      document.getElementById('myButton').click();
    }
  };

  const delTask =(value)=>{
    setTaskList(prevTask => tasklist.filter((task,idx) =>idx !== value));   
  }

  
  return (
    <>
    <div className="inputField"> 
    <h1>Rj's ToDo List</h1>
      <input className="input" type="text" name="TaskField" id="TaskField"  placeholder='Add Your Task' 
      value={task} onChange={(e)=>setTask(e.target.value)} onKeyDown={handleEnterKeyPress}/>
      <button id='myButton' onClick={()=>submitTask(task)}>Add Task</button>
    </div>
    <div className="tasklist">
      <ol>
      {tasklist.map((value, idx)=>(
          <li key={idx}>{value}<button  onClick={()=>{delTask(idx)}}>Delete</button></li>
        ))}
      </ol>
    </div>
    </>
  )
}

export default App