# Nextail Core

[![npm](https://img.shields.io/npm/v/@nextail/core)](https://www.npmjs.com/package/@nextail/core)
[![npm downloads](https://img.shields.io/npm/dw/@nextail/core)](https://www.npmjs.com/package/@nextail/core)

Nextail Core provides a collection of ready to use React Components.
# Installation
Nextail Core is available as an [npm package](https://www.npmjs.com/package/@nextail/core).

```sh
// with pnpm
pnpm install @nextail/core

// with npm
npm install @nextail/core

// with yarn
yarn add @nextail/core
```

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