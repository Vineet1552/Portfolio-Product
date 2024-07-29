import './App.css'
import { AboutMe } from './Pages/AboutMe/Aboutme'
import { Experience } from './Pages/Experience/Experience'
import { GetInTouch } from './Pages/GetInTouch/GetInTouch'
import { MainBar } from './Pages/MainBar/MainBar'
import { Navbar } from "./Pages/Navbar/Navbar"
import { Projects } from './Pages/Projects/Projects'
import { Skills } from './Pages/Skills/Skills'

function App() {

  return (
    <>
    <Navbar/>
    <MainBar/>
    <AboutMe/>
    <Experience/>
    <Skills/>
    <Projects/>
    <GetInTouch/>
    </>
  )
}

export default App