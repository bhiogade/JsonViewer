import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import LoginForm from './login';
import './nba.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  centerBox: {
    justifyContent: "center",
    alignItems: "center"
  },box: {
    height: 50,
    display: "flex",
    border: "1px solid black",
    padding: 8
  }
  
}));

export default function Nav(props) {
    const classes = useStyles();
    const logged_out_nav = (
       ''
    );

    const logged_in_nav = (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    
            <Button color="inherit" className={`${classes.centerBox} ${classes.box}`}
              onClick={props.handle_logout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );

    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}
Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
