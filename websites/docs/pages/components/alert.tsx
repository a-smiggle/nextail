import Alert, {
  ErrorAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
} from '@nextail/core/Alert';
import { ErrorButton, ErrorOutlineButton } from '@nextail/core/Button';
import CodeSnippet from '@nextail/core/CodeSnippet';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const AlertsPage: NextPage = () => {
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
                      <h2>Alerts</h2>
                      <p>
                        An Alert allows for feedback to be presented to a user.
                      </p>

                      <h3 className="pt-4">Basic Alert</h3>
                      <p>
                        A basic alert is a simple container that allows a child
                        to be passed into it.
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
                                <div className="rounded border-2 border-emerald-500 bg-emerald-200/20 py-4">
                                  <div className="grid w-full place-items-center px-2 md:px-0">
                                    <Alert>
                                      <div className="mx-2 flex h-full items-center justify-between text-sm">
                                        <div className="flex h-full items-center">
                                          <div>
                                            <div className="font-bold">
                                              Alert
                                            </div>
                                            <div>This is a basic alert.</div>
                                          </div>
                                        </div>
                                        <ErrorButton>Close</ErrorButton>
                                      </div>
                                    </Alert>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<Alert>
  <div className="mx-2 flex h-full items-center justify-between text-sm">
    <div className="flex h-full items-center">
      <div>
        <div className="font-bold">
          Alert
        </div>
        <div>This is a basic alert.</div>
      </div>
    </div>
    <ErrorButton>Close</ErrorButton>
  </div>
</Alert>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-styled Alerts</h3>
                      <p>
                        Pre-styled Alerts takes props of AlertData type. The
                        props passed will be auto formatted.
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
                                  <div className="grid w-full place-items-center px-2 md:grid-cols-2 md:gap-2">
                                    <SuccessAlert
                                      icon={
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                          />
                                        </svg>
                                      }
                                      title="Success Alert"
                                      message="This is a Success Alert"
                                      timestamp={new Date().toISOString()}
                                      buttons={<ErrorButton>Close</ErrorButton>}
                                    />
                                    <WarningAlert
                                      icon={
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                                          />
                                        </svg>
                                      }
                                      title="Warning Alert"
                                      message="This is a Warning Alert"
                                      timestamp={new Date().toISOString()}
                                      buttons={<ErrorButton>Close</ErrorButton>}
                                    />
                                    <ErrorAlert
                                      icon={
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                                          />
                                        </svg>
                                      }
                                      title="Error Alert"
                                      message="This is a Error Alert"
                                      timestamp={new Date().toISOString()}
                                      buttons={
                                        <ErrorOutlineButton>
                                          Close
                                        </ErrorOutlineButton>
                                      }
                                    />
                                    <InfoAlert
                                      icon={
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                      }
                                      title="Info Alert"
                                      message="This is a Info Alert"
                                      timestamp={new Date().toISOString()}
                                      buttons={<ErrorButton>Close</ErrorButton>}
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
                                    data={`<SuccessAlert
  icon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  }
  title="Success Alert"
  message="This is a Success Alert"
  timestamp={new Date().toISOString()}
  buttons={<ErrorButton>Close</ErrorButton>}
/>
<WarningAlert
  icon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
      />
    </svg>
  }
  title="Warning Alert"
  message="This is a Warning Alert"
  timestamp={new Date().toISOString()}
  buttons={<ErrorButton>Close</ErrorButton>}
/>
<ErrorAlert
  icon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
      />
    </svg>
  }
  title="Error Alert"
  message="This is a Error Alert"
  timestamp={new Date().toISOString()}
  buttons={
    <ErrorOutlineButton>
      Close
    </ErrorOutlineButton>
  }
/>
<InfoAlert
  icon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  }
  title="Info Alert"
  message="This is a Info Alert"
  timestamp={new Date().toISOString()}
  buttons={<ErrorButton>Close</ErrorButton>}
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Alerts</h3>
                      <p>Alerts can be customised by editing mainStylings.</p>
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
                                  <div className="grid w-full place-items-center px-2 md:grid-cols-2 md:gap-2">
                                    <Alert
                                      mainStylings={{
                                        background: {
                                          backgroundColor: 'bg-emerald-500',
                                        },
                                        border: {
                                          borderColor: 'border-green-900',
                                        },
                                      }}
                                    >
                                      <div className="mx-2 flex h-full items-center justify-between text-sm">
                                        <div className="flex h-full items-center">
                                          <div>
                                            <div className="font-bold">
                                              Customised Alert
                                            </div>
                                            <div>
                                              This is a customised Alert.
                                            </div>
                                          </div>
                                        </div>
                                        <ErrorButton>Close</ErrorButton>
                                      </div>
                                    </Alert>
                                    <SuccessAlert
                                      buttons={<ErrorButton>Close</ErrorButton>}
                                      title="Customised Alert"
                                      message="This is a customised SuccessAlert"
                                      mainStylings={{
                                        className:
                                          'overflow-auto relative m-2 w-full max-w-sm h-16 text-black dark:text-slate-300 bg-emerald-500 rounded-md border-l-4 border-green-900 shadow-lg',
                                      }}
                                    ></SuccessAlert>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<Alert
  mainStylings={{
    background: {
      backgroundColor: 'bg-emerald-500',
    },
    border: {
      borderColor: 'border-green-900',
    },
  }}
>
  <div className="mx-2 flex h-full items-center justify-between text-sm">
    <div className="flex h-full items-center">
      <div>
        <div className="font-bold">
          Customised Alert
        </div>
        <div>
          This is a customised alert.
        </div>
      </div>
    </div>
    <ErrorButton>Close</ErrorButton>
  </div>
</Alert>
<SuccessAlert
  buttons={<ErrorButton>Close</ErrorButton>}
  title="Customised Alert"
  message="This is a customised SuccessAlert"
  mainStylings={{
    className:
      'overflow-auto relative m-2 w-full max-w-sm h-16 text-black dark:text-slate-300 bg-emerald-500 rounded-md border-l-4 border-green-900 shadow-lg',
  }}
></SuccessAlert>`}
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
                        data={`import Alert, {
  ErrorAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
} from '@nextail/core/Alert';`}
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
                          title: 'AlertProps',
                          content: (
                            <>
                              <h2 className="py-4">AlertProps</h2>
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
                        {
                          title: 'AlertData',
                          content: (
                            <>
                              <h2 className="py-4">AlertData</h2>
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
                                    ['message', 'string', 'yes'],
                                    ['button', 'ReactNode', 'no'],
                                    ['icon', 'ReactNode', 'no'],
                                    ['timestamp', 'string', 'no'],
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

export default AlertsPage;
