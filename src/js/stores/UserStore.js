import Dispatcher from '../app/AppDispatcher.js'
import GeneralStore from 'general-store'

let user = {}

let UserStore = GeneralStore.define()
  .defineGet( ()=>{
    return user;
  })
  .defineResponseTo('ADD_USER', data => {
    user = data;
  })
  .register(Dispatcher);


export default UserStore;
