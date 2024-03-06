import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

 const addValue = () => {
    setCounter(++counter)
  }

  const removeValue = () => {
    setCounter(--counter)
  }


  return (
    <>
      <h1>Use state</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
