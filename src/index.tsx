import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FluentProvider, teamsLightTheme, teamsDarkTheme, tokens, makeStyles } from '@fluentui/react-components';
import Header from './Modules/Header.tsx';

// Define custom styles
const useStyles = makeStyles({
  appContainer: {
    height: '100vh',
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check device's preferred color scheme on initial load
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches); // Update theme if system changes
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle between light and dark themes manually
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const styles = useStyles();

  return (
    <FluentProvider theme={isDarkMode ? teamsDarkTheme : teamsLightTheme}>
      <div className={styles.appContainer}>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> {/* Pass props to Header */}
        <App />
      </div>
    </FluentProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Index />);
