import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    container:{
        backgroundColor: 'blue', 
        height: '80vh',
    },
    logo:{
        height: 100
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
                Graph with language knowledge
                Graph with interests 
                Link to Blog?
                Link to Rusume
                Link to Linked in 
                <ul>
                    <li>
                    <img className={classes.logo} src="https://i.imgur.com/ya0lvus.png" alt="github"/>
                    </li>
                    <li>
                    <img className={classes.logo} src="https://i.imgur.com/HymmnzB.png" alt="linkedin"/>
                    </li>
                    <li>
                    <img className={classes.logo} src="https://i.imgur.com/3rn94fR.png" alt="medium"/>
                    </li>
                </ul>

                

                
                
                "https://www.linkedin.com/in/giuliacajati/"
                "https://github.com/GiuliaCajati"

                </Container>  
            </Container>
        </React.Fragment>
    )
}

export default AboutMe