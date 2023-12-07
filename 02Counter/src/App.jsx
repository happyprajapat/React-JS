import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter] = useState(0)

  // let counter = 12

  const addValue= () => {
    // counter=counter+1;
    setCounter(counter+1);
    console.log("Value Added",counter)
  }

  const removeValue= () => {
    // counter=counter-1;
    setCounter(counter-1)
    console.log("Value Removed",counter)
  }
  return (
    <>
      <h1>Happy Prajapat</h1>
      <h2>Counter Value :- {counter} </h2>

      <br/>
      <button
      onClick={addValue} >Add Value {counter}</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}>Remove Value {counter}</button>

    </>
  )
}

export default App
