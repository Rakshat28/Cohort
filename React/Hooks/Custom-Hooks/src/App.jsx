// import { useState,useEffect } from "react";

// function App() {
//   const [render,setRender] = useState(true);
//   setTimeout(()=>{
//     setRender(false);
//   },5000)

//   return (

//     <div>
//       {render? <MyComponent /> : <div></div>}
//     </div>
//   )
// }

// function MyComponent(){

//   const [count,setCount] = useState(0);

//   // a nice concept
//   useEffect(()=>{
//     console.log("component mounted");
//     return ()=>{

//       console.log("component unmounted");
//     };
//   },[count]);
//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Click me </button>
//     </div>
//   )
// }

// export default App


//data fetching custom hooks
// import axios from 'axios';
// import { useState,useEffect } from "react";

// function useTodos(){
//   const [todos,setTodos] = useState([])

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res=>{
//       setTodos(res.data.todos);
//     })
//   },[])
//   return todos;
// }

// function App(){
//   const todos = useTodos();
//   return (
//     <div>
//       {todos.map((todo)=>{
//         return(
//           <div>
//             <h3>{todo.title}</h3>
//             <br />
//             <h5>{todo.description}</h5>
//             <br />
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App;

// useDebounce 

import { useState,useEffect } from "react";
function App(){
  const [value,setValue] = useState('');
  const debouncedValue = useDebounce(value,500);
  return(
    <div>
      {debouncedValue}
      <input 
      type="text"
      value = {value}
      onChange = {e => setValue(e.target.value)} />
    </div>
  )
}
function useDebounce(value,delay){
  const [debouncedValue,setDebouncedValue] = useState(value);
  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setDebouncedValue(value);
    },delay);

    return ()=>{
      clearTimeout(timeout);
    }

  },[value])


  return debouncedValue;
}

export default App;