import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import ChildNav from './components/ChildNav'

const App = () => {
 
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />
      <ChildNav/>
      <div className='flex justify-center items-center min-h-screen w-full text-4xl font-bold'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/courses/:courseId' element={<CourseDetails/>} />
          <Route path='/product' element={<Product />}>
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
