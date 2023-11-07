import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavPortfolio } from './components/navPortfolio'
import { Home } from './components/Home';
import { About } from './components/About';


function App() {


  return (
    <>
      <NavPortfolio />
      <Home />
      <About />
    </>
  )
}

export default App
