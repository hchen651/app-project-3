import React from 'react';
import "./style.css";

// Material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 600,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

export default function TextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        companyName: '',
        position: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        profile: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="standard-required"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
            />
            <TextField
                id="standard-uncontrolled"
                label="Company Name"
                className={classes.textField}
                value={values.companyName}
                onChange={handleChange('companyName')}
                margin="normal"
            />
            <TextField
                id="standard-uncontrolled"
                label="Title/Position"
                className={classes.textField}
                value={values.position}
                onChange={handleChange('position')}
                margin="normal"
            />
        </form>
    );
}