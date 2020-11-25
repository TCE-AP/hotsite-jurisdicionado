import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useCookies } from 'react-cookie';
import { useHotkeys } from 'react-hotkeys-hook';

interface ThemeContextData {
  theme: string;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [cookies, setCookie] = useCookies(['tema']);

  const [theme, setTheme] = useState(() => {
    const mode = cookies.tema;
    if (mode) {
      return mode;
    }
    setCookie('tema', 'light', {
      path: '/',
    });
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setTheme((t: string) => (t === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    theme &&
      setCookie('tema', theme, {
        path: '/',
      });
  }, [theme, setCookie]);

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
