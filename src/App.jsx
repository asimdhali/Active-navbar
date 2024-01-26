import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Home from './Home';
import About from './About';
const App = () => {
  return (
    <Router>
        <nav className='nav'>
          <NavLink className='link' to='home'>Home</NavLink>
          <NavLink className='link' to='about'>About</NavLink>
        </nav>
        <Routes>
          <Route path='/home'element={<Home />}/>
          <Route path='/about' element={<About />}/>

        </Routes>
    </Router>
  )
}

export default App