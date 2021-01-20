import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container:{
        backgroundColor: '#A4C3D2' , 
        height: '80vh',
    },
    logo:{
        height: 100
    },
    title:{
        padding: '3%',
        width: '25%'
    },
    skills: {
        marginLeft: '50%',
        width: '50%',
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
                <img className={classes.title} src="https://i.imgur.com/BzNz63a.png"/>
                <List>
                    <ListItem >
                        <a target='_blank' href="https://github.com/GiuliaCajati">
                            <img className={classes.logo} 
                            src="https://i.imgur.com/ya0lvus.png" 
                            alt="github"/>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a target='_blank' href="https://www.linkedin.com/in/giuliacajati/">
                            <img className={classes.logo} 
                            src="https://i.imgur.com/HymmnzB.png" 
                            alt="linkedin"/>
                        </a>
                    </ListItem>
                    <ListItem>
                        <a target='_blank' href="https://giuliacajati.medium.com/">
                            <img className={classes.logo} 
                            src="https://i.imgur.com/0SETXjc.png" 
                            alt="medium"/>
                        </a>
                    </ListItem>

                    <a target='_blank' href="https://drive.google.com/file/d/1agUP2l4g_bFiRONHtdoL37isMDSq43Lk/view">Resume</a>
                </List>
                <Paper className={classes.skills}>
                    <b>Skills:</b>
                    
                    <div>
                    Experienced in Ruby on Rails and JavaScript based programming along with and a background in business and hotel management. Possess strong skills in  team-building and project management that help fast growing companies achieve positive results. 
                    </div>
                    
                    
                </Paper>

                {/* Graph with interests 
                Link to Blog?
                Funny videos youtube 
                Graf about interests 
                https://www.youtube.com/watch?v=pgi4BOWe7UM
                https://www.youtube.com/watch?v=lEANP6VmHL8 */}
                </Container>  
            </Container>
        </React.Fragment>
    )
}

export default AboutMe