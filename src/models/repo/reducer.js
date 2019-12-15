import { FETCH_SUCCESS, FETCH_ERROR, CLEAR, CLOSE } from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;
    case FETCH_ERROR:
      return {};
    case CLEAR:
      return {};
    case CLOSE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
