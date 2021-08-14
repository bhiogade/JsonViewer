import React, { Component } from 'react';
import Nav from './components/nba';
import './App.css';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import Upload from './components/uploadim';
import Display from './components/display';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      signup:false,
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          print(json)
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        console.log(json);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup_button = () =>
  {
    this.setState({
          signup:true,
        });
    }

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div className="App">
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        
        {/* {form} */}
        
        <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : ''}
        </h3>
        
          {this.state.logged_in
            ? (
              <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                <Upload />
                <Display />
                </Grid>
            )
          : this.state.signup ? <SignupForm handle_signup={this.handle_signup} />
            : <LoginForm handle_login={this.handle_login} handle_signup_button={this.handle_signup_button} />}
         
          
        </div>
      
    );
  }
}

export default App;
