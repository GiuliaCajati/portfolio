import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: "black",
  },
  logo: {
    color: "white",
    marginRight: "45%"

  }
});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      {/* <div className={classes.logo}>Giulia Cajati Logo</div> */}
  
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Giulia" className={classes.logo} />
        <Tab label="Welcome" />
        <Tab label="About Me" />
        <Tab label="Projects" />
      </Tabs>
    </Paper>
  );
}