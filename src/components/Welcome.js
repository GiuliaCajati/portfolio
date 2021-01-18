import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//shapes moving aroundthe page 
//onpage load 




const useStyles = makeStyles({
    container:{
        backgroundColor: 'black', 
        backgroundImage: `url(${"https://images.unsplash.com/photo-1577661395291-4dc2ad420b7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"})`,
        height: '100%',
        width: '100%',
    },
    titleContainer:{
        height: '5%',
        color: 'white',
        paddingTop: 30
    },
    title:{
        fontSize: 40, 
    },
    textImageContainer:{
        height: '10%',
        width: '100%',
        marginTop: '5%',
        display: 'flex',
    },
    image:{
        width: '40%',
        display: 'flex',
        paddingLeft: '10%',
        paddingBottom: '10%'
    },
    text:{
        color: 'white',
        marginTop: '15%',
        marginLeft: '10%',
        maxfontSize: 30,
        width:'30%'

    },
    atam:{
        height: 100
    }
  });

const Welcome = () => {
    const classes = useStyles();
    const [hover, setHover] = useState(true)

    const toggleHover = () => {
        setHover(!hover)
    }

    return (
    <React.Fragment>
        <Container maxWidth="xl" className={classes.container}>
                <Container 
                onMouseEnter={toggleHover} 
                onMouseLeave={toggleHover} 
                className={classes.titleContainer}>
                {hover?<b className={classes.title}>Giulia's Portfolio</b>:<b className={classes.title}>Ready to explore!</b>}
                </Container>
                    <div className={classes.textImageContainer}>
                    <img className={classes.atam} src="https://i.pinimg.com/originals/cf/ea/2f/cfea2f3d4d8a7d15947b1397fee3e720.gif" />
                    <img className={classes.image} src="https://i.imgur.com/sKdTh8t.png"/>
                        <div className={classes.text}>Hello World! I am a Full Stack Software Engineer based in Washington, DC.</div>
                        
                    </div>
        </Container>
        {/* <Container className={classes.image}>       
            </Container> */}
    </React.Fragment>
    )
}

export default Welcome