import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(10);
  
  let addValue = ()=>{
    if (counter<=19) {
      setCounter(counter+1);
    }
  }
  let removeValue = ()=>{
    if (counter>=1) {
      setCounter(counter-1);
    }
  }
  
  return (
    <>
      <h1>Hey i am Rajeev : {counter}</h1>
      <h4>Value: {counter}</h4>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
