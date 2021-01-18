import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles({
    container:{
        backgroundColor: "#DFE4F0",
        backgroundImage: `url(${""})`,
        height: '100%',
        width: '100%',
    },
    titleContainer:{
        height: '5%',
        color: 'black',
        paddingTop: '5%'
    },
    title:{
        fontSize: 40, 
    },
    textImageContainer:{
        height: '10%',
        width: '90%',
        marginTop: '1%',
        display: 'flex',
        color: 'black'
    },
    image:{
        width: '65%',
        display: 'flex',
        paddingLeft: '10%',
        paddingBottom: '3%'
    },
    text:{
        color: 'black',
        marginTop: '15%',
        marginLeft: '5%',
        maxfontSize: 30,
        width:'30%'
    },
    atam:{
        height: 100
    },
    scroll:{
        color: 'black',
        paddingBottom:'5%'
    },
    triangle:{
        position:"center",
        position:"fixed"
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
                {hover?<b className={classes.title}><img className={classes.atam} src="https://i.imgur.com/BA9MZN4.png" /></b>:<b className={classes.title}><img className={classes.atam} src="https://i.imgur.com/u6Fvt5p.png" /></b>}
                </Container>
                <img className={classes.triangle}src="https://i.imgur.com/KpHAana.png"/>

                
                    <div className={classes.textImageContainer}>
                    
                    <img className={classes.image} src="https://i.imgur.com/wNRe3Yj.png"/>
                        <div className={classes.text}>Hello World! I am a Full Stack Software Engineer based in Washington, DC.</div>
                    </div>
                    <div className={classes.scroll}>
                        Scroll
                    </div>
                    
        </Container>
        {/* <Container className={classes.image}>       
            </Container> */}
    </React.Fragment>
    )
}

export default Welcome