import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const loadTheme = JSON.parse(localStorage.getItem('theme'));
  const userTheme = loadTheme === null ? { isDarkTheme: true } : loadTheme;

  const [ theme, setTheme ] = useState( {
    isDarkTheme: userTheme.isDarkTheme,
    darkTheme: {
      main: "#272727",
      sub: "#ececec"
    },
    lightTheme: {
      main: "white",
      sub: "#272727"
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (  
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
 
export default ThemeContextProvider;