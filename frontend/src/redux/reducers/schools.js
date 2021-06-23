const initialState = {
  requestState: 'LOADING',
  schools: [],
};

function schools(state = initialState, action) {
  switch (action.type) {
    case 'ERROR':
      return { ...state, requestState: 'ERROR' };
    case 'GET_ALL_SCHOOLS':
      return { ...state, schools: [...state.schools] };
    default:
      return state;
  }
}

export default schools;
