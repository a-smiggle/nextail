import { CodeSnippet, TableSimple, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const TablePage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Table</h1>
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
                      <h2>Table</h2>
                      <p>
                        Tables allow list of element to be displayed in a table
                        format.
                      </p>

                      <h3 className="pt-4">Simple Table</h3>
                      <p>Simple Table example</p>
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
                                      <TableSimple
                                        titles={['row', 'data1', 'data2']}
                                        rows={[[1, 'Row1D1', 'Row1D2']]}
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
                                    data={`<TableSimple titles={['row', 'data1', 'data2']} rows={[[1, 'Row1D1', 'Row1D2']]} />`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Simple Table with borders</h3>
                      <p>Enables borders between cells.</p>
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
                                      <TableSimple
                                        border
                                        titles={['row', 'data1', 'data2']}
                                        rows={[[1, 'Row1D1', 'Row1D2']]}
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
                                    data={`<TableSimple border titles={['row', 'data1', 'data2']} rows={[[1, 'Row1D1', 'Row1D2']]} />`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Simple Table</h3>
                      <p>
                        There are multiple option when customising a simple
                        table.
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
                                    <div className="flex flex-col gap-2 md:flex-row md:justify-center">
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
                                        titles={['row', 'data1', 'data2']}
                                        rows={[
                                          [1, 'Row1D1', 'Row1D2'],
                                          [2, 'Row2D1', 'Row2D2'],
                                        ]}
                                      />
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
                                        titles={['row', 'data1', 'data2']}
                                        rows={[
                                          [1, 'Row1D1', 'Row1D2'],
                                          [2, 'Row2D1', 'Row2D2'],
                                        ]}
                                      />
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
                                        mainStylings={{
                                          background: {
                                            backgroundColor: 'bg-sky-500',
                                          },
                                        }}
                                        border
                                        titles={['row', 'data1', 'data2']}
                                        rows={[
                                          [1, 'Row1D1', 'Row1D2'],
                                          [2, 'Row2D1', 'Row2D2'],
                                        ]}
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
                                    data={`<TableSimple
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
  titles={['row', 'data1', 'data2']}
  rows={[
    [1, 'Row1D1', 'Row1D2'],
    [2, 'Row2D1', 'Row2D2'],
  ]}
/>
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
  titles={['row', 'data1', 'data2']}
  rows={[
    [1, 'Row1D1', 'Row1D2'],
    [2, 'Row2D1', 'Row2D2'],
  ]}
/>
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
  mainStylings={{
    background: {
      backgroundColor: 'bg-sky-500',
    },
  }}
  border
  titles={['row', 'data1', 'data2']}
  rows={[
    [1, 'Row1D1', 'Row1D2'],
    [2, 'Row2D1', 'Row2D2'],
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
                      </p>

                      <CodeSnippet
                        data={`import { TableSimple } from '@nextail/core/Table';`}
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
                          title: 'TableProps',
                          content: (
                            <>
                              <h2 className="py-4">TableProps</h2>
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
                                    ['titleStylings', 'TailwindStylings', 'no'],
                                    ['bodyStylings', 'TailwindStylings', 'no'],
                                    ['border', 'boolean', 'no'],
                                    ['titles', 'string[]', 'no'],
                                    ['rows', 'ReactNode[]', 'no'],
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

export default TablePage;
