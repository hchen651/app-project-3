import React from 'react';

// Material UI
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    backgroundColor: '#E5E5E5',
    marginTop: 'auto',
    textAlign: 'center',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="xl">
          <Typography variant="body2">
            {'Imprint © 2019. All Rights Reserved '}
            <Link color="inherit" href="https://github.com/hchen651/app-project-3">
            <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Typography>
        </Container>
      </footer>
  );
}