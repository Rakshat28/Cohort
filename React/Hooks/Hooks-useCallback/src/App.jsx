import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  // using useCallback we have memoized a function such that on any rerender of the page , the value of
  // the function remains saved (if none of its components were changed)
  // this sspecially helps when we are passing the functions as props to any other component , thus 
  // preventing unnecessaary re-renders
  const inputFunction = useCallback(()=>{
    console.log("hello ji");
  },[])


  return (
    <div>
      {/* 
      useCallback is  a hook is React , it is used to memoise function which can help in optimizing the performance of 
      the application , especially in cases involving child components that rely on reference equality to prevent unnecessary renders


       When passing callbacks as props to child components, use useCallback 
       to prevent unnecessary child component re-renders if the callback function doesn't need to change.
        

       */}

        <ButtonComponent inputFunction={inputFunction}/>
        <button onClick={()=>{
          setCount(count +1);
        }}>Click me</button>

    </div>
  )
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render");

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  )
})

export default App
