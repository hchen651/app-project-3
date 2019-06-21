import React from 'react';
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
        width: 200,
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

    return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />
        </form>
    );
}