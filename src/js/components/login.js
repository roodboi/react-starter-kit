import React from 'react';
import {Paper, TextField, RaisedButton} from 'material-ui'

let Login = React.createClass({ 

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
    //UserService.login(this.state.username, this.state.password).then(=> {
    //do something
    //});
    console.log(this.state)
  },

  render() {
    return(
      <Paper zDepth={1} className="login">
        <h1>LOGIN</h1>
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