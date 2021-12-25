import {
  GET_PRIVATE_POSTS,
  GET_PUBLIC_POSTS,
  SET_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        linkItems: [
          {
            id: 1,
            title: "Post",
            url: "/",
          },
          {
            id: 2,
            title: "Share",
            url: "/share",
          },
          {
            id: 3,
            title: "Profile",
            url: "/profile",
          },
        ],
        isLoggedIn: true,
        username: action.payload.username,
        numberOfPrivatePosts: action.payload.posts.length,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        linkItems: [
          {
            id: 1,
            title: "Post",
            url: "/",
          },
          {
            id: 2,
            title: "Register",
            url: "/register",
          },
          {
            id: 3,
            title: "Login",
            url: "/login",
          },
        ],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRIVATE_POSTS:
      return {
        ...state,
        privatePosts: action.payload,
        isLoading: false,
      };
    case GET_PUBLIC_POSTS:
      return {
        ...state,
        publicPosts: action.payload.reverse(),
        isLoading: false,
      };
    default:
      return state;
  }
};
