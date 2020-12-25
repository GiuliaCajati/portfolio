import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    container:{
        backgroundColor: 'black', 
        height: '80vh',
        width: '100%'
    },
    image:{
        paddingLeft:'10'
    },
    title:{
        color:'white'
    }
  });

const Welcome = () => {
    const classes = useStyles();


    return (
        <React.Fragment>
                <Container maxWidth="xl" className={classes.container}>
                <Container className={classes.image}>
                    <img src="https://i.imgur.com/sKK0feZ.png"/>
                    <h1 className="title">GIULIA's PORTFOLIO</h1>
                </Container>
            </Container>
        </React.Fragment>

    )

}

export default Welcome