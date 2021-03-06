const initialState = {
  loginStatus: {
    loading: false,
    error: null,
    data: {},
    isLoggedIn: false
  }
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loginStatus: { loading: true, error: null, data: null, isLoggedIn: false },
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginStatus: {
          loading: false,
          error: null,
          data: action.payload,
          isLoggedIn: true
        },
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginStatus: { loading: false, error: action.payload, data: null },
      };
    default:
      return state;
  }
};

export default login;
//reducer가 dispatch(action, action creator, payload) 중 action creator 임!
