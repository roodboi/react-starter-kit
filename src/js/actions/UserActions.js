import Dispatcher from '../app/AppDispatcher.js'


let UserActions = {
  login() {

    Dispatcher.dispatch({
      actionType: 'ADD_USER',
      data: {
        id: 123,
        name: 'super awesome user'
      }
    });

    return;

  }
};

export default UserActions;
