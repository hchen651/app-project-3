import React from 'react';

// Material UI - style
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Material UI - icon
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/AddCircle';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Cancel from '@material-ui/icons/Cancel';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import PersonAdd from '@material-ui/icons/PersonAdd';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import VerticalAlignTop from '@material-ui/icons/VerticalAlignTop';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
    iconHover: {
        '&:hover': {
        color: red[800],
        },
        fontSize: 30,
    },
}));

export default function IconButtons() {
    const classes = useStyles();

    return (
        <div>
            <IconButton className={classes.button} aria-label="Add">
                <Add className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="ArrowBack">
                <ArrowBack className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="ArrowForward">
                <ArrowForward className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="Cancel">
                <Cancel className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="CheckCircle">
                <CheckCircle className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="Delete">
                <Delete className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="Edit">
                <Edit className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="PersonAdd">
                <PersonAdd className={classes.iconHover} color="error"/>
            </IconButton>
            <IconButton className={classes.button} aria-label="VerticalAlignTop">
                <VerticalAlignTop className={classes.iconHover} color="error"/>
            </IconButton>

            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton
                    className={classes.button}
                    aria-label="Upload picture"
                    component="span"
                    >
                    <PhotoCamera className={classes.iconHover} color="error" style={{ fontSize: 30 }}/>
                </IconButton>
            </label>
        </div>
    );
}