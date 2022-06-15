import '../styles/globals.css';
import '@nextail/core/nextail.css';

import LayoutProvider from '@nextail/providers/LayoutProvider';
import ThemeProvider from '@nextail/providers/ThemeProvider';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default MyApp;
