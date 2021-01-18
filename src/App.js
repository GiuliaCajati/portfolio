
import './App.css';
import NavBar from './containers/NavBar'
import ProjectsPage from './containers/ProjectsPage'
import AboutMe from './containers/AboutMe'
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Welcome/>
      <ProjectsPage/>
      <AboutMe/>
    </div>
  );
}

export default App;
