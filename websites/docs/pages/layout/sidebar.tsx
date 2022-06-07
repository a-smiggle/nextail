import { CodeSnippet, SidebarV1, TableSimple, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';
import { MENU } from 'websites/docs/menu';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const SidebarPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Sidebars</h1>
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
                      <h2>Sidebars</h2>
                      <p>
                        Sidebars are useful when displaying a larger list of
                        menu items. Also very useful on mobile displays.
                      </p>

                      <h3 className="pt-4">SidebarV1 (Sidebar)</h3>
                      <p>
                        Allows branding, menu data and a footer to be displayed.
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
                                      <SidebarV1
                                        data={{
                                          brand: (
                                            <div className="text-3xl font-bold uppercase text-emerald-500">
                                              Nextail
                                            </div>
                                          ),
                                          menu: MENU,
                                          bottom: (
                                            <div className="flex justify-center text-3xl font-bold uppercase text-emerald-500">
                                              Nextail
                                            </div>
                                          ),
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
                                    data={`<SidebarV1
  data={{
    brand: (
      <div className="text-3xl font-bold uppercase text-emerald-500">
        Nextail
      </div>
    ),
    menu: MENU,
    bottom: (
      <div className="flex justify-center text-3xl font-bold uppercase text-emerald-500">
        Nextail
      </div>
    ),
  }}
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">SidebarV1 - Customised</h3>
                      <p>Customised version of SidebarV1.</p>
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
                                      <SidebarV1
                                        mainStylings={{
                                          background: {
                                            backgroundColor:
                                              'bg-emerald-200/25',
                                          },
                                        }}
                                        menuStylings={{
                                          text: {
                                            textColor: 'text-orange-300',
                                          },
                                        }}
                                        menuActiveStylings={{
                                          text: {
                                            textColor: 'text-orange-500',
                                          },
                                        }}
                                        data={{
                                          brand: (
                                            <div className="text-3xl font-bold uppercase text-emerald-500">
                                              Nextail
                                            </div>
                                          ),
                                          menu: MENU,
                                          bottom: (
                                            <div className="flex justify-center text-3xl font-bold uppercase text-emerald-500">
                                              Nextail
                                            </div>
                                          ),
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
                                    data={`<SidebarV1
  mainStylings={{
    background: {
      backgroundColor:
        'bg-emerald-200/25',
    },
  }}
  menuStylings={{
    text: {
      textColor: 'text-orange-300',
    },
  }}
  menuActiveStylings={{
    text: {
      textColor: 'text-orange-500',
    },
  }}
  data={{
    brand: (
      <div className="text-3xl font-bold uppercase text-emerald-500">
        Nextail
      </div>
    ),
    menu: MENU,
    bottom: (
      <div className="flex justify-center text-3xl font-bold uppercase text-emerald-500">
        Nextail
      </div>
    ),
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
                        Import the required ones that you need.
                      </p>

                      <CodeSnippet
                        data={`import { Sidebar, SidebarV1 } from '@nextail/core';
//or
import Sidebar, { SidebarV1 } from '@nextail/core/Sidebar';`}
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
                          title: 'SidebarProps',
                          content: (
                            <>
                              <h2 className="py-4">SidebarProps</h2>
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
                                    ['data', 'SidebarData', 'yes'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    ['menuStylings', 'TailwindStylings', 'no'],
                                    [
                                      'menuActiveStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                    [
                                      'toggle',
                                      'Dispatch<SetStateAction<boolean>>',
                                      'no',
                                    ],
                                    ['open', 'boolean', 'no'],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'SidebarData',
                          content: (
                            <>
                              <h2 className="py-4">SidebarData</h2>
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
                                    ['brand', 'ReactNode', 'no'],
                                    ['menu', 'MenuData[]', 'yes'],
                                    ['bottom', 'ReactNode', 'no'],
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

export default SidebarPage;
