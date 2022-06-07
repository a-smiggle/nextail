import { Accordion, CodeSnippet, TableSimple, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const AccordionPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Accordion</h1>
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
                      <h2>Accordion</h2>
                      <p>
                        An Accordion is a collapsable components that allows
                        data to be closed and opened to easily manage large
                        amounts of data.{' '}
                      </p>
                      <p>
                        Accordion content can be a string or any JSX.Element. If
                        the content is is not a string make sure you style it
                        appropriatley.
                      </p>

                      <h3 className="pt-4">Basic Accordion</h3>
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
                                    <Accordion
                                      data={[
                                        {
                                          title: 'Title One',
                                          content: 'Content One',
                                        },
                                        {
                                          title: 'Title Two',
                                          content: 'Content Two',
                                        },
                                      ]}
                                    />
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<div className="md:w-3/4 rounded">
  <Accordion
    data={[
      {
        title: 'Title One',
        content: 'Content One',
      },
      {
        title: 'Title Two',
        content: 'Content Two',
      },
    ]}
  />
</div>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Flush Accordion</h3>
                      <p>
                        Passing Flush removes the outer border of the accordion.
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
                                    <Accordion
                                      flush
                                      data={[
                                        {
                                          title: 'Title One',
                                          content: 'Content One',
                                        },
                                        {
                                          title: 'Title Two',
                                          content: 'Content Two',
                                        },
                                      ]}
                                    />
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<div className="md:w-3/4 rounded bg-white dark:bg-slate-700">
  <Accordion
    flush
    data={[
      {
        title: 'Title One',
        content: 'Content One',
      },
      {
        title: 'Title Two',
        content: 'Content Two',
      },
    ]}
  />
</div>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Accordion</h3>
                      <p>
                        Accordions can be customised by modifying styling props
                        or passed content JSX.Element.
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
                                    <Accordion
                                      mainStylings={{
                                        background: {
                                          backgroundColor:
                                            'bg-white dark:bg-slate-700',
                                        },
                                        border: {
                                          borderColor: 'border-emerald-500',
                                        },
                                      }}
                                      titleActiveStylings={{
                                        text: { textColor: 'text-white' },
                                        background: {
                                          backgroundColor: 'bg-emerald-500',
                                        },
                                      }}
                                      childStylings={{
                                        text: { textColor: 'text-red-500' },
                                      }}
                                      data={[
                                        {
                                          title: 'Title One',
                                          content: (
                                            <div className="flex justify-center bg-red-500/20">
                                              Content One
                                            </div>
                                          ),
                                        },
                                        {
                                          title: 'Title Two',
                                          content: 'Content Two',
                                        },
                                      ]}
                                    />
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<div className="md:w-3/4 rounded">
  <Accordion
    mainStylings={{
      background: {
        backgroundColor:
          'bg-white dark:bg-slate-700',
      },
      border: {
        borderColor: 'border-emerald-500',
      },
    }}
    titleActiveStylings={{
      text: { textColor: 'text-white' },
      background: {
        backgroundColor: 'bg-emerald-500',
      },
    }}
    childStylings={{
      text: { textColor: 'text-red-500' },
    }}
    data={[
      {
        title: 'Title One',
        content: <div className="flex justify-center bg-red-500/20">
                  Content One
                </div>,
      },
      {
        title: 'Title Two',
        content: 'Content Two',
      },
    ]}
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
                        data={`import Accordion from '@nextail/core/Accordion';
                        `}
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
                          title: 'AccordionProps',
                          content: (
                            <>
                              <h2 className="py-4">AccordionProps</h2>
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
                                    ['data', 'AccordionData[]', 'yes'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    ['titleStylings', 'TailwindStylings', 'no'],
                                    [
                                      'titleActiveStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                    ['childStylings', 'TailwindStylings', 'no'],
                                    ['flush', 'boolean', 'no'],
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

export default AccordionPage;
