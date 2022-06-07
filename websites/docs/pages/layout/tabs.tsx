import {
  CodeSnippet,
  ErrorButton,
  ErrorOutlineButton,
  TableSimple,
  Tabs,
} from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const TabsPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Tabs</h1>
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
                      <h2>Tabs</h2>
                      <p>
                        Tabs allow the toggling between different components.
                      </p>

                      <h3 className="pt-4">Tabs</h3>
                      <p>A base tabs components ready to be customised.</p>
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
                                    <Tabs
                                      SelectedButton={ErrorButton}
                                      UnselectedButton={ErrorOutlineButton}
                                      data={[
                                        { title: 'Tab1', content: 'Tab1' },
                                        { title: 'Tab2', content: 'Tab2' },
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
                                    data={`<Tabs
  SelectedButton={ErrorButton}
  UnselectedButton={ErrorOutlineButton}
  data={[
    { title: 'Tab1', content: 'Tab1' },
    { title: 'Tab2', content: 'Tab2' },
  ]}
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Tabs</h3>
                      <p>Customised tabs and content.</p>
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
                                    <Tabs
                                      mainStylings={{
                                        border: { borderWidth: ' ' },
                                        spacing: { padding: 'pl-10' },
                                      }}
                                      SelectedButton={ErrorButton}
                                      UnselectedButton={ErrorOutlineButton}
                                      data={[
                                        {
                                          title: 'Tab1',
                                          content: (
                                            <div className="h-32 w-full rounded-2xl border-2 border-red-500 bg-slate-200/25 p-4">
                                              <h1>Tab1 Content</h1>
                                              <p>Content can go here.</p>
                                            </div>
                                          ),
                                        },
                                        {
                                          title: 'Tab2',
                                          content: (
                                            <div className="h-32 w-full rounded-2xl border-2 border-red-500 bg-slate-200/25 p-4">
                                              <h1>Tab2 Content</h1>
                                              <p>Content can go here.</p>
                                            </div>
                                          ),
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
                                    data={`<Tabs
  mainStylings={{
    border: { borderWidth: ' ' },
    spacing: { padding: 'pl-10' },
  }}
  SelectedButton={ErrorButton}
  UnselectedButton={ErrorOutlineButton}
  data={[
    {
      title: 'Tab1',
      content: (
        <div className="h-32 w-full rounded-2xl border-2 border-red-500 bg-slate-200/25 p-4">
          <h1>Tab1 Content</h1>
          <p>Content can go here.</p>
        </div>
      ),
    },
    {
      title: 'Tab2',
      content: (
        <div className="h-32 w-full rounded-2xl border-2 border-red-500 bg-slate-200/25 p-4">
          <h1>Tab2 Content</h1>
          <p>Content can go here.</p>
        </div>
      ),
    },
  ]}
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
                        Import the required ones that you need.
                      </p>

                      <CodeSnippet
                        data={`import Tabs from '@nextail/core/Tabs';
//or
import { Tabs } from '@nextail/core`}
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
                          title: 'TabsProps',
                          content: (
                            <>
                              <h2 className="py-4">TabsProps</h2>
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
                                    ['data', 'TabData[]', 'yes'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    ['SelectedButton', 'any', 'yes'],
                                    ['UnselectedButton', 'any', 'yes'],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'TabData',
                          content: (
                            <>
                              <h2 className="py-4">TabData</h2>
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

export default TabsPage;
