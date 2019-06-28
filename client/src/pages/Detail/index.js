import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router';

// Components
import Navbar2 from "../../components/Navbar2";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';

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
    iconButton: {
        margin: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
    iconHover: {
        '&:hover': {
        color: red[500],
        },
        fontSize: 30,
    },
}));

// dropdown list - cardType
const cardTypes = [
    { value: 'Personal', label: 'Personal' },
    { value: 'Company', label: 'Company' },
    { value: 'Small Business', label: 'Small Business' },
];

// dropdown list - address state abbrev.
const states = [
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

// display card details
export default function Detail({ location }) {
    const classes = useStyles();

    const [values, setValues] = useState({
        cardType: 'personal',
        firstName: '',
        lastName: '',
        companyName: '',
        titlePosition: '',
        email: '',
        phone: '',
        website: '',
        street: '',
        city: '',
        state: 'NY',
        zipcode: '',
        notes: '',
    });

    const [editState, setEditState] = useState(true);
    const [goBackClick, setGoBackClick] = useState(false);

    const handleInputChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    useEffect(() => {
        if(location.props){
            setValues(location.props)
        }
    })

    // When ArrowBack button is clicked, set reRender state to true
    const goBack = () => {
        // console.log('clicked');
        // console.log(editState);
        setGoBackClick(true);
    }

    // When reRender is true, redirect to collection page
    if (goBackClick){
        return(
            <Redirect to={{
                pathname: '/collection',
            }} />
        )
    }

    return (
        <React.Fragment>
        <Navbar2 />
        <Container className={classes.root} component="main" maxWidth="xl">
            <Typography className={classes.header} component="h1" variant="h5" align="center" gutterBottom>
                {values.firstName} {values.lastName}
            </Typography>
            <Paper>
                <Grid container>
                    <Grid item className={classes.paper} xs={12} sm={6}>
                        <form
                            className={classes.form}
                            noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        select
                                        id="cardType"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.cardType}
                                        onChange={handleInputChange('cardType')}
                                        SelectProps={{
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    >
                                        {cardTypes.map(option => (
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
                                        id="companyName"
                                        placeholder="Company Name"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.companyName}
                                        onChange={handleInputChange('companyName')}
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
                                        id="street"
                                        placeholder="Street"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.street}
                                        onChange={handleInputChange('street')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="city"
                                        placeholder="City"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.city}
                                        onChange={handleInputChange('city')}
                                        margin="dense"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ readOnly: editState }}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        select
                                        id="state"
                                        fullWidth
                                        className={classes.textField}
                                        value={values.state}
                                        onChange={handleInputChange('state')}
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
                                        {states.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        id="zipcode"
                                        placeholder="Zip Code"
                                        className={classes.textField}
                                        value={values.zipcode}
                                        onChange={handleInputChange('zipcode')}
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
                                <Tooltip title="Go Back">
                                    <IconButton 
                                        className={classes.iconButton} 
                                        aria-label="ArrowBack"
                                        onClick={() => {goBack()}}>
                                        <ArrowBack className={classes.iconHover} color="inherit"/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit">
                                    <IconButton className={classes.iconButton} aria-label="Edit" onClick={() => setEditState(!editState)}>
                                        <Edit className={classes.iconHover} color="inherit"/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {/* preview component */}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        </React.Fragment>
    );
}



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(4),
//     outline: 'none',
//   },
// }));

// export default function SimpleModal() {
//   const [open, setOpen] = React.useState(false);
//   getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const classes = useStyles();

//   return (
//     <div>
//       <Typography gutterBottom>Click to get the full Modal experience!</Typography>
//       <Button onClick={handleOpen}>Open Modal</Button>
//       <Modal
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//         open={open}
//         onClose={handleClose}
//       >
//         <div style={modalStyle} className={classes.paper}>
//           <Typography variant="h6" id="modal-title">
//             Text in a modal
//           </Typography>
//           <Typography variant="subtitle1" id="simple-modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//           <SimpleModal />
//         </div>
//       </Modal>
//     </div>
//   );
// }
