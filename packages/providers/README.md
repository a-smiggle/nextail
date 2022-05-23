# Nextail Providers
[![npm](https://img.shields.io/npm/v/@nextail/providers)](https://www.npmjs.com/package/@nextail/providers)
[![npm downloads](https://img.shields.io/npm/dw/@nextail/providers)](https://www.npmjs.com/package/@nextail/providers)

Nextail Provides is a collection of react hooks and context providers. **More to come.**
## Installation
Nextail Providers is available as an [npm package](https://www.npmjs.com/package/@nextail/providers).

```sh
// with pnpm
pnpm install @nextail/providers

// with npm
npm install @nextail/providers

// with yarn
yarn add @nextail/providers
```

## Usage


### Theme Provider
Here is the app.tsx file of a Next.js project.
```tsx
import '../styles/globals.css';

import ThemeProvider from '@nextail/providers/ThemeProvider';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

Example to use the theme context in a Next.Js page.

```tsx
import type { NextPage } from 'next';
import React from 'react';

import Button from '@nextail/core/Button';
import { useThemeContext } from '@nextail/providers/ThemeProvider';

const Home: NextPage = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className='w-full h-screen bg-white dark:bg-slate-300'>
      <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
      <h1 className='text-4xl text-black dark:text-slate-200'>{theme}</h1>
    </div>
    );
};

export default Home;
```

### Layout Provider
Here is the app.tsx file of a Next.js project.
```tsx
import '../styles/globals.css';

import LayoutProvider from '@nextail/providers/LayoutProvider';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}

export default MyApp;
```

Example to use the theme context in a Next.Js page.

```tsx
import type { NextPage } from 'next';
import React from 'react';

import { SidebarV1 } from '@nextail/core/Sidebar';
import Button from '@nextail/core/Button';
import { useLayoutContext } from '@nextail/providers/LayoutProvider';

const Home: NextPage = () => {
  const { sidebarOpen, setSidebarOpen } = useLayoutContext();

  return (
    <>
      <div className='w-full h-screen bg-white dark:bg-slate-300'>
        <Button onClick={() => setSidebarOpen(!sidebar)}>Toggle Sidebar</Button>
        
      </div>
      <div className={`${sidebarOpen ? 'absolute top-0 left-0 ' : 'hidden'}`}>
          <SidebarV1
            data={{
              brand: (
                <div className="text-3xl font-bold uppercase text-emerald-500">
                  Nextail
                </div>
              ),
              bottom: <Button onClick={() => setSidebarOpen(!sidebar)}>Toggle Sidebar</Button>
            }}
            bottom: 
          />
        </div>
      </>
    );
};

export default Home;
```