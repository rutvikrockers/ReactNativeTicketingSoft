export default function (state = {
    loggedIn: false,
    email: null,
    _id: null,
  
  }, {type, payload}) {
    switch (type) {
      case 'LOGIN': {
        return {
          ...state,
          ...payload,
          loggedIn: true
        };
      }
  
      case 'LOGOUT': {
        return {
          ...state,
          email: null,
          _id: null,
          loggedIn: false
        }
      }
  
  
      default: {
        return state;
      }
    }
  }
  