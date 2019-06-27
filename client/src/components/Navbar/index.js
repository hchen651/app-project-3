// Navbar is not fixed to top. Need to read code below:
// https://material-ui.com/components/app-bar/#elevate-app-bar

import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function renderPage() {
  if (this.props.auth.isAuthenticated) {
    return (
      <List>
        <ListItemLink href="/collection">
          <ListItemText primary="Collection" />
        </ListItemLink>
        <ListItemLink href="/profile">
          <ListItemText primary="My Profile" />
        </ListItemLink>
        <ListItemLink href="/about">
          <ListItemText primary="About" />
        </ListItemLink>
        <ListItemLink href="/contact">
          <ListItemText primary="Contact Us" />
        </ListItemLink>
        <ListItemLink href="/">
          <ListItemText primary="logout" />
        </ListItemLink>
      </List>
    );
  } else {
    return (
      <List>
        <ListItemLink href="/about">
          <ListItemText primary="About" />
        </ListItemLink>
        <ListItemLink href="/signin">
          <ListItemText primary="Sign In" />
        </ListItemLink>
        <ListItemLink href="/contact">
          <ListItemText primary="Contact Us" />
        </ListItemLink>
      </List>
    );
  }
};

function Navbar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItemLink href="/">
          <ListItemText primary="Imprint" />
        </ListItemLink>
      </List>
      <Divider />
      {renderPage()}
      {/* before login Navbar. need authentication */}
      {/* <List>
        <ListItemLink href="/about">
          <ListItemText primary="About" />
        </ListItemLink>
        <ListItemLink href="/signin">
          <ListItemText primary="Sign In" />
        </ListItemLink>
        <ListItemLink href="/contact">
          <ListItemText primary="Contact Us" />
        </ListItemLink>
      </List> */}
      {/* after login Navbar */}
      {/* <Divider />
      <List>
        <ListItemLink href="/collection">
          <ListItemText primary="Collection" />
        </ListItemLink>
        <ListItemLink href="/profile">
          <ListItemText primary="My Profile" />
        </ListItemLink>
        <ListItemLink href="/">
          <ListItemText primary="logout" />
        </ListItemLink>
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Grid item xs>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer('top', true)}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" align="center" className={classes.title}>
              Imprint
            </Typography>
          </Grid>
          <Grid item xs>
          </Grid>
          <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
            {fullList('top')}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar);