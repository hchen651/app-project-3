import React, { useState } from "react";

// Component
import BusinessCardS from '../../components/BusinessCardS';
import Navbar from '../../components/Navbar';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        marginRight: theme.spacing(1),
        color: '#424242',
        fontSize: 20,
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" gutterBottom>
                        About Imprint
                    </Typography>
                    <Typography component="h5" variant="body1" align="center">
                        <Box mb={1}>
                        <strong>Imprint</strong> is a business card collector and organizer that features dynamically displayed and updated information.
                        With <strong>Imprint</strong>, you can:
                        </Box>
                        <Box>
                        - Add new business cards
                        </Box>
                        <Box>
                        - Browse stored business cards
                        </Box>
                        <Box>
                        - View information of each card
                        </Box>
                        <Box>
                        - Edit, update, and delete card information
                        </Box>
                    </Typography>
                    <br />
                    <br />
                    <Typography component="h1" variant="h5" gutterBottom>
                        Project Team
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <BusinessCardS>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            Rachael Tseng
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Full-Stack Web Developer
                                        </Typography>
                                        <Link color="inherit" href="https://github.com/hojungt">
                                            <FontAwesomeIcon className= {classes.icon} icon={faGithub} />
                                        </Link>
                                        <Link color="inherit" href="https://www.linkedin.com/in/rachael-ho-jung-tseng/">
                                            <FontAwesomeIcon className= {classes.icon} icon={faLinkedin} />
                                        </Link>
                                    </CardContent>
                                </div>
                            </BusinessCardS>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <BusinessCardS>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            Henry Chen
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Full-Stack Web Developer
                                        </Typography>
                                        <Link color="inherit" href="https://github.com/hchen651">
                                            <FontAwesomeIcon className= {classes.icon} icon={faGithub} />
                                        </Link>
                                    </CardContent>
                                </div>
                            </BusinessCardS>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <BusinessCardS>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            Marusol Lee
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Full-Stack Intern
                                        </Typography>
                                        <Link color="inherit" href="https://github.com/marulee">
                                            <FontAwesomeIcon className= {classes.icon} icon={faGithub} />
                                        </Link>
                                    </CardContent>
                                </div>
                            </BusinessCardS>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <BusinessCardS>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            Richard Hu
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Full-Stack Intern
                                        </Typography>
                                        <Link color="inherit" href="https://github.com/rzhanghu64">
                                            <FontAwesomeIcon className= {classes.icon} icon={faGithub} />
                                        </Link>
                                    </CardContent>
                                </div>
                            </BusinessCardS>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    )
};