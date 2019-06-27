import React, { useState, useEffect } from 'react';

// Component
import BusinessCardS from '../../components/BusinessCardS';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


// custom styles
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(4),
    },
    textField: {

    },
    menu: {
        width: 300,
    },
    cover: {
        height: 50
    }
}));

// filter options
const filters = [
    {
        value: 'by date added',
        label: 'by date added',
    },
    {
        value: 'by alphabetical',
        label: 'by alphabetical',
    },
    {
        value: 'by category',
        label: 'by category',
    },
    {
        value: 'by favorite',
        label: 'by favorite',
    },
];

// all cards data (need mongoDB)
function createData( id, name, title ) {
    return { id, name, title };
}

let bizCards = [
    createData( "1", "Peter", "company1" ),
    createData( "2", "Rachel", "company2" ),
    createData( "3", "Adam", "company3" ),
    createData( "4", "Cathy", "company4" ),
    createData( "5", "Bob", "company5" ),
];

// display all cards
export default function Collection() {
    const classes = useStyles();

    const [values, setValues] = useState({filter: ""});
    const [allCards, setBizCards] = useState(bizCards);
  
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    useEffect(() => {
        if (values.filter === "by alphabetical") {
            let newCards = [];
            newCards = allCards.sort((card, otherCard) => {
                if(card.name < otherCard.name){
                    return -1;
                }
            });
            setBizCards(newCards);
        }
        if(values.filter === "by date added"){
            let newCards = [];
            newCards = allCards.sort((card, otherCard) => {
                if(card.name > otherCard.name){
                    return -1;
                }
            });
            setBizCards(newCards);
        }  
    }, [values.filter, allCards]);

    return (
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
                        id="outlined-search"
                        label="Search"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        id="outlined-select-filter"
                        select
                        // label="Select"
                        className={classes.textField}
                        value={values.filter}
                        onChange={handleChange('filter')}
                        SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        margin="normal"
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
                    <Grid item key={card.id} xs={6} md={3}>
                        <BusinessCardS>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {card.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {card.title}
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image=""
                                title=""
                            />
                        </BusinessCardS>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}