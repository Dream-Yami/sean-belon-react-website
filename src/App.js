import React from "react"
import Navbar from "./js/Navbar"
import Profile from "./js/Profile"
import About from "./js/About"
import Projects from "./js/Projects"
import Contact from "./js/Contact"
import Footer from "./js/Footer"
import "./App.css"

function App(){
  return <div>
    <Navbar/>
    <Profile/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
}

export default App