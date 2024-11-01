import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white');

  return (
    <>
      <div style={{backgroundColor: color , height: '100vh'}}>
      <button onClick={()=>{setColor('red')}}>Red</button>
      <button onClick={()=>{setColor('blue')}}>Blue</button>
      <button onClick={()=>{setColor('green')}}>Green</button>
      </div>
    </>


  )
}

export default App
