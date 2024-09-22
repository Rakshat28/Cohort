// you will have to do npm install react-router-dom
import React,{ Suspense } from 'react';
import './App.css'
// // import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

// what is lazy loading
const Landing = React.lazy(()=>import("./components/Landing"));

const Dashboard = React.lazy(()=>import("./components/Dashboard"));

function App() {
  // for lazy loadin now use suspense API
  return (
   <div>
    {/* {/* react lets us create single page application 
    and allows us to do client side routing 
    
    
    how to do routing in react ;;;;; react-router-dom*
    
    /*} */}
    <Navbar />
    {/* <button onClick={()=>window.location.href="/"}>Landing</button>
    <button onClick={()=>window.location.href="/dashboard"}>Dashboard</button> */}


    <BrowserRouter>
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard /> } />
      </Routes>
      </Suspense>
    </BrowserRouter>
      {/*
      when we use window.location.href

      all the things done above are not actually client side routing as when we go from lanfing page to the
      dashboard or vice versa , we see that the page reloads and all the html css and js is comming back 
      and page is getting refreshed *
      
      to solve the above mentioned issue we will use a hook called useNavigate from the react-router-dom library 
      
      and useNavigate should always be used inside a component which is in BrowserRouter*/}
   </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>navigate("/")}>Landing</button>
      <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
    </div>
  )
}

export default App
