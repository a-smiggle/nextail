# Nextail Hooks
[![npm](https://img.shields.io/npm/v/@nextail/hooks)](https://www.npmjs.com/package/@nextail/hooks)
[![npm downloads](https://img.shields.io/npm/dw/@nextail/providers)](https://www.npmjs.com/package/@nextail/hooks)

Nextail Hooks is a collection of react hooks. **More to come.**

## Installation
Nextail Hooks is available as an [npm package](https://www.npmjs.com/package/@nextail/hooks).

```sh
// with pnpm
pnpm install @nextail/hooks

// with npm
npm install @nextail/hooks

// with yarn
yarn add @nextail/hooks
```

## Usage


### Use Location
Use Location allows access vanilla JS window.location from within you application.

Here is the app.tsx file of a Next.js project.

Example of use in a Next.Js page.

```tsx
import type { NextPage } from 'next';
import React from 'react';

import Button from '@nextail/core/Button';
import UseLocation from '@nextail/hooks/useLocation';

const Home: NextPage = () => {
  const { pathname } = UseLocation();

  return (
    <div className='w-full h-screen bg-white dark:bg-slate-300'>
      <h1 className='text-4xl text-black dark:text-slate-200'>{pathname}</h1>
    </div>
    );
};

export default Home;
```

If index page page would display '/'.