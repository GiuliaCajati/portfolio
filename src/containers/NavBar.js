import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom' 

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: "#E7E7E7",
    color: "#252936",
  },
  logo: {
    color: "#252936",
    marginRight: "35%",
    width:"3%"
  }
});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

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

        <img src="https://i.imgur.com/yu8lFsj.png"className={classes.logo} />
        
        <Tab className={classes.root} 
        component={Link} to="/welcome" 
        label="Welcome" 
        />
        <Tab className={classes.root} 
        component={Link} to="/projects" 
        label="Projects" />
        
         <Tab className={classes.root} 
        component={Link} to="/about" label="About Me" />
      </Tabs>
    </Paper>
  );
}