import React from 'react';
import UserActions from '../actions/UserActions.js';
import GeneralStore from 'general-store'
import UserStore from '../stores/UserStore.js'

import {Paper, TextField, RaisedButton} from 'material-ui'

let Login = React.createClass({

  mixins: [
    GeneralStore.StoreDependencyMixin({
      user: UserStore
    })
  ],

  getInitialState() {
    return {
      username: '',
      password: ''
    }
  },

  updatePassword(e) {
    this.setState({
      password: e.currentTarget.value
    })
  },

  updateUsername(e) {
    this.setState({
      username: e.currentTarget.value
    })
  },

  login() {
    UserActions.login();
    debugger
    console.log(this.state)
  },

  render() {
    return(
      <Paper zDepth={1} className="login">
        <h1>LOGIN</h1>
        <strong>{this.state.user}</strong>
        <TextField
          floatingLabelText="Username" className="login-input" onChange={this.updateUsername}/>
        <TextField
          floatingLabelText="Password" className="login-input" onChange={this.updatePassword} />

        <RaisedButton label="LOGIN" primary={true} className="login-button" onClick={this.login}/>

      </Paper>
    );
  }
});

export default Login;
