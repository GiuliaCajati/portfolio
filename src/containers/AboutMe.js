import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    container:{
        backgroundColor: '#cfe8fc', 
        height: '80vh',
    },
    welcome:{
       marginLeft: '80vh',
      // padding: '0px'
    } 
  });

const AboutMe = () => {
    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="xl" className={classes.container}>
                <Container className={classes.welcome}>
                ABOUT ME

                </Container>  
            </Container>
        </React.Fragment>

    )

}

export default AboutMe