
import { useRecoilState,useSetRecoilState,useRecoilValue,RecoilRoot } from 'recoil';
import './App.css'
import { countAtom } from './store/atoms/count';

// do npm  intsall recoil
//  context API was used to make syntax cleaner and to get rid of prop drilling 
//  context api was NOT used to make rendering more efficient

// to solve both the issues at once , some smart people create state management libraries like Recoil

// recoil has a concept of Atoms to store the state , an atom can be defined outside of the components , can be
//       teleported to any component

//       an atom is similar to the useState thing

//       an atom will always be defined outside , and we can specify wher it can be used

//       therefore recoil is a state-management library

//       things to learn -
//       1)RecoilRoot
//       2)atom
//       3)useRecoilState
//       4)useRecoilValue
//       5)useSetRecoilState
//       6)selector

function App() {
  return (
   <RecoilRoot>
      <div>
      <Count />
    </div>
   </RecoilRoot>
  )
}
function Count(){
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons(){
  const setCount=useSetRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>{setCount(count=>count+1)}
      }>
        Increase
      </button>
      <button onClick={()=>{setCount(count=>count-1)}
      }>
        Decrease
      </button>
    </div>
  )
}

export default App
