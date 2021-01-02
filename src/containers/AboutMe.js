import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container:{
        backgroundColor: 'grey', 
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
        width: 300
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
                <Paper className={classes.skills}>
                    Skills:
                    <List>
                        <ListItem>Javascript</ListItem>
                        <ListItem>React.js</ListItem>
                        <ListItem></ListItem>
                    </List>
                Graph with interests 
                Link to Blog?
                Link to Resume
                </Paper>
            
                <List>
                    <ListItem>
                    <img className={classes.logo} src="https://i.imgur.com/ya0lvus.png" alt="github"/>
                    </ListItem>
                    <ListItem>
                    <img className={classes.logo} src="https://i.imgur.com/HymmnzB.png" alt="linkedin"/>
                    </ListItem>
                    <ListItem>
                    <img className={classes.logo} src="https://i.imgur.com/0SETXjc.png" alt="medium"/>
                    </ListItem>
                </List>
 
                "https://www.linkedin.com/in/giuliacajati/"
                "https://github.com/GiuliaCajati"

                </Container>  
            </Container>
        </React.Fragment>
    )
}

export default AboutMe