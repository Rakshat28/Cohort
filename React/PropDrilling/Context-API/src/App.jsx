
import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context';
function App() {
  const [count, setCount]=useState(0);
  return (
  <div>

    <CountContext.Provider value={count}>
      <Count count={count} setCount={setCount}  />
    </CountContext.Provider>
   
  </div>
  )
}

// context api lets you pass the variables without drilling them down

// if we use context api then we are pusing the state management code logio ouside of the react components

function Count({setCount}){

  // here is an axample of prop drilling
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  )
}

function CountRenderer(){

  const count = useContext(CountContext);
  return(
    <div>
      {count}
    </div>
  )
}

function Button({setCount}){

  const count = useContext(CountContext);
  return(
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase
    </button>

      <button onClick={()=>{
        setCount(count-1)
      }}>
        Decrease
      </button>
    </div>
  )
}


export default App
