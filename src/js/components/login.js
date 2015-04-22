import React from 'react';
import UserActions from '../actions/UserActions.js';
import GeneralStore from 'general-store'
import UserStore from '../stores/UserStore.js'

import {Paper, TextField, RaisedButton, DatePicker} from 'material-ui'

let depsFromStores = {
  user: UserStore
}

let Login = React.createClass({

  mixins: [
    GeneralStore.StoreDependencyMixin(depsFromStores)
  ],

  getInitialState() {
    return {
      checkIn: '',
      checkOut: ''
    }
  },

  updateCheckOut(event, date) {
    this.setState({
      checkOut: date
    })
  },

  updateCheckIn(event, date) {
    this.setState({
      checkIn: date
    })
  },

  checkAvailability() {
    console.log(this.state)

    let {checkIn, checkOut} = this.state

    if(checkIn.length && checkOut.length){
      UserActions.login();
    }
  },

  render() {
    return(
      <Paper zDepth={1} className="login">
        <h2>Check Availability</h2>

        <DatePicker onChange={this.updateCheckIn} hintText="Check In Date" className="availability-input" />
        <DatePicker onChange={this.updateCheckOut} hintText="Check Out Date"  className="availability-input" />

        <RaisedButton label="GO" primary={true} className="availability-button" onClick={this.checkAvailability}/>

      </Paper>
    );
  }
});

export default Login;
