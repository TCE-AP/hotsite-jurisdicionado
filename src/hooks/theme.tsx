import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

interface ThemeContextData {
  theme: string;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const mode = localStorage.getItem('@PortalTCEJuris:theme');
    if (mode) {
      return mode;
    }
    localStorage.setItem('@PortalTCEJuris:theme', 'light');
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    theme && localStorage.setItem('@PortalTCEJuris:theme', theme);
  }, [theme]);

  useHotkeys('alt+4', () => toggleTheme());

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
