import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(()=>{
    let count = 0;
    for(let i=1;i<=inputValue;i++){
      count = count +i;
  
    }
    return count;
  },[inputValue]);

  
  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }} placeholder='Find the sum from 1 to n' />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />

      {/* whenever we click on the button , the counter statee variable updates and thus causes a rerender of the entier App
      due to this the for loop which is used to find the value of the count variable also re runs 
      
      to prevent this from happening we will use useMemo hook 
      
      The useMemo hook in React is used to optimize performance by memoizing the result of a function.
       This means it only 
      recalculates the value when its dependencies change, preventing expensive 
      recalculations on every render.
      
      useMemo memoizes the value*/}
      <button onClick={()=>{setCounter(counter+1);}}>
        Counter {counter}
      </button>
    </div>
   
  )
}

export default App
