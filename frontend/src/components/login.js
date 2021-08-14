import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
//import MyTheme from './MyTheme';


const styles = theme => ({
  paper: {
   // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
   // margin: theme.spacing(1),
   // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
   // marginTop: theme.spacing(1),
  },
  submit: {
    //margin: theme.spacing(3, 0, 2),
    },
  
  });
  
// const classes = useStyles();

class LoginForm extends React.Component {
    
    

    state = {
        username: '',
        password: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };
    
    render() {
        const { classes } = this.props;
        return (
            <div >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="UserName"
                            name="username"
                            //autoComplete="username"
                            autoFocus
                            onChange={this.handle_change}
                            value={this.state.username}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handle_change}
                            value={this.state.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={e => this.props.handle_login(e, this.state)}
                        >
                            Sign In
                        </Button>
                        <div>
                        <Grid container>
                            

                            <Grid item>
                                <Link href="#" variant="body2"
                                    onClick={e => this.props.handle_signup_button(e, this.state)}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                            </Grid>
                        </div>
                    </form>
                </div>
      
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForm);

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
    