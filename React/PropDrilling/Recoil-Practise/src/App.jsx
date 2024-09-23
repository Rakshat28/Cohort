import { networkAtom } from './states/atoms/atoms'
import { jobsAtom } from './states/atoms/atoms'
import { messagingAtom } from './states/atoms/atoms'
import { notificationAtom } from './states/atoms/atoms'
import { RecoilRoot,useRecoilValue } from 'recoil'
import { totalNotificationSelector } from './states/selectors/selector'
import './App.css'

function App() {
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
   
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const messaginNotificationCount = useRecoilValue(messagingAtom);
  const notificationNotificationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <div>
    <button>Home</button>
    <button >My network ({networkNotificationCount<100?networkNotificationCount : "99+"})</button>
    <button>Jobs ({jobNotificationCount<100?jobNotificationCount : "99+"})</button>
    <button>Messaging ({messaginNotificationCount<100?messaginNotificationCount: "99+"})</button>
    <button>Notification ({notificationNotificationCount<100?notificationNotificationCount: "99+"})</button>
    <button>Me({totalNotificationCount})</button>
  </div>)
}

export default App
