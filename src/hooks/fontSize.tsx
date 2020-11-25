import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

interface FontSizeContextData {
  fontSizeText: string;
  increaseFontSize(): void;
  decreaseFontSize(): void;
  normalizeFontSize(): void;
}

const FontSizeContext = createContext<FontSizeContextData>(
  {} as FontSizeContextData,
);

export const FontSizeProvider: React.FC = ({ children }) => {
  const [fontSize, setFontSize] = useState(2);
  const [fontSizeText, setFontSizeText] = useState('text-base');

  function increaseFontSize(): void {
    setFontSize((size) => (size < 6 ? size + 1 : size));
  }

  function decreaseFontSize(): void {
    setFontSize((size) => (size > 0 ? size - 1 : size));
  }

  function normalizeFontSize(): void {
    setFontSize(2);
  }

  useEffect(() => {
    switch (fontSize) {
      case 0:
        setFontSizeText('text-xs');
        break;
      case 1:
        setFontSizeText('text-sm');
        break;
      default:
      case 2:
        setFontSizeText('text-base');
        break;
      case 3:
        setFontSizeText('text-lg');
        break;
      case 4:
        setFontSizeText('text-xl');
        break;
      case 5:
        setFontSizeText('text-2xl');
        break;
      case 6:
        setFontSizeText('text-3xl');
        break;
    }
  }, [fontSize]);

  useHotkeys('alt+1', () => increaseFontSize());
  useHotkeys('alt+2', () => normalizeFontSize());
  useHotkeys('alt+3', () => decreaseFontSize());

  return (
    <FontSizeContext.Provider
      value={{
        fontSizeText,
        increaseFontSize,
        decreaseFontSize,
        normalizeFontSize,
      }}
    >
      <div className={fontSizeText}>{children}</div>
    </FontSizeContext.Provider>
  );
};

export function useFontSize(): FontSizeContextData {
  const context = useContext(FontSizeContext);

  return context;
}
