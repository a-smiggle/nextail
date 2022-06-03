import Badge, { PillBadge, RoundedBadge } from '@nextail/core/Badge';
import CodeSnippet from '@nextail/core/CodeSnippet';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const BadgePage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Badge</h1>
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
                      <h2>Badge</h2>
                      <p>
                        A badge can be used to higlight import data such as a
                        new message or message count etc.
                      </p>

                      <h3 className="pt-4">Basic Badge</h3>
                      <p>Just pass the text required to be wrapped.</p>
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
                                      <Badge>New</Badge>
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet data={`<Badge>New</Badge>`} />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pill Badge</h3>
                      <p>Badge with fully rounded corners.</p>
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
                                      <PillBadge>New</PillBadge>
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
                                    data={`<PillBadge>New</PillBadge>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Rounded Badge</h3>
                      <p>Badge with rounded corners.</p>
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
                                      <RoundedBadge>New</RoundedBadge>
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
                                    data={`<RoundedBadge>New</RoundedBadge>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Badges</h3>
                      <p>EDIT ME</p>
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
                                    <div className="flex justify-between">
                                      <div className="flex flex-col items-center">
                                        <h4>Badge</h4>
                                        <Badge
                                          mainStylings={{
                                            background: {
                                              backgroundColor: 'bg-emerald-500',
                                            },
                                            border: {
                                              borderColor: 'border-red-500',
                                              borderWidth: 'border-2',
                                            },
                                          }}
                                        >
                                          New
                                        </Badge>
                                      </div>
                                      <div className="flex flex-col items-center">
                                        <h4>Pill Badge</h4>
                                        <PillBadge
                                          mainStylings={{
                                            background: {
                                              backgroundColor: 'bg-emerald-500',
                                            },
                                            border: {
                                              borderColor: 'border-red-500',
                                              borderWidth: 'border-2',
                                            },
                                          }}
                                        >
                                          New
                                        </PillBadge>
                                      </div>
                                      <div className="flex flex-col items-center">
                                        <h4>Rounded Badge</h4>
                                        <RoundedBadge
                                          mainStylings={{
                                            background: {
                                              backgroundColor: 'bg-emerald-500',
                                            },
                                            border: {
                                              borderColor: 'border-red-500',
                                              borderWidth: 'border-2',
                                            },
                                          }}
                                        >
                                          New
                                        </RoundedBadge>
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
                                    data={`<div className="flex flex-col items-center">
  <h4>Badge</h4>
  <Badge
    mainStylings={{
      background: {
        backgroundColor: 'bg-emerald-500',
      },
      border: {
        borderColor: 'border-red-500',
        borderWidth: 'border-2',
      },
    }}
  >
    New
  </Badge>
</div>
<div className="flex flex-col items-center">
  <h4>Pill Badge</h4>
  <PillBadge
    mainStylings={{
      background: {
        backgroundColor: 'bg-emerald-500',
      },
      border: {
        borderColor: 'border-red-500',
        borderWidth: 'border-2',
      },
    }}
  >
    New
  </PillBadge>
</div>
<div className="flex flex-col items-center">
  <h4>Rounded Badge</h4>
  <RoundedBadge
    mainStylings={{
      background: {
        backgroundColor: 'bg-emerald-500',
      },
      border: {
        borderColor: 'border-red-500',
        borderWidth: 'border-2',
      },
    }}
  >
    New
  </RoundedBadge>
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
                        data={`import Badge, { PillBadge, RoundedBadge } from '@nextail/core/Badge';                        `}
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
                                    ['mainStylings', 'TailwindStylings', 'no'],
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

export default BadgePage;
