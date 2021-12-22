import { useReducer } from "react";
import OrigamiContext from "./origamiContext";
import OrigamiReducer from "./origamiReducer";

const OrigamiState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(OrigamiReducer, initialState);

  return (
    <OrigamiContext.Provider value={{}}>
      {props.children}
    </OrigamiContext.Provider>
  );
};

export default OrigamiState;
