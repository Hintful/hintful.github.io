import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleDarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="footer-darkmode"
      // data-tip={theme.isDarkTheme ? "Light Mode" : "Dark Mode"}
      onClick={() => {
        setTheme({ ...theme, isDarkTheme: !theme.isDarkTheme });
      }}
      style={{
        color: theme.isDarkTheme ? theme.darkTheme.main : theme.lightTheme.main,
        background: theme.isDarkTheme ? theme.darkTheme.sub : theme.lightTheme.sub,
        border: theme.isDarkTheme ? `3px solid ${theme.darkTheme.main}` : `3px solid ${theme.lightTheme.main}`
      }}
    >
      <i class="fas fa-adjust fa-lg"></i>
    </div>

  );
}

export default ToggleDarkMode;