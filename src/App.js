
import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './containers/NavBar'
import ProjectsPage from './containers/ProjectsPage'
import AboutMe from './containers/AboutMe'
import Welcome from './components/Welcome'
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {  Switch, Route } from 'react-router-dom';//withRouter

const useStyles = makeStyles({
  nav: {
    position:'fixed',
    width: '100%',
  },

})

const App = () => {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  useEffect(() =>{
    setDisplay(!display)
  }, [])

  return (
    <div className="App">
      <Grow in={display}
        style={{ transformOrigin: '0 0 0' }}
        {...(display ? { timeout: 1000 } : {})}>
        <div className={classes.nav}>
          <NavBar />
        </div>
      </Grow>
      <Welcome />
      <ProjectsPage/>
      <AboutMe/>


      {/* <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/about" component={AboutMe} />
      </Switch> */}
    </div>
  );
}

export default App;
