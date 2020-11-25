import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { FontSizeProvider } from './fontSize';
import { ThemeProvider } from './theme';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <FontSizeProvider>
    <ToastProvider>
      <CookiesProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CookiesProvider>
    </ToastProvider>
  </FontSizeProvider>
);

export default AppProvider;
