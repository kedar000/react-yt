import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setcounter] = useState(5);
  const valueadd =function addValue(){
    setcounter(counter+1);
  }
  const valuedec =function decreaseValue(){
    setcounter(counter-1);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
     <h1>counter {counter}</h1>
     <button onClick={valueadd}>add value{counter}</button><br></br>
     <button onClick={valuedec}>decrease value{counter}</button>
    </>
  )
}


export default App
