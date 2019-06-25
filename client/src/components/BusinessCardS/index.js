import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));


export default function BusinessCardS() {
    const classes = useStyles();

    return (
        <Card>
        </Card>
    );
}