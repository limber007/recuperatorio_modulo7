// src/redux/dictionaryReducer.js
const initialState = {
    words: [],
  };
  
  const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WORD':
        return {
          ...state,
          words: [...state.words, action.payload],
        };
      case 'DELETE_WORD':
        return {
          ...state,
          words: state.words.filter(
            (word) =>
              word.spanish.toLowerCase() !== action.payload &&
              word.english.toLowerCase() !== action.payload &&
              word.portuguese.toLowerCase() !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default dictionaryReducer;
  