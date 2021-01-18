
import './App.css';
import NavBar from './containers/NavBar'
import ProjectsPage from './containers/ProjectsPage'
import AboutMe from './containers/AboutMe'
import Welcome from './components/Welcome'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    position:'fixed',
    width: '100%'
  },

})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.nav}>
      <NavBar />
      </div>
      <Welcome />
      
      <ProjectsPage/>
      <AboutMe/>
    </div>
  );
}

export default App;
