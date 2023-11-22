import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavPortfolio } from './components/navPortfolio'
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';



function App() {


  return (
    <>
      <NavPortfolio />
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  )
}

export default App
