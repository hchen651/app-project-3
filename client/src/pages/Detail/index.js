import React, { useState, useEffect } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import ArrowBack from '@material-ui/icons/ArrowBack';

// custom styles
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    paper: {
        borderRadius: 0,
        border: 0,
        padding: '20px',
        boxShadow: 0, 
    },
    header: {
        marginBottom: theme.spacing(6),
    },
    textField: {
        margin: theme.spacing(1),
        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(1),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        // marginTop: theme.spacing(4),
    },
    button: {
        margin: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
    iconHover: {
        '&:hover': {
        color: red[700],
        },
        fontSize: 30,
    },

}));

// dropdown list - account
const accounts = [
    { value: 'personal', label: 'Personal' },
    { value: 'company', label: 'Company' },
    { value: 'small business', label: 'Small Business' },
];

// dropdown list - address state abbrev.
const addressStates = [
    { value: 'AL', label: 'AL' }, { value: 'AK', label: 'AK' }, { value: 'AZ', label: 'AZ' },
    { value: 'AR', label: 'AR' }, { value: 'CA', label: 'CA' }, { value: 'CO', label: 'CO' },
    { value: 'CT', label: 'CT' }, { value: 'DE', label: 'DE' }, { value: 'FL', label: 'FL' },
    { value: 'GA', label: 'GA' }, { value: 'HI', label: 'HI' }, { value: 'ID', label: 'ID' },
    { value: 'IL', label: 'IL' }, { value: 'IN', label: 'IN' }, { value: 'IA', label: 'IA' },
    { value: 'KS', label: 'KS' }, { value: 'KY', label: 'KY' }, { value: 'LA', label: 'LA' },
    { value: 'ME', label: 'ME' }, { value: 'MD', label: 'MD' }, { value: 'MA', label: 'MA' },
    { value: 'MI', label: 'MI' }, { value: 'MN', label: 'MN' }, { value: 'MS', label: 'MS' },
    { value: 'MO', label: 'MO' }, { value: 'MT', label: 'MT' }, { value: 'NE', label: 'NE' },
    { value: 'NV', label: 'NV' }, { value: 'NH', label: 'NH' }, { value: 'NJ', label: 'NJ' },
    { value: 'NM', label: 'NM' }, { value: 'NY', label: 'NY' }, { value: 'NC', label: 'NC' },
    { value: 'ND', label: 'ND' }, { value: 'OH', label: 'OH' }, { value: 'OK', label: 'OK' },
    { value: 'OR', label: 'OR' }, { value: 'PA', label: 'PA' }, { value: 'RI', label: 'RI' },
    { value: 'SC', label: 'SC' }, { value: 'SD', label: 'SD' }, { value: 'TN', label: 'TN' },
    { value: 'TX', label: 'TX' }, { value: 'UT', label: 'UT' }, { value: 'VT', label: 'VT' },
    { value: 'VA', label: 'VA' }, { value: 'WA', label: 'WA' }, { value: 'WV', label: 'WV' },
    { value: 'WI', label: 'WI' }, { value: 'WY', label: 'WY' },
];

// card detail data (need mongoDB)


// display card details
export default function Detail() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        account: 'personal',
        firstName: '',
        lastName: '',
        company: '',
        titlePosition: '',
        email: '',
        phone: '',
        website: '',
        addressStreet: '',
        addressCity: '',
        addressState: 'NY',
        addressZipcode: '',
        notes: '',
    });

    const [editState, setEditState] = useState(true);

    const toggleEdit = () => {
        if (editState == true){
            setEditState(false);
        }
        else {
            setEditState(true);
        }
    };

    const handleInputChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Container className={classes.root} component="main" maxWidth="xl">
            <Typography className={classes.header} component="h1" variant="h5" align="center" gutterBottom>
                Card Detail for: {values.firstName} {values.lastName}
            </Typography>
            <Paper>
                <Grid container>
                    <Grid item className={classes.paper} xs={12} sm={6}>
                        <form
                            className={classes.form}
                            // onSubmit={handleSubmit}
                            noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        select
                                        id="account"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.account}
                                        onChange={handleInputChange('account')}
                                        SelectProps={{
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    >
                                        {accounts.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        placeholder="First Name*"
                                        className={classes.textField}
                                        value={values.firstName}
                                        onChange={handleInputChange('firstName')}
                                        margin="dense"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        placeholder="Last Name*"
                                        className={classes.textField}
                                        value={values.lastName}
                                        onChange={handleInputChange('lastName')}
                                        margin="dense"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="company"
                                        placeholder="Company"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.company}
                                        onChange={handleInputChange('company')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="titlePosition"
                                        placeholder="Title/Position"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.titlePosition}
                                        onChange={handleInputChange('titlePosition')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="email"
                                        placeholder="Email*"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.email}
                                        onChange={handleInputChange('email')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={12}>                                    
                                    <TextField
                                        id="phone"
                                        placeholder="Phone"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.phone}
                                        onChange={handleInputChange('phone')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={12}>                                   
                                    <TextField
                                        id="website"
                                        placeholder="Website"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.website}
                                        onChange={handleInputChange('website')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="addressStreet"
                                        placeholder="Street"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.addressStreet}
                                        onChange={handleInputChange('addressStreet')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="addressCity"
                                        placeholder="City"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.addressCity}
                                        onChange={handleInputChange('addressCity')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        select
                                        id="addressState"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.addressState}
                                        onChange={handleInputChange('addressState')}
                                        SelectProps={{
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        margin="dense"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    >
                                        {addressStates.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        id="addressZipcode"
                                        placeholder="Zip Code"
                                        className={classes.textField}
                                        value={values.addressZipcode}
                                        onChange={handleInputChange('addressZipcode')}
                                        margin="dense"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="notes"
                                        placeholder="Notes"
                                        className={classes.textField}
                                        value={values.notes}
                                        onChange={handleInputChange('notes')}
                                        fullWidth
                                        multiline
                                        rows="4"
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                            </Grid>
                        </form>

                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <IconButton className={classes.button} aria-label="ArrowBack">
                                    <ArrowBack className={classes.iconHover} color="inherit"/>
                                </IconButton>
                                <IconButton className={classes.button} aria-label="Edit">
                                    <Edit className={classes.iconHover} color="inherit" onClick={() => setEditState(false)} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {/* preview component */}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}