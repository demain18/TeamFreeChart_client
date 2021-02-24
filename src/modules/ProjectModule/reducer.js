const initialState = {
  project: {
    loading: false,
    error: null,
    data: {},
    isSuccess: false
  }
};
const project = (state = initialState, action) => {
  switch (action.type) {
    case 'WRITE_REQUEST':
      return {
        ...state,
        project: { loading: true, error: null, data: null },
      };
    case 'PROJECT_SUCCESS':
      return {
        ...state,
        project: {
          loading: false,
          error: null,
          data: action.payload,
          isSuccess: true
        },
      };
    case 'PROJECT_ERROR':
      return {
        ...state,
        project: { loading: false, error: action.payload, data: null },
      };
    default:
      return state;
  }
};

export default project;
//reducer가 dispatch(action, action creator, payload) 중 action creator 임!
