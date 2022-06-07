import {
  AlertContainer,
  CodeSnippet,
  ErrorButton,
  SuccessAlert,
  SuccessButton,
  TableSimple,
  Tabs,
} from '@nextail/core';
import type { NextPage } from 'next';
import React, { useState } from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const AlertContainerPage: NextPage = () => {
  const [basic, setBasic] = useState(false);
  const [noToggle, setNoToggle] = useState(false);
  const [basicBackdrop, setBasicBackdrop] = useState(false);
  const [custom, setCustom] = useState(false);

  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Alert Container</h1>
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
                      <h2>Alert Container</h2>
                      <p>
                        Nextail provides an easy to use Alert Container where
                        Alerts can be stacked.
                      </p>

                      <h3 className="pt-4">Basic Alert Container</h3>
                      <p>
                        The basic alert container is a fixed element with the
                        alerts stacked to the right of the window.
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
                                  <div className="flex justify-center rounded md:w-3/4">
                                    <SuccessButton
                                      onClick={() => setBasic(true)}
                                    >
                                      Open Me
                                    </SuccessButton>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<AlertContainer open={basic}>
  <div className="flex justify-end">
    <ErrorButton onClick={() => setBasic(false)}>Close</ErrorButton>
  </div>
  <SuccessAlert
    title="Success Alerts"
    message="Hello"
    timestamp={new Date().toUTCString()}
  />
</AlertContainer>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">
                        Basic Alert Container with backdrop
                      </h3>
                      <p>
                        showBackdrop can be passed to AlertContainer to enable
                        to background to be enabled.
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
                                  <div className="flex justify-center rounded md:w-3/4">
                                    <SuccessButton
                                      onClick={() => setBasicBackdrop(true)}
                                    >
                                      Open Me
                                    </SuccessButton>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<AlertContainer showBackdrop open={noToggle}>
  <div className="flex justify-end">
    <ErrorButton onClick={() => setNoToggle(false)}>Close</ErrorButton>
  </div>
  <SuccessAlert
    title="Success Alerts"
    message="Hello"
    timestamp={new Date().toUTCString()}
  />
</AlertContainer>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Basic Alert Container no Toggle</h3>
                      <p>
                        AlertContainer can either be configured to close if
                        clicked outside or not. To disbale it ensure that no
                        toggle is passed,
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
                                  <div className="flex justify-center rounded md:w-3/4">
                                    <SuccessButton
                                      onClick={() => setNoToggle(true)}
                                    >
                                      Open Me
                                    </SuccessButton>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<AlertContainer showBackdrop open={noToggle}>
  <div className="flex justify-end">
    <ErrorButton onClick={() => setNoToggle(false)}>Close</ErrorButton>
  </div>
  <SuccessAlert
    title="Success Alerts"
    message="Hello"
    timestamp={new Date().toUTCString()}
  />
</AlertContainer>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Alert Container</h3>
                      <p>
                        The backdrop and AlertContainer are able to be
                        customised.
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
                                  <div className="flex justify-center rounded md:w-3/4">
                                    <SuccessButton
                                      onClick={() => setCustom(true)}
                                    >
                                      Open Me
                                    </SuccessButton>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<AlertContainer
  showBackdrop
  backgroundStylings={{
    background: { backgroundColor: 'bg-emerald-500/50' },
  }}
  mainStylings={{
    layout: {
      right: ' ',
      left: 'left-10',
    },
  }}
  open={custom}
  toggle={setCustom}
>
  <SuccessAlert
    title="Success Alerts"
    message="Hello"
    timestamp={new Date().toUTCString()}
  />
</AlertContainer>`}
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
                        data={`import AlertContainer from '@nextail/core/AlertContainer';`}
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
                          title: 'AlertContainerProps',
                          content: (
                            <>
                              <h2 className="py-4">AlertContainerProps</h2>
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
                                    ['open', 'boolean', 'yes'],
                                    [
                                      'toggle',
                                      'Dispatch<SetStateAction<boolean>>',
                                      'no',
                                    ],
                                    ['showBackdrop', 'boolean', 'no'],
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
      <AlertContainer showBackdrop open={noToggle}>
        <div className="flex justify-end">
          <ErrorButton onClick={() => setNoToggle(false)}>Close</ErrorButton>
        </div>
        <SuccessAlert
          title="Success Alerts"
          message="Hello"
          timestamp={new Date().toUTCString()}
        />
      </AlertContainer>
      <AlertContainer open={basic} toggle={setBasic}>
        <SuccessAlert
          title="Success Alerts"
          message="Hello"
          timestamp={new Date().toUTCString()}
        />
      </AlertContainer>
      <AlertContainer
        showBackdrop
        open={basicBackdrop}
        toggle={setBasicBackdrop}
      >
        <SuccessAlert
          title="Success Alerts"
          message="Hello"
          timestamp={new Date().toUTCString()}
        />
      </AlertContainer>
      <AlertContainer
        showBackdrop
        backgroundStylings={{
          background: { backgroundColor: 'bg-emerald-500/50' },
        }}
        mainStylings={{
          layout: {
            right: ' ',
            left: 'left-10',
          },
        }}
        open={custom}
        toggle={setCustom}
      >
        <SuccessAlert
          title="Success Alerts"
          message="Hello"
          timestamp={new Date().toUTCString()}
        />
      </AlertContainer>
    </Layout>
  );
};

export default AlertContainerPage;
