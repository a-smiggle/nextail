import {
  CodeSnippet,
  ErrorProgress,
  InfoProgress,
  Progress,
  SuccessProgress,
  TableSimple,
  Tabs,
  WarningProgress,
} from '@nextail/core';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useInterval } from 'usehooks-ts';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const ProgressPage: NextPage = () => {
  const [progress, setProgress] = useState(10);
  const [successProgress, setSuccessProgress] = useState(25);
  const [warningProgress, setWarningProgress] = useState(40);
  const [errorProgress, setErrorProgress] = useState(75);
  const [infoProgress, setInfoProgress] = useState(90);

  useInterval(() => {
    let p = progress + 5;
    if (p > 100) p = 0;
    setProgress(p);
    p = successProgress + 5;
    if (p > 100) p = 0;
    setSuccessProgress(p);
    p = warningProgress + 5;
    if (p > 100) p = 0;
    setWarningProgress(p);
    p = errorProgress + 5;
    if (p > 100) p = 0;
    setErrorProgress(p);
    p = infoProgress + 5;
    if (p > 100) p = 0;
    setInfoProgress(p);
  }, 5000);

  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Progress Bar</h1>
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
                  title: 'Overview',
                  content: (
                    <div className="p-4">
                      <h2>Progress Bar</h2>
                      <p>
                        A progress bar allows the visualisation of completion
                        progress.
                      </p>

                      <h3 className="pt-4">Basic Progress</h3>
                      <p>
                        A basic progress bar shows the completion progress of
                        any task. Pass progress number to visualise.
                      </p>
                      <div className="md:w-3/4">
                        <Tabs
                          mainStylings={{
                            border: { borderWidth: ' ' },
                            spacing: { padding: 'pl-2' },
                          }}
                          SelectedButton={SelectedButton}
                          UnselectedButton={UnSelectedButton}
                          data={[
                            {
                              title: 'Preview',
                              content: (
                                <div className="flex justify-center rounded border-2 border-emerald-500 bg-emerald-200/20 py-4">
                                  <div className="rounded md:w-3/4">
                                    <div className="flex flex-col">
                                      <Progress progress={progress} />
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<Progress progress={10} />`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Progress</h3>
                      <p>
                        Pre-styled progress bar allow easy selection of progress
                        bars of different colours.
                      </p>
                      <div className="md:w-3/4">
                        <Tabs
                          mainStylings={{
                            border: { borderWidth: ' ' },
                            spacing: { padding: 'pl-2' },
                          }}
                          SelectedButton={SelectedButton}
                          UnselectedButton={UnSelectedButton}
                          data={[
                            {
                              title: 'Preview',
                              content: (
                                <div className="flex justify-center rounded border-2 border-emerald-500 bg-emerald-200/20 py-4">
                                  <div className="w-3/4 rounded">
                                    <div className="flex flex-col gap-2">
                                      <SuccessProgress
                                        progress={successProgress}
                                      />
                                      <WarningProgress
                                        progress={warningProgress}
                                      />
                                      <ErrorProgress progress={errorProgress} />
                                      <InfoProgress progress={infoProgress} />
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<SuccessProgress
                    progress={10}
                  />
                  <WarningProgress
                    progress={10}
                  />
                  <ErrorProgress progress={10} />
                  <InfoProgress progress={10} />`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Progress</h3>
                      <p>Progress bars can be fully customised.</p>
                      <div className="md:w-3/4">
                        <Tabs
                          mainStylings={{
                            border: { borderWidth: ' ' },
                            spacing: { padding: 'pl-2' },
                          }}
                          SelectedButton={SelectedButton}
                          UnselectedButton={UnSelectedButton}
                          data={[
                            {
                              title: 'Preview',
                              content: (
                                <div className="flex justify-center rounded border-2 border-emerald-500 bg-emerald-200/20 py-4">
                                  <div className="rounded md:w-3/4">
                                    <div className="flex flex-col gap-2">
                                      <Progress
                                        backgroundStylings={{
                                          background: {
                                            backgroundColor: 'bg-black/25',
                                          },
                                        }}
                                        mainStylings={{
                                          background: {
                                            backgroundColor: 'bg-orange-500',
                                          },
                                        }}
                                        progress={progress}
                                      />
                                      <div className="rounded border-2 border-green-500 bg-white p-4">
                                        <h3 className="pb-4 text-green-500">
                                          Progress - {successProgress}%
                                        </h3>
                                        <SuccessProgress
                                          backgroundStylings={{
                                            background: {
                                              backgroundColor:
                                                'bg-green-500/25',
                                            },
                                          }}
                                          progress={successProgress}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<Progress
  backgroundStylings={{
    background: {
      backgroundColor: 'bg-black/25',
    },
  }}
  mainStylings={{
    background: {
      backgroundColor: 'bg-orange-500',
    },
  }}
  progress={progress}
/>
<div className="rounded border-2 border-green-500 bg-white p-4">
  <h3 className="pb-4 text-green-500">
    Progress - {successProgress}%
  </h3>
  <SuccessProgress
    backgroundStylings={{
      background: {
        backgroundColor:
          'bg-green-500/25',
      },
    }}
    progress={successProgress}
  />
</div>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Import',
                  content: (
                    <div className="p-4">
                      <h2>Import</h2>
                      <p>
                        The available components can be imported with the below.
                        Import the required ones that you need.
                      </p>

                      <CodeSnippet
                        data={`import Progress, {
  ErrorProgress,
  InfoProgress,
  SuccessProgress,
  WarningProgress,
} from '@nextail/core/Progress';`}
                      />
                    </div>
                  ),
                },
                {
                  title: 'Props',
                  content: (
                    <Tabs
                      mainStylings={{
                        spacing: { padding: 'pt-4' },
                        border: {
                          borderColor:
                            'border-emerald-200 dark:border-emerald-500',
                        },
                      }}
                      SelectedButton={SelectedButton}
                      UnselectedButton={UnSelectedButton}
                      data={[
                        {
                          title: 'ProgressProps',
                          content: (
                            <>
                              <h2 className="py-4">ProgressProps</h2>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Required']}
                                  rows={[
                                    ['progress', 'number', 'no'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    [
                                      'backgroundStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                      ]}
                    />
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

export default ProgressPage;
