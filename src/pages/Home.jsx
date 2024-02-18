import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Search from '../components/Search.jsx'
import { Routes, Route } from 'react-router-dom'
import Projects from '../pages/Projects.jsx'
import Signup from '../pages/Signup.jsx'

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Search />
        {/* signup routing */}
        <div>
          <Routes>
            <Route path="/*" element={<Projects />}/>
            <Route path="/auth" element={<Signup/>}/>
          </Routes> 
        </div>
      </div>
    </>
  )
}

export default Home
