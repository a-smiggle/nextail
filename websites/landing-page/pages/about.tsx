import type { NextPage } from 'next';
import React from 'react';

import Layout from '../components/Layout';

const About: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="h-full w-screen bg-white bg-cover bg-no-repeat dark:bg-emerald-900">
          <div className="w-full pt-6 text-center  md:pt-24">
            <div className="mx-auto h-fit w-fit p-6 shadow-lg">
              <h1 className="text-center text-4xl font-bold text-emerald-500 dark:text-emerald-100 md:text-6xl">
                About
              </h1>

              <br></br>
              <p className="pt-6 text-lg font-medium text-black dark:text-white">
                A collection of React components built with TailwindCSS. Styled
                and semistyled options ready to be customised.
              </p>
              <p className="pt-6 text-lg font-medium text-black dark:text-white">
                Created to learn TailwindCSS and UI design. Also to have an easy
                to configure and understand UI tool for my personnel use.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
