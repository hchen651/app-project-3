import React from "react";

// Components
import Navbar from "../../components/Navbar";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btn: {
        margin: theme.spacing(3),
        width: 300,
        background: '#616161',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 50,
        padding: '0 40px',
        boxShadow: '0 0 0 0',
        fontSize: 20,
    },
    card: {
        margin: theme.spacing(3),
        display: 'flex',
        borderRadius: 0,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                    <Typography component="h3" variant="h5" gutterBottom>
                        <Box lineHeight={1.5} align="center">
                        A revolutionary app that scans, imports, and organizes business cards into your phone
                        </Box>
                        <Box lineHeight={1.5} align="center" mb={2}>
                        with a simple snap and tap
                        </Box>
                    </Typography>
                    <Typography component="h5" variant="body1" gutterBottom>
                        <Box textAlign="justify">
                        In moments, the card is saved with the subject's company and contact information neatly organized to be easily referenced at any time.
                        </Box>
                    </Typography>
                    <Typography component="h5" variant="body1" gutterBottom>
                        <Box textAlign="justify">
                        Picture this: You sit down at the bar and next to you, sits a man in a clean cut suit, and the two of you start chatting about some business. One thing leads to another, and Mr. P. Bateman slides you his card embossed with beautiful Silian Grail lettering. 
                        </Box>
                    </Typography>
                    <Card className={classes.card}>
                        <CardMedia 
                        component="video"
                        src="https://media.giphy.com/media/ar16pMPuR1BO8/giphy.mp4"
                        alt="business_card"
                        />
                    </Card>
                    <Typography component="h5" variant="body1" gutterBottom>
                        <Box textAlign="justify">
                        You wake up the next morning, fully intent on calling up Mr. Bateman, and you open your wallet only to find it overflowing with other business cards that may have once been important but now seem trivial to the multi-million dollar deal Bateman was posing to you. You scramble, dig, and ultimately sit down, defeated, having accepted you lost the business card of a potentially lucrative client. 
                        </Box>
                    </Typography>
                    <Typography component="h5" variant="body1" gutterBottom>
                        <Box textAlign="justify">
                        The frustration hits you like an ax to the face. How could've this been avoided? We are proud to introduce <strong>Imprint</strong>, now your favorite business card collector and organizer.
                        </Box>
                    </Typography>
                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="inherit"
                        href="/signup">
                        SIGN UP
                    </Button>
                </div>
            </Container>
        </React.Fragment>
    )
};
