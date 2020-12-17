
import './App.css';
import NavBar from './containers/NavBar'
import Projects from './containers/Projects'
import AboutMe from './containers/AboutMe'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Welcome/>
      <NavBar/>
      <Projects/>
      <AboutMe/>
    </div>
  );
}

export default App;
