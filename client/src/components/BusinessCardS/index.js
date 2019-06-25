import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 0,
        border: 0,
        color: 'white',
        padding: '0 30px',
        boxShadow: 0,
    },
    // card: {
    //     display: 'flex',
    // },
    // details: {
    //     display: 'flex',
    //     flexDirection: 'column',
    // },
    // content: {
    //     flex: '1 0 auto',
    // },
    // cover: {
    //     width: 151,
    // },
};

function ClassNames(props) {
    const { classes, children, className, ...other } = props;
  
    return (
        <Card className={clsx(classes.root, className)} {...other}>
            {children || 'class names'}
            {/* <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {children || 'class names'}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {children || 'class names'}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {children || 'class names'}
                </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image=""
                title=""
            /> */}
        </Card>
    );
}

ClassNames.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};
  
export default withStyles(styles)(ClassNames);

// const useStyles = makeStyles(theme => ({
//     card: {
//         display: 'flex',
//     },
//     details: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     content: {
//         flex: '1 0 auto',
//     },
//     cover: {
//         width: 151,
//     },
// }));

// export default function BussinessCardS() {
//     const classes = useStyles();

//     return (
//         <Card className={classes.card}>
//         <div className={classes.details}>
//             <CardContent className={classes.content}>
//             <Typography component="h5" variant="h5">
//                 Name
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//                 Company
//             </Typography>
//             <Typography variant="subtitle2" color="textSecondary">
//                 Title
//             </Typography>
//             </CardContent>
//         </div>
//         <CardMedia
//             className={classes.cover}
//             image="/static/images/cards/live-from-space.jpg"
//             title="QR"
//         />
//         </Card>
//     );
// }