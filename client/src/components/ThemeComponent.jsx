//THIS IS NOT A FINAL COMPONENT
// This is what we will use in other components to make them have a dark/light mode
// when all other components have this code, we can delete this file

import { useReducer } from "react";
import { useTheme } from "../utils/themeContext";
import { TOGGLE_THEME } from "../utils/actions";

export default function COMPONENT_NAME() {
  const [state, dispatch] = useTheme();

  const themeStyles = {
    background: state.darkTheme ? "black" : "white",
    color: state.darkTheme ? "white" : "black",
  };
  return (
    <>
      <div style={themeStyles}>code code code</div>
    </>
  );
}

// TOGGLE BUTTON CODE
{
  /* <button
id="button"
// To change the theme we invoke dispatch and pass in an object containing action type and payload
onClick={() =>
  dispatch({ type: TOGGLE_THEME, payload: state.darkTheme })
}
className="btn btn-secondary"
type="button"
>
Toggle dark theme
</button> */
}
