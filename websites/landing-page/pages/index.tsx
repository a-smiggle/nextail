import Button, {
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  InfoOutlineButton,
  SuccessButton,
  SuccessOutlineButton,
  WarningButton,
  WarningOutlineButton,
} from '@nextail/core/Button';
import CodeSnippet from '@nextail/core/CodeSnippet';
import type { NextPage } from 'next';
import React from 'react';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div
          className="h-full w-fit bg-white bg-cover bg-no-repeat dark:bg-emerald-900 md:w-screen"
          style={{ backgroundImage: 'url(/EmeraldDivider.svg)' }}
        >
          <div className="w-full pt-6 text-center md:pt-24">
            <div className="mx-auto h-fit w-fit rounded p-6 shadow-lg dark:bg-emerald-500/30">
              <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
                Easy to use.
              </h1>
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Easy to configure.
              </h1>
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Easy to customise.
              </h1>
              <br></br>
              <p className="pt-6 text-lg font-medium text-black">
                A collection of React components built with TailwindCSS. Styled
                and semistyled options ready to be customised.
              </p>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-3">
            <div className="col-span-1 w-full rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20">
              <h1 className="pb-6 text-2xl font-bold text-white">
                Installation
              </h1>
              <div className="flex justify-center">
                <CodeSnippet data="npm i @nextail/core @nextail/providers" />
              </div>
            </div>
            <div className="col-span-2 w-full rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20">
              <h1 className="pb-2 text-2xl font-bold text-white">
                Configuration
              </h1>
              <p className="text-lg font-medium text-black">
                Edit your tailwind.config.js file.
              </p>
              <CodeSnippet
                mainStylings={{ text: { whitespace: 'whitespace-pre' } }}
                data={`module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextail/core/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
              ></CodeSnippet>
            </div>
            <div className="col-span-1 w-full rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:col-span-3">
              <h1 className="pb-2 text-2xl font-bold text-white">Use</h1>
              <CodeSnippet
                data={`import Button, {
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  InfoOutlineButton,
  SuccessButton,
  SuccessOutlineButton,
  WarningButton,
  WarningOutlineButton,
} from '@nextail/core/Button';
import { NextPage } from 'next';
import React from 'react';

const ButtonPage: NextPage = () => {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="flex justify-between p-2">
        <Button>Hey</Button>
        <ErrorButton>Error</ErrorButton>
        <ErrorOutlineButton>Error</ErrorOutlineButton>
        <InfoButton>Info</InfoButton>
        <InfoOutlineButton>Info</InfoOutlineButton>
        <SuccessButton>Success</SuccessButton>
        <SuccessOutlineButton>Success</SuccessOutlineButton>
        <WarningButton>Warning</WarningButton>
        <WarningOutlineButton>Warning</WarningOutlineButton>
      </div>
      <div className="p-2">
        <Button
          mainStylings={{
            border: { borderRadius: 'rounded-full' },
            spacing: { padding: 'p-4', margin: '' },
            text: { lineHeight: ' ' },
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
`}
              ></CodeSnippet>
              <div className="flex justify-between p-2">
                <Button>Hey</Button>
                <ErrorButton>Error</ErrorButton>
                <ErrorOutlineButton>Error</ErrorOutlineButton>
                <InfoButton>Info</InfoButton>
                <InfoOutlineButton>Info</InfoOutlineButton>
                <SuccessButton>Success</SuccessButton>
                <SuccessOutlineButton>Success</SuccessOutlineButton>
                <WarningButton>Warning</WarningButton>
                <WarningOutlineButton>Warning</WarningOutlineButton>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
