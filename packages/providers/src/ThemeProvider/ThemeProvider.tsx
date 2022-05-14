import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export type CustomProps = {
  children: ReactNode;
};

export type ThemeValue = {
  theme: string;
  updateTheme: (newTheme: string) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeValue | undefined>(undefined);

export default function ThemeProvider(props: CustomProps) {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      const temp: string = storedTheme;

      setTheme(temp);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    setLoading(false);
  }, [theme]);

  const updateTheme = (newTheme: string) => {
    if (newTheme) {
      setTheme(newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, toggleTheme }}>
      {loading ? null : <div className={theme}>{props.children}</div>}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used inside ThemeContext');
  }

  return context;
}
