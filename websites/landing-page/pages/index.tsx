import { ErrorButton } from '@nextail/core/Button';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => (
  <>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <ErrorButton>Hello</ErrorButton>
  </>
);

export default Home;
