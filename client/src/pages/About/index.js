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
import IconButton from '@material-ui/core/IconButton';
import Stars from '@material-ui/icons/Stars';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
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
                    <Typography component="h5" variant="body1">
                        <Box>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </Box>
                    </Typography>
                    <br />
                    <Typography component="h1" variant="h5" gutterBottom>
                        Project Team
                    </Typography>
                    {/* team member cards here */}
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
                                    </CardContent>
                                </div>
                                <IconButton className={classes.iconButtonS} aria-label="memberIcon">
                                    <Stars className={classes.iconHoverS} color="inherit"/>
                                </IconButton>
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
                                    </CardContent>
                                </div>
                                <IconButton className={classes.iconButtonS} aria-label="memberIcon">
                                    <Stars className={classes.iconHoverS} color="inherit"/>
                                </IconButton>
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
                                            Full-Stack Web Developer
                                        </Typography>
                                    </CardContent>
                                </div>
                                <IconButton className={classes.iconButtonS} aria-label="memberIcon">
                                    <Stars className={classes.iconHoverS} color="inherit"/>
                                </IconButton>
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
                                            Full-Stack Web Developer
                                        </Typography>
                                    </CardContent>
                                </div>
                                <IconButton className={classes.iconButtonS} aria-label="memberIcon">
                                    <Stars className={classes.iconHoverS} color="inherit"/>
                                </IconButton>
                            </BusinessCardS>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    )
};