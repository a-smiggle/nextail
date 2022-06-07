import {
  Button,
  CodeSnippet,
  Drawer,
  ErrorButton,
  ImageBottomCard,
  ImageCard,
  TableSimple,
  Tabs,
} from '@nextail/core';
import type { NextPage } from 'next';
import React, { useState } from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const DrawerPage: NextPage = () => {
  const [leftDrawer, setLeftDrawer] = useState(false);
  const [rightDrawer, setRightDrawer] = useState(false);
  const [topDrawer, setTopDrawer] = useState(false);
  const [bottomDrawer, setBottomDrawer] = useState(false);
  const [leftCustomDrawer, setLeftCustomDrawer] = useState(false);
  const [filledDrawer, setFilledDrawer] = useState(false);

  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Drawers</h1>
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
                      <h2>Drawers</h2>
                      <p>
                        Drawers are offscreen components that can be toggled to
                        be viewable. The can be placed on any side of the
                        screen.
                      </p>

                      <h3 className="pt-4">Basic Drawers</h3>
                      <p>
                        To set the possition of the drawer pass the position
                        prop with either: 'top', 'bottom', 'right' or 'left'.
                        Default is right if none passed.
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
                                    <div className="flex flex-col justify-between gap-2 md:flex-row">
                                      <Button
                                        onClick={() =>
                                          setLeftDrawer(!leftDrawer)
                                        }
                                      >
                                        Open Left Drawer
                                      </Button>
                                      <Button
                                        onClick={() =>
                                          setRightDrawer(!rightDrawer)
                                        }
                                      >
                                        Open Right Drawer
                                      </Button>
                                      <Button
                                        onClick={() => setTopDrawer(!topDrawer)}
                                      >
                                        Open Top Drawer
                                      </Button>
                                      <Button
                                        onClick={() =>
                                          setBottomDrawer(!bottomDrawer)
                                        }
                                      >
                                        Open Bottom Drawer
                                      </Button>
                                      <Drawer
                                        toggle={setTopDrawer}
                                        position="top"
                                        open={topDrawer}
                                      >
                                        Top Drawer
                                      </Drawer>
                                      <Drawer
                                        toggle={setBottomDrawer}
                                        position="bottom"
                                        open={bottomDrawer}
                                      >
                                        Bottom Drawer
                                      </Drawer>
                                      <Drawer
                                        toggle={setLeftDrawer}
                                        position="left"
                                        open={leftDrawer}
                                      >
                                        Left Drawer
                                      </Drawer>
                                      <Drawer
                                        toggle={setRightDrawer}
                                        position="right"
                                        open={rightDrawer}
                                      >
                                        Right Drawer
                                      </Drawer>
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
  onClick={() =>
    setLeftDrawer(!leftDrawer)
  }
>
  Open Left Drawer
</Button>
<Button
  onClick={() =>
    setRightDrawer(!rightDrawer)
  }
>
  Open Right Drawer
</Button>
<Button
  onClick={() => setTopDrawer(!topDrawer)}
>
  Open Top Drawer
</Button>
<Button
  onClick={() =>
    setBottomDrawer(!bottomDrawer)
  }
>
  Open Bottom Drawer
</Button>
<Drawer
  toggle={setTopDrawer}
  position="top"
  open={topDrawer}
>
  Top Drawer
</Drawer>
<Drawer
  toggle={setBottomDrawer}
  position="bottom"
  open={bottomDrawer}
>
  Bottom Drawer
</Drawer>
<Drawer
  toggle={setLeftDrawer}
  position="left"
  open={leftDrawer}
>
  Left Drawer
</Drawer>
<Drawer
  toggle={setRightDrawer}
  position="right"
  open={rightDrawer}
>
  Right Drawer
</Drawer>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Filled Drawer</h3>
                      <p>Example of a drawer with content.</p>
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
                                      <Button
                                        onClick={() =>
                                          setFilledDrawer(!filledDrawer)
                                        }
                                      >
                                        Open Filled Drawer
                                      </Button>
                                      <Drawer
                                        toggle={setFilledDrawer}
                                        position="left"
                                        open={filledDrawer}
                                      >
                                        <div className="relative h-screen w-full p-4">
                                          <div className="flex justify-between pb-4">
                                            <h1>Filled Drawer</h1>
                                            <ErrorButton
                                              onClick={() =>
                                                setFilledDrawer(false)
                                              }
                                            >
                                              Close
                                            </ErrorButton>
                                          </div>
                                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <ImageCard />
                                            <ImageBottomCard />
                                            <ImageCard />
                                            <ImageBottomCard />
                                          </div>
                                        </div>
                                      </Drawer>
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
  onClick={() =>
    setFilledDrawer(!filledDrawer)
  }
>
  Open Filled Drawer
</Button>
<Drawer
  toggle={setFilledDrawer}
  position="left"
  open={filledDrawer}
>
  <div className="relative h-screen w-full p-4">
    <div className="flex justify-between pb-4">
      <h1>Filled Drawer</h1>
      <ErrorButton
        onClick={() =>
          setFilledDrawer(false)
        }
      >
        Close
      </ErrorButton>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ImageCard />
      <ImageBottomCard />
      <ImageCard />
      <ImageBottomCard />
    </div>
  </div>
</Drawer>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Drawer</h3>
                      <p>
                        Drawers can be customised by changing the height and
                        width, along with the background and border.
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
                                    <div className="flex flex-col justify-center gap-2 md:flex-row">
                                      <Button
                                        onClick={() =>
                                          setLeftCustomDrawer(!leftCustomDrawer)
                                        }
                                      >
                                        Open Custom Drawer
                                      </Button>

                                      <Drawer
                                        toggle={setLeftCustomDrawer}
                                        position="right"
                                        open={leftCustomDrawer}
                                        mainStylings={{
                                          border: {
                                            borderWidth: 'border-l-4',
                                            borderColor: 'border-emerald-500',
                                          },
                                          background: {
                                            backgroundColor:
                                              'bg-emerald-300/50',
                                          },
                                        }}
                                      >
                                        <h1 className="text-white">
                                          Custom Drawer
                                        </h1>
                                      </Drawer>
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
  onClick={() =>
    setLeftCustomDrawer(!leftCustomDrawer)
  }
>
  Open Custom Drawer
</Button>

<Drawer
  toggle={setLeftCustomDrawer}
  position="right"
  open={leftCustomDrawer}
  mainStylings={{
    border: {
      borderWidth: 'border-l-4',
      borderColor: 'border-emerald-500',
    },
    background: {
      backgroundColor:
        'bg-emerald-300/50',
    },
  }}
>
  <h1 className="text-white">
    Custom Drawer
  </h1>
</Drawer>`}
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
                        data={`import { Drawer } from '@nextail/core';
//or
import Drawer from '@nextail/core/Drawer';`}
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
                          title: 'DrawerProps',
                          content: (
                            <>
                              <h2 className="py-4">DrawerProps</h2>
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
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    [
                                      'position',
                                      `'top' | 'bottom' | 'right' | 'left'`,
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

export default DrawerPage;
