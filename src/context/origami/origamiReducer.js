import { USER_LOGIN } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
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
      };
    default:
      return state;
  }
};
