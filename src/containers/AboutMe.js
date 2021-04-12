import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Graph from '../components/Graph.js'

const useStyles = makeStyles({
    container:{
        backgroundColor: '#D6DBE0' , 
    },
    logos:{
        width: '90%', 
        display: 'flex'
    },
    logoContainer:{
        background: '#DEE8EA',
        marginLeft:'20%',
        marginBottom:'3%',
        marginTop:'2%',
        width: '6rem', 
        height: '6rem'
    },
    logo:{
        height: 100,
    },
    title:{
        paddingTop: '10%',
        width: '25%'
    },
    careerPaper: {
        width: '50%',
        background: '#DEE8EA',
        marginRight:'10%',
    },
    skillsPaper: {
        width: '50%',
        background: '#DEE8EA',
        //display: 'flex',  
    },
    careerDiv: {
        padding: '2%',
    },
    paperContainer:{
        paddingBottom:'5%', 
        display: 'flex',  
    },
    button:{
        padding: '2%',
    },
    graphDiv:{
        padding:"7%"
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
                    <div className={classes.logos} >
                        <Paper
                        elevation={3}
                        className={classes.logoContainer} >
                            <a target='_blank' href="https://github.com/GiuliaCajati">
                                <img className={classes.logo}  
                                src="https://i.imgur.com/ya0lvus.png" 
                                alt="github"/>
                            </a>
                        </Paper>

                        <Paper
                        elevation={3}
                        className={classes.logoContainer} >
                            <a target='_blank' href="https://www.linkedin.com/in/giuliacajati/">
                                <img className={classes.logo} 
                                src="https://i.imgur.com/HymmnzB.png" 
                                alt="linkedin"/>
                            </a>
                        </Paper>

                        <Paper
                        elevation={3}
                        className={classes.logoContainer} >
                            <a target='_blank' href="https://giuliacajati.medium.com/">
                                <img className={classes.logo} 
                                src="https://i.imgur.com/0SETXjc.png" 
                                alt="medium"/>
                            </a>
                        </Paper>
                    </div>

                    <div className={classes.paperContainer}>
                    <Paper elevation={3}
                    className={classes.careerPaper}>
                        <div className={classes.careerDiv}>
                            <div>
                                <h2>Career:</h2>
                                An open mind and curiosity, have driven me to pursue many amazing experiences. Post undergrad I was given the unique opportunity to participate in the Hilton’s highly selective Management Development program. I quickly adapted to the fast paced environment of Hilton’s largest hotels, and hit records in occupancy, and room revenue.

                                After five amazing years in the industry, I became fascinated with the overwhelming influence technology has had on our everyday life. This led me to take a big leap, and begin my software engineering studies at the Flatiron School. This has been an incredibly fulfilling decision. It has been astonishing how quickly time goes by when building incredible projects, and learning new skills. I look forward to seeing what impact I can make through my work. 
                            </div>
                        </div> 
                    </Paper>
                <Paper
                elevation={3}
                className={classes.skillsPaper}>
                    <div><h2>Key Skills:</h2>
                        Skilled in React.js, Ruby, Ruby on Rails, Javascript, GitHub, Node.js, Redux, Ac2ve Record, SQL, SQLite, Material UI, Front-end Development, Back-end, Development, Web Development,Applica2ons, Soaware, Development, ES6, Redux, Git, Github, CSS, HTML5, Heroku, Postgres
                    </div>
                    <div className={classes.button}>
                        <Button variant="contained" color="primary" component="span">
                            <a target='_blank' href="https://drive.google.com/file/d/1dNAr9WnQQtKu3GI5U_Ubo4IqVQhAhv55/view?usp=sharing">Resume</a>
                        </Button>
                    </div>  
                    <div className={classes.graphDiv}>
                    <Graph/>
                    </div>
                </Paper>

                </div>

                </Container>  
            </Container>
        </React.Fragment>
    )
}

export default AboutMe
















  



