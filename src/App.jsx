import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavPortfolio } from './components/navPortfolio'
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';



function App() {


  return (
    <>
      <NavPortfolio />
      <Home />
      <About />
      <Projects />
    </>
  )
}

export default App
