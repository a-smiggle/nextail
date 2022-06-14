import {
  Button,
  CodeSnippet,
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  InfoOutlineButton,
  SuccessButton,
  SuccessOutlineButton,
  TableSimple,
  Tabs,
  WarningButton,
  WarningOutlineButton,
} from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const ButtonPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Alerts</h1>
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
                      <h2>Buttons</h2>
                      <p>
                        Buttons are important UI tools that allow for user
                        input. They can be linked to other pages or to
                        functions.
                      </p>

                      <h3 className="pt-4">Basic Button</h3>
                      <p>
                        The Basic Buttton is has very little stylings applied an
                        is ready to be customised.
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
                                      <Button>Hey</Button>
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet data={`<Button>Hey</Button>`} />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Buttons</h3>
                      <p>
                        Pre-Styled buttons provide easy to use buttons that can
                        be used on forms etc.
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
                                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                                      <SuccessButton>Success</SuccessButton>
                                      <SuccessOutlineButton>
                                        Success
                                      </SuccessOutlineButton>
                                      <WarningButton>Warning</WarningButton>
                                      <WarningOutlineButton>
                                        Warning
                                      </WarningOutlineButton>
                                      <ErrorButton>Error</ErrorButton>
                                      <ErrorOutlineButton>
                                        Error
                                      </ErrorOutlineButton>
                                      <InfoButton>Info</InfoButton>
                                      <InfoOutlineButton>
                                        Info
                                      </InfoOutlineButton>
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
                                    data={`<SuccessButton>Success</SuccessButton>
                                      <SuccessOutlineButton>
                                        Success
                                      </SuccessOutlineButton>
                                      <WarningButton>Warning</WarningButton>
                                      <WarningOutlineButton>
                                        Warning
                                      </WarningOutlineButton>
                                      <ErrorButton>Error</ErrorButton>
                                      <ErrorOutlineButton>
                                        Error
                                      </ErrorOutlineButton>
                                      <InfoButton>Info</InfoButton>
                                      <InfoOutlineButton>
                                        Info
                                      </InfoOutlineButton>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Buttons</h3>
                      <p>
                        Both the standard Button component and the Pre-Styled
                        ones can be customised. Icons can be inserted instead of
                        text and styling can be modified.
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
                                    <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                                      <Button
                                        mainStylings={{
                                          background: {
                                            backgroundColor: 'bg-red-500/25',
                                          },
                                          border: {
                                            borderRadius: 'rounded-full',
                                          },
                                          spacing: { padding: 'p-2' },
                                        }}
                                      >
                                        Hey
                                      </Button>
                                      <Button
                                        mainStylings={{
                                          className:
                                            'hover:text-red-500 hover:bg-white rounded-full hover:border-2 hover:border-red-500',
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className={`h-6 w-6`}
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                          />
                                        </svg>
                                      </Button>
                                      <SuccessButton
                                        mainStylings={{
                                          border: {
                                            borderWidth: 'border-2',
                                            borderColor:
                                              'border-green-500 hover:border-red-500',
                                          },
                                        }}
                                      >
                                        Hey
                                      </SuccessButton>
                                      <SuccessButton
                                        mainStylings={{
                                          text: {
                                            textColor:
                                              'text-white hover:text-red-500',
                                          },
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className={`h-6 w-6`}
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                          />
                                        </svg>
                                      </SuccessButton>
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
                                    data={`<Button
  mainStylings={{
    background: {
      backgroundColor: 'bg-red-500/25',
    },
    border: {
      borderRadius: 'rounded-full',
    },
    spacing: { padding: 'p-2' },
  }}
>
  Hey
</Button>
<Button
  mainStylings={{
    className:
      'hover:text-red-500 hover:bg-white rounded-full hover:border-2 hover:border-red-500',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={'h-6 w-6'}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</Button>
<SuccessButton
  mainStylings={{
    border: {
      borderWidth: 'border-2',
      borderColor:
        'border-green-500 hover:border-red-500',
    },
  }}
>
  Hey
</SuccessButton>
<SuccessButton
  mainStylings={{
    text: {
      textColor:
        'text-white hover:text-red-500',
    },
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={'h-6 w-6'}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</SuccessButton>`}
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
                        data={`import Button, {
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  InfoOutlineButton,
  SuccessButton,
  SuccessOutlineButton,
  WarningButton,
  WarningOutlineButton,
} from '@nextail/core/Button';`}
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
                          title: 'ButtonProps',
                          content: (
                            <>
                              <h2 className="py-4">ButtonProps</h2>
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
                                    ['onClick', 'MouseEventHandler', 'no'],
                                    ['disabled', 'boolean', 'no'],
                                    ['link', 'string', 'no'],
                                    ['type', 'button | submit | reset', 'no'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    ['title', 'string', 'no'],
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

export default ButtonPage;
