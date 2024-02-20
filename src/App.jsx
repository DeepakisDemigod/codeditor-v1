import {
  Navigate,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import {
  useEffect,
  useState
} from "react"
import Home from './pages/Home.jsx'
import {
  auth,
  db
} from "./config/firebase.config.js"
import {
  setDoc,
  doc
} from "firebase/firestore"
import Spinner from "./features/Spinner.jsx"

function App() {
  const navigate = useNavigate()
  const [isLoading,
    setIsLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred?.providerData[0])
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(() => {})
      } else {
        navigate("/home/auth", {
          replace: true
        })
      }
    })

    setInterval(() => {
      setIsLoading(false)
    },900)

    return () => unsubscribe()
  },
    [])
  return (
    <>
    {
      isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden bg-pri">
        <Spinner />
        </div>
      ): <div className="font-almarai w-screen overflow-hidden bg-pri text-zinc-400">
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route path='*' element={<Navigate to={'/home'} />} />
      </Routes>
      </div>
    } < />
  )
}

export default App