import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {

  
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    console.log('charsReducer', action);
    switch (action.type) {
      case FETCH_CHAR_START:
        return {
          ...state,
          error: '',
          fetching: true
        };
      case FETCH_CHAR_SUCCESS:
        return {
          ...state,
          characters: action.payload,
          fetching: false,
          error: ''
        };
      case FETCH_CHAR_FAILURE:
        return {
          ...state,
          error: action.payload,
          fetching: false
        };

    default:
      return state;
  }
};


