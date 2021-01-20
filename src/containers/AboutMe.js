import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles({
    container:{
        backgroundColor: '#D6DBE0' , 
        height: '100%',
    },
    logos:{
        width: '90%', 
    },
    logo:{
        height: 100,
        marginLeft:'10%'
    },
    title:{
        paddingTop: '5%',
        width: '25%'
    },
    paper: {
        width: '50%',
        background: '#f2fcff'
        
    },
    text: {
        padding: '2%',
    },
    paperContainer:{
       // paddingLeft: '30%',
        paddingBottom:'5%'
    },
    button:{
        padding: '2%'
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
                   
                        <a target='_blank' href="https://github.com/GiuliaCajati">
                            <img className={classes.logo}  
                            src="https://i.imgur.com/ya0lvus.png" 
                            alt="github"/>
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/giuliacajati/">
                            <img className={classes.logo} 
                            src="https://i.imgur.com/HymmnzB.png" 
                            alt="linkedin"/>
                        </a>
                        <a target='_blank' href="https://giuliacajati.medium.com/">
                            <img className={classes.logo} 
                            src="https://i.imgur.com/0SETXjc.png" 
                            alt="medium"/>
                        </a>
                </div>

                
               
                <div className={classes.paperContainer}>
                <Paper elevation={3}
                className={classes.paper}>
                <div className={classes.text}>
                    <div>
                    <h2>Career:</h2>
                    An open mind and curiosity, have driven me to pursue many amazing experiences. Post undergrad I was given the unique opportunity to participate in the Hilton’s highly selective Management Development program. I quickly adapted to the fast paced environment of Hilton’s largest hotels, and hit records in occupancy, and room revenue.

                    After five amazing years in the industry, I became fascinated with the overwhelming influence technology has had on our everyday life. This led me to take a big leap, and begin my software engineering studies at the Flatiron School. This has been an incredibly fulfilling decision. It has been astonishing how quickly time goes by when building incredible projects, and learning new skills. I look forward to seeing what impact I can make through my work. 
                    </div>
                    <div><h2>Skills:</h2>
                    Experienced in Ruby on Rails and JavaScript based programming along with and a background in business and hotel management. Possess strong skills in  team-building and project management that help fast growing companies achieve positive results. 
                    </div>
                    </div>
                    <div className={classes.button}>
                        <Button variant="contained" color="primary" component="span">
                            <a target='_blank' href="https://drive.google.com/file/d/1JnTIKhVeisLTpNKVN4_DnI7hhdg2tNFB/view?usp=sharing">Resume</a>
                        </Button>
                    </div>
                    
                    
                    
                </Paper>
                </div>

                </Container>  
            </Container>
        </React.Fragment>
    )
}

export default AboutMe