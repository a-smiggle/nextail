# Nextail

**Nextail** focuses on being **Easy to USE**, **Easy to CONFIGURE** and **Easy to CUSTOMISE**.
Providing React Components that are styled with TailwindCSS.
Usage and examples focus on using Nextail with Next.JS.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/a-smiggle/nextail/blob/main/LICENSE)

# Packages
## Nextail Core
[![npm](https://img.shields.io/npm/v/@nextail/core)](https://www.npmjs.com/package/@nextail/core)
[![npm downloads](https://img.shields.io/npm/dw/@nextail/core)](https://www.npmjs.com/package/@nextail/core)

Nextail Core provides a collection of ready to use React Components.
### Installation
Nextail Core is available as an [npm package](https://www.npmjs.com/package/@nextail/core).

```sh
// with pnpm
pnpm install @nextail/core

// with npm
npm install @nextail/core

// with yarn
yarn add @nextail/core
```
## Nextail Providers
[![npm](https://img.shields.io/npm/v/@nextail/providers)](https://www.npmjs.com/package/@nextail/providers)
[![npm downloads](https://img.shields.io/npm/dw/@nextail/providers)](https://www.npmjs.com/package/@nextail/providers)

Nextail Provides is a collection of react hooks with context providers. **More to come.**
### Installation
Nextail Providers is available as an [npm package](https://www.npmjs.com/package/@nextail/providers).

```sh
// with pnpm
pnpm install @nextail/providers

// with npm
npm install @nextail/providers

// with yarn
yarn add @nextail/providers
```

## Nextail Hooks
[![npm](https://img.shields.io/npm/v/@nextail/hooks)](https://www.npmjs.com/package/@nextail/hooks)
[![npm downloads](https://img.shields.io/npm/dw/@nextail/hooks)](https://www.npmjs.com/package/@nextail/hooks)

Nextail Hooks is a collection of React Hooks. **More Coming**

### Installation

Nextail Hooks is available as an [npm package](https://www.npmjs.com/package/@nextail/hooks).

```sh
// with pnpm
pnpm install @nextail/hooks

// with npm
npm install @nextail/hooks

// with yarn
yarn add @nextail/hooks
```

### Usage


#### Use Location
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

# Websites
## Landing Page

[Nextail Landing Page](https://nextail-ui.vercel.app)

[Source Code](/websites/landing-page/)

## Documentation

[Nextail Documentaion](https://nextail-docs.vercel.app)

[Source Code](/websites/docs/)
# Usage
Here is an example of a Next.JS page with button.

```tsx
import type { NextPage } from 'next';
import React from 'react';

import Button from '@nextail/core/Button';

const Home: NextPage = () => {
  return <Button link='https://nextail-ui.vercel.app'>Nextail</Button>
};

export default Home;
  return (
```
# Examples

**Coming Soon**

# Contributing

**Guide Coming Soon**

# License

This project is licensed under the terms of the
[MIT license](/LICENSE).