import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    container:{
        backgroundColor: '#cfe8fc', 
        height: '80vh',
    },
  });

const AboutMe = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="xl" className={classes.container}>
                <Container className={classes.welcome}>
                ABOUT ME
                Graph with language knowledge
                Graph with interests 
                Link to Blog?
                Link to resume 
                Link to Linked in 
                "https://www.linkedin.com/in/giuliacajati/"
                "https://github.com/GiuliaCajati"

                </Container>  
            </Container>
        </React.Fragment>
    )
}

export default AboutMe