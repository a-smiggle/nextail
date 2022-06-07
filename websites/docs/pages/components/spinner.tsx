import { CodeSnippet, Spinner, TableSimple, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const SpinnerPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Spinner</h1>
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
                      <h2>Spinner</h2>
                      <p>
                        Spinner are useful to show that something is loading or
                        running in background.
                      </p>

                      <h3 className="pt-4">Basic Spinner</h3>
                      <p>Basic spinner example.</p>
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
                                    <div className="flex justify-center">
                                      <Spinner />
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet data={`<Spinner />`} />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Closed Spinner</h3>
                      <p>Spinner with background ring shown.</p>
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
                                    <div className="flex justify-center">
                                      <Spinner closed />
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet data={`<Spinner closed />`} />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Dashed Spinner</h3>
                      <p>Spinner with spinning ring dashed.</p>
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
                                    <div className="flex justify-center">
                                      <Spinner dashed />
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet data={`<Spinner dashed />`} />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Dashed and Closed Spinner</h3>
                      <p>
                        Spinner with background ring and dashed spinning ring.
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
                                    <div className="flex justify-center">
                                      <Spinner dashed closed />
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
                                    data={`<Spinner dashed closed />`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Spinner</h3>
                      <p>
                        Spinners can be fully customised. With colour and sizing
                        examples below.
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
                                    <div className="flex justify-center gap-2">
                                      <Spinner
                                        closed
                                        dashed
                                        mainStylings={{
                                          border: {
                                            borderColor: 'border-emerald-500',
                                            borderWidth: 'border-2',
                                          },
                                        }}
                                        closedStylings={{
                                          border: {
                                            borderWidth: 'border-2',
                                          },
                                        }}
                                      />
                                      <Spinner
                                        closed
                                        dashed
                                        closedStylings={{
                                          sizing: {
                                            height: 'h-24',
                                            width: 'w-24',
                                          },
                                        }}
                                        mainStylings={{
                                          border: {
                                            borderColor: 'border-emerald-500',
                                            borderWidth: 'border-y-2',
                                          },
                                          sizing: {
                                            height: 'h-24',
                                            width: 'w-24',
                                          },
                                        }}
                                      />
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
                                    data={`<Spinner
  closed
  dashed
  mainStylings={{
    border: {
      borderColor: 'border-emerald-500',
      borderWidth: 'border-2',
    },
  }}
  closedStylings={{
    border: {
      borderWidth: 'border-2',
    },
  }}
/>
<Spinner
  closed
  dashed
  closedStylings={{
    sizing: {
      height: 'h-24',
      width: 'w-24',
    },
  }}
  mainStylings={{
    border: {
      borderColor: 'border-emerald-500',
      borderWidth: 'border-y-2',
    },
    sizing: {
      height: 'h-24',
      width: 'w-24',
    },
  }}
/>`}
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
                      </p>

                      <CodeSnippet
                        data={`import Spinner from '@nextail/core/Spinner';`}
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
                          title: 'SpinnerProps',
                          content: (
                            <>
                              <h2 className="py-4">SpinnerProps</h2>
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
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    [
                                      'closedStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                    ['closed', 'boolean', 'no'],
                                    ['dashed', 'boolean', 'no'],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'AccordionData',
                          content: (
                            <>
                              <h2 className="py-4">AccordionData</h2>
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
                                    ['title', 'string', 'yes'],
                                    ['content', 'ReactNode', 'yes'],
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

export default SpinnerPage;
