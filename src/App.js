
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App bg-gradient-to-b from-white to-emerald-100"> 
        <NavBar name="Manjari"  />
        <Home />
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
