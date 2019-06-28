import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

// Component
import BusinessCardS from '../../components/BusinessCardS';
import Navbar2 from '../../components/Navbar2';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';

import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/AddCircle';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import VerticalAlignTop from '@material-ui/icons/VerticalAlignTop';
import Tooltip from '@material-ui/core/Tooltip';

import axios from 'axios';

// custom styles
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(6),
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(2),
    },
    textField: {

    },
    menu: {
        width: 300,
    },
    iconButtonS: {
        margin: theme.spacing(1),
    },
    iconHoverS: {
        '&:hover': {
        color: red[500],
        },
        fontSize: 26,
    },
    iconButtonL: {
        margin: theme.spacing(2),
    },
    iconHoverL: {
        '&:hover': {
        color: red[500],
        },
        fontSize: 50,
    },
    content: {
        paddingBottom: '0',
    },
}));

// filter options
const filters = [
    {
        value: 'by date added',
        label: 'by date added',
    },
    {
        value: 'by category',
        label: 'by category',
    },
    // {
    //     value: 'by alphabetical',
    //     label: 'by alphabetical',
    // },
    // {
    //     value: 'by favorite',
    //     label: 'by favorite',
    // },
];

// all cards data (need mongoDB)
function createData( id, name, title ) {
    return { id, name, title };
}

// display all cards
function Collection() {
    const classes = useStyles();

    const [values, setValues] = useState({filter: ""});
    const [allCards, setAllCards] = useState([]);
    const [reRender, setReRender] = useState(false);
    const [detailCard, setDetailCard] = useState({});
    const [newCard, setNewCard] = useState(false);
  
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    // axios get request for a specific card's detail by id
    const viewDetail = (id) => {
        axios.get(`/api/cards/${id}`)
        .then(res => {
            setDetailCard(res.data);
            setReRender(true);
        })
        .catch(err =>
            console.log("GET error /api/cards/:id")
        );
    };

    // axios get request for all existing cards
    useEffect(() => {
        axios.get("/api/cards")
        .then(res => {
            var fetchedCards = res.data;
            setAllCards(fetchedCards);
            // console.log(fetchedCards);
        })
        .catch(err =>
            console.log("GET error /api/cards")
        );
    }, [])

    // When Add button is clicked, set newCard state to true
    const addCard = () => {
        setNewCard(true);
    }
    
    // Additional Feature: filter by
    // useEffect(() => {
    //     if (values.filter === "by alphabetical") {
    //         let newCards = [];
    //         newCards = allCards.sort((card, otherCard) => {
    //             if(card.name < otherCard.name){
    //                 return -1;
    //             }
    //         });
    //         setBizCards(newCards);
    //     }
    //     if(values.filter === "by date added"){
    //         let newCards = [];
    //         newCards = allCards.sort((card, otherCard) => {
    //             if(card.name > otherCard.name){
    //                 return -1;
    //             }
    //         });
    //         setBizCards(newCards);
    //     }  
    // }, [values.filter, allCards]);


    // When newCard, redirect to newCard page
    if (newCard){
        return(
            <Redirect to={{
                pathname: '/newcard',
            }} />
        )
    }

    // When reRender, redirect to detail page
    if(reRender){
        return(
            <Redirect to={{
                pathname: '/detail',
                props: detailCard
            }}/>
        )
    }

    return (
        <React.Fragment>
        <Navbar2 />
        <Container className={classes.paper} component="main" maxWidth="xl">
            {/* {values.filter} */}
            <Typography component="h1" variant="h5" align="center" gutterBottom>
            Collection
            </Typography>
            <Grid 
                container 
                className={classes.form} 
                spacing={2} 
                direction="row" 
                justify="center">
                <Grid item xs={9}>
                    <TextField
                        id="search"
                        label="Search"
                        type="search"
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        select
                        id="filter"
                        className={classes.textField}
                        value={values.filter}
                        onChange={handleChange('filter')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                    >
                        {filters.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {allCards.map(card => (
                    <Grid item key={card._id} xs={6} md={3}>
                        <BusinessCardS>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h6">
                                        {card.firstName}
                                    </Typography>
                                    <Typography component="h5" variant="h6">
                                        {card.lastName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {card.companyName}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton 
                                className={classes.iconButtonS} 
                                aria-label="VerticalAlignTop"
                                onClick={() => {viewDetail(card._id)}}>
                                <MoreHoriz className={classes.iconHoverS} color="inherit"/>
                            </IconButton>
                        </BusinessCardS>
                    </Grid>
                ))}
            </Grid>

            <Grid container justify="center">
                <Tooltip title="New Card">
                    <IconButton 
                        className={classes.iconButtonL} 
                        aria-label="Add"
                        onClick={() => {addCard()}}>
                        <Add className={classes.iconHoverL} color="inherit"/>
                    </IconButton>
                </Tooltip>
                {/* <IconButton className={classes.iconButtonL} aria-label="VerticalAlignTop">
                    <VerticalAlignTop className={classes.iconHoverL} color="inherit"/>
                </IconButton> */}
            </Grid>

        </Container>
        </React.Fragment>
    )
}

export default withRouter(Collection);