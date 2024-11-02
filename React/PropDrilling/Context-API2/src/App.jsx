import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Contexts/UserContextProvider'
import './App.css'

function App() {
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
