const initialState = { posts: [], id: null, postDetail:[] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "POST_DETAIL":
      return {...state, postDetail:[action.payload]}
    case "STOREID":
      return { ...state, id: action.payload };
    case "UPDATE":
    case "LIKE":
      return {...state, posts: state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )};
    case "DELETE":
      return {...state, posts: state.posts.filter((post) => post._id !== action.payload)};
    case "CREATE_POST":
      return { ...state, posts: [...state.posts, action.payloaad] };
    case "FETCH_ALL":
      return { ...state, posts: [...action.payload] };

    default:
      return state;
  }
};
