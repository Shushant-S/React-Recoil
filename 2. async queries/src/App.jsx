import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { notificationSelector, notificationsAtom } from './atom'


function App() {
  
  const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom)
  const totalNotificationsCount = useRecoilValue(notificationSelector)


  // shifting this async request inside the atom to remove the initial empty render of zeroes
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button> 

      <button>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging  })</button>
      <button>Notifications ({networkCount.notifications})</button>
      
      <button >Me {totalNotificationsCount}</button>
    </>
  )
}

export default App
