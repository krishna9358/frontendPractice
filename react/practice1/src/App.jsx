// WRAPPER COMPONENT
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const  [counter, setCounter ] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  let count = 0 ; 
  for (let i=1; i<=inputValue; i++){
    count  = count + i;
  }

  return (
    <div>
       <input onChange={function(e){setInputValue(e.target.value);}}></input>
       <p>Sum is {inputValue} is {count}</p>

       <button onClick={() => {setCounter(counter + 1);}}>Counter ({counter}) </button>
    </div>
  )
}


export default App
