import {
  Navigate,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import {
  useEffect
} from "react"
import Home from './pages/Home.jsx'
import {
  auth
} from "./config/firebase.config.js"

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred?.providerData[0])
      } else {
        navigate("/home/auth", {
          replace: true
        })
      }
    })
  },
    [])
  return (
    <>
    <div className="font-almarai w-screen overflow-hidden bg-pri text-zinc-400">
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route path='*' element={<Navigate to={'/home'} />} />
      </Routes>
    </div> < />
  )
}

export default App