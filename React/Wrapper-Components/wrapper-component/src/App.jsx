
import './App.css'

function App() {
  return (
   <div>
   <CardWrapper>
       <div>
        Hi there
       </div>
   </CardWrapper>
   </div>
  )
}
function CardWrapper({children}){
  return(
    <div style={{border:"2px solid white" , padding:20 }}>
      {children}
    </div>
  )
}

export default App
