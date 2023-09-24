import './App.css'
import Footer from './Footer'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className='main'>
    <Nav/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
