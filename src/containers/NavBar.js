import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { animateScroll as scroll} from 'react-scroll';
import { animateScroll as scrollLink } from 'react-scroll'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: "#E7E7E7",
    color: "#252936",
  },
  logo: {
    color: "#252936",
    marginRight: "35%",
    margin: "1%",
    width:"4%",
  }
});

export default function NavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  // const myRef = useRef(null)
  const welcomeRef = useRef()
  const projectsRef = useRef()
  const aboutRef = useRef()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Paper className={classes.root}>
      {/* <div className={classes.logo}>Giulia Cajati Logo</div> */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <img src="https://i.imgur.com/wTEb1Dm.png"className={classes.logo} />
        
        <Tab 
        className={classes.root}
        onClick={() => scroll.scrollToTop()}
        label="Welcome"
        id="welcomeRef" 
        />
        <Tab 
        className={classes.root}
        onClick={(e) => props.executeScroll(e.currentTarget.id
          )}
        id="projectsRef"
        label="Projects" 
        />
        <Tab className={classes.root} 
        onClick={() => scroll.scrollToBottom()}
        label="About Me"
        id="aboutMeRef"  
        />
      </Tabs>
    </Paper>
  );
}