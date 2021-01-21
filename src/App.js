
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import NavBar from './containers/NavBar'
import ProjectsPage from './containers/ProjectsPage'
import AboutMe from './containers/AboutMe'
import Welcome from './components/Welcome'
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import {  Switch, Route } from 'react-router-dom';//withRouter
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
  const scrollToRef = (ref) => window.scrollTo( {top: ref.current.offsetTop, behavior: 'smooth'
  }) 
  const projectsRef = useRef(null)
  const welcomeRef = useRef(null)
  const aboutMeRef = useRef(null)

  const executeScroll = (targetID) => {
    scrollToRef(projectsRef)
  }


  return (
    <div className="App">
      <div>
        <Grow in={display}
          style={{ transformOrigin: '0 0 0' }}
          {...(display ? { timeout: 1000 } : {})}>
          <div className={classes.nav}>
            <NavBar executeScroll={executeScroll} />
          </div>
        </Grow>
        <Welcome />
        <ProjectsPage projectsRef={projectsRef}/>
        <AboutMe aboutMeRef={aboutMeRef}/>
        
      </div>

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
