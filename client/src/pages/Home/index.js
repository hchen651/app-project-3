import React, { useState } from "react";

// Components
import ButtonL from "../../components/ButtonL";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btn: {
        margin: theme.spacing(3),
        width: 300,
    },
    card: {
        margin: theme.spacing(3),
        display: 'flex',
    },
    img: {
        width: 400,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
<<<<<<< HEAD
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2>Home</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {/* context here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );    
};

export default Home;
=======
        <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
                <Typography component="h3" variant="h5" gutterBottom>
                    <Box lineHeight={1.5} align="center">
                    Imprint is a revolutionary app that can scan, import, and organize business cards into your phone with a simple snap and tap. In moments, the card is saved with the subject's company and contact information neatly organized to be easily referenced at any time
                    </Box>
                </Typography>
                <Card className={classes.card}>
                    <CardMedia 
                    component="video"
                    className={classes.img}
                    src="https://media.giphy.com/media/ar16pMPuR1BO8/giphy.mp4"
                    />
                </Card>
                <Typography component="h5" variant="body1">
                    <Box align="center">
                    Picture this, you sit down at the bar and next to you, sits a man in a clean cut suit and you start chatting about business. One thing leads to another and Mr. P. Bateman slides you his card embossed with beautiful Silian Grail lettering. You wake up the next morning, fully intent on calling up Mr. Bateman and you open your wallet only to find it overflowing with other business cards that may have once been important but now seem trivial to the multi-million dollar deal Bateman was posing to you. You scramble, dig, and ultimately sit down, defeated, having accepted you lost the business card of a potentially lucrative client. The frustration hits you like an ax to the face. How could've this been avoided? We are proud to introduce you to Imprint
                    </Box>
                </Typography>
                <ButtonL
                className={classes.btn}
                variant="contained"
                color="secondary"
                href="/signup">
                    SIGN UP
                </ButtonL>
            </div>
        </Container>
    )
};
>>>>>>> parent of e0d231c... Merge branch 'master' into maru4
