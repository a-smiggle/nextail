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
          className="h-full w-full bg-white bg-cover bg-no-repeat dark:bg-emerald-900"
          style={{ backgroundImage: 'url(/EmeraldDivider.svg)' }}
        >
          <div className="h-screen w-full">
            <div className="flex h-screen flex-col items-center justify-center">
              <h1 className="text-center text-5xl font-bold text-white md:text-7xl">
                Easy to use.
              </h1>
              <h1 className="text-center  text-5xl font-bold text-white md:text-7xl">
                Easy to configure.
              </h1>
              <h1 className="text-center  text-5xl font-bold text-white md:text-7xl">
                Easy to customise.
              </h1>
              <br></br>
              <p className="pt-6 text-center text-xl font-medium text-white md:text-lg">
                A collection of React components built with TailwindCSS. Styled
                and semi-styled options ready to be customised.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:p-4">
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:w-full">
              <h1 className="pb-6 text-4xl font-bold text-white md:text-2xl">
                Installation
              </h1>
              <div className="flex justify-center">
                <CodeSnippet data="npm i @nextail/core @nextail/providers" />
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:col-span-2 md:w-full">
              <h1 className="pb-2 text-4xl font-bold text-white md:text-2xl">
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
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:col-span-2 md:w-full">
              <h1 className="pb-2 text-4xl font-bold text-white md:text-2xl">
                Use
              </h1>
              <p className="text-lg font-medium text-black">
                Example of Next.JS page file found in pages folder.
              </p>
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
              <div className="space-x-2 space-y-2 md:flex md:justify-between md:p-2">
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
            <div className="col-span-1 mb-4 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:col-span-1 md:mb-0 md:w-full">
              <h1 className="pb-2 text-4xl font-bold text-white md:text-2xl">
                Customise
              </h1>
              <p className="text-lg font-medium text-black">
                Easily edit individual class variables or override with complete
                control.
              </p>
              <CodeSnippet
                data={`import Button from '@nextail/core/Button
import { NextPage } from 'next';
import React from 'react';

const ButtonPage: NextPage = () => {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="flex justify-between p-2">
        <Button
        mainStylings={{
          border: { borderRadius: 'rounded-full' },
          background: { backgroundColor: 'bg-emerald-500' },
          text: { textColor: 'text-white' },
          filter: { invert: 'hover:invert' },
        }}
        >
          Hey
        </Button>
        <Button
          mainStylings={{
            className:
              'px-6 py-2 text-center uppercase leading-light font-medium text-xs shadow-md rounded-full bg-emerald-500 inline-block text-white hover:invert',
          }}
        >
          Hey
        </Button>
      </div>
    </div>
    );
  };
  
  export default ButtonPage;`}
              ></CodeSnippet>
              <div className="space-x-2 pt-2">
                <Button
                  mainStylings={{
                    border: { borderRadius: 'rounded-full' },
                    background: { backgroundColor: 'bg-emerald-500' },
                    text: { textColor: 'text-white' },
                    filter: { invert: 'hover:invert' },
                  }}
                >
                  Hey
                </Button>
                <Button
                  mainStylings={{
                    className:
                      'px-6 py-2 text-center uppercase leading-light font-medium text-xs shadow-md rounded-full bg-emerald-500 inline-block text-white hover:invert',
                  }}
                >
                  Hey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
