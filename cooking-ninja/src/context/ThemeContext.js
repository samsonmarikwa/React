import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  /*
  The themeReducer takes the current up-to-date state and the action object
  passed via the dispatch method call. We are able to see the action type and the 
  action payload. We should then return the object that represents the updated
  state.
  */
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
    mode: 'dark',
  });

  const changeColor = (color) => {
    /*
    dispatch method takes an object known as the dispatch action, which has two
    properties, type and payload. The type is the state change we want to make.
    The payload is any data we want to base the state change on. In this example,
    we want to pass a new color as the the state value. So calling the dispatch
    function invokes the themeReducer function because this is what is specified
    in the useReducer. The themeReducer will then make the state change based on
    the action type.
    */
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
