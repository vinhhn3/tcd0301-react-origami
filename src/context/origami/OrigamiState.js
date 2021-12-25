import axios from "axios";
import { useReducer } from "react";
import { USER_LOGIN } from "../types";
import OrigamiContext from "./origamiContext";
import OrigamiReducer from "./origamiReducer";

const OrigamiState = (props) => {
  const initialState = {
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

  const [state, dispatch] = useReducer(OrigamiReducer, initialState);

  const loginUser = async (login) => {
    var response = await axios.post(
      "http://localhost:9999/api/user/login",
      login,
      { withCredentials: true }
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: USER_LOGIN });
    }
  };

  const registerUser = async (register) => {
    // Register new user
    var response = await axios.post(
      "http://localhost:9999/api/user/register",
      register,
      { withCredentials: true }
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: USER_LOGIN,
      });
    }
  };

  return (
    <OrigamiContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        linkItems: state.linkItems,
        loginUser,
        registerUser,
      }}
    >
      {props.children}
    </OrigamiContext.Provider>
  );
};

export default OrigamiState;
