import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider(props) {
  const darkTheme = false;
  const [state, dispatch] = useReducer(reducer, { darkTheme });

  return <ThemeContext.Provider value={[state, dispatch]} {...props} />;
}
