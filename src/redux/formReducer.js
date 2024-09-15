// src/redux/formReducer.js
const initialState = {
    user: '',
    email: '',
    password: ''
  };
  
function formReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      const { user, email, password } = action.payload;
      if (password === 'mod7ReactUSIP') {
        return {
          ...state,
          user,
          email,
          password
        };
      } else {
        return state;
      }
    case 'LOGOUT':
      return initialState; // Resetea el estado a sus valores iniciales
    default:
      return state;
  }
}
  
export default formReducer;
