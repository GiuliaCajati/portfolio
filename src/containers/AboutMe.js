import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container:{
        backgroundColor: '#B0C4DE' , 
        height: '80vh',
    },
    logo:{
        height: 100
    },
    title:{
        fontSize: 60
    },
    skills: {
        marginLeft: 800,
        width: 300,
        marginTop: -350
    }
  });

const AboutMe = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="xl" className={classes.container}>
                <Container className={classes.about}>
                <b className={classes.title}>ABOUT ME</b>
                <List>
                    <ListItem >
                        <a href="https://github.com/GiuliaCajati">
                            <img className={classes.logo} 
                            src="https://i.imgur.com/ya0lvus.png" 
                            alt="github"/>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="https://www.linkedin.com/in/giuliacajati/">
                            <img className={classes.logo} src="https://i.imgur.com/HymmnzB.png" alt="linkedin"/>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="https://giuliacajati.medium.com/">
                            <img className={classes.logo} src="https://i.imgur.com/0SETXjc.png" alt="medium"/>
                        </a>
                    </ListItem>
                </List>
                <Paper className={classes.skills}>
                    Tools and Technologies:
                    <List>
                        <ListItem>Javascript</ListItem>
                        <ListItem>SQL</ListItem>
                        <ListItem>Redux</ListItem>
                        <ListItem>React.js</ListItem>
                        <ListItem>CSS</ListItem>
                        <ListItem>HTML</ListItem>
                        <ListItem>GitHub</ListItem>
                        <ListItem>Material UI</ListItem>
                    </List>
                Graph with interests 
                Link to Blog?
                Link to Resume
                Funny videos youtube 
                Graf about interests 
                https://www.youtube.com/watch?v=pgi4BOWe7UM
                https://www.youtube.com/watch?v=lEANP6VmHL8
                </Paper>
            
    
                
                </Container>  
            </Container>
        </React.Fragment>
    )
}

export default AboutMe