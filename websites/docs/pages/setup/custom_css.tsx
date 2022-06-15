import { CodeSnippet, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const Install: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Custum CSS</h1>
          <div className="p-4">
            <Tabs
              mainStylings={{
                border: {
                  borderColor: 'border-emerald-200 dark:border-emerald-500',
                },
              }}
              SelectedButton={SelectedButton}
              UnselectedButton={UnSelectedButton}
              data={[
                {
                  title: 'Next.JS',
                  content: (
                    <div className="p-4">
                      <h2>Setup</h2>
                      <p>
                        Nextail Core comes with a custom CSS file that can be
                        imported to allow extra functionality. This includes the
                        mask component and clip component.
                      </p>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>1. Import</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            For Next.Js edit{' '}
                            <code className="text-red-700 dark:text-red-300">
                              pages/app.tsx
                            </code>{' '}
                            file. Add the following to that file.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`import '@nextail/core/nextail.css';`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>2. Usage</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Once installed follow the documentation for the
                            following components: clip, mask.
                          </p>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Install;
