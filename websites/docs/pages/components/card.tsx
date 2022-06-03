import { ErrorButton, SuccessButton } from '@nextail/core/Button';
import Card, {
  ImageBottomCard,
  ImageCard,
  ImageLeftCard,
  ImageRightCard,
  SimpleCard,
} from '@nextail/core/Card';
import CodeSnippet from '@nextail/core/CodeSnippet';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const CardPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Cards</h1>
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
                      <h2>Cards</h2>
                      <p>
                        Cards allow content to be contained and easily
                        identified.
                      </p>

                      <h3 className="pt-4">Basic Cards</h3>
                      <p>
                        Basic cards a simple container for Information to be
                        displayed in. It and its content can be configured.
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
                                    <div className="flex flex-col gap-2 md:flex-row">
                                      <Card>Blank Ready to filled.</Card>
                                      <Card>
                                        <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900 dark:text-gray-300">
                                          Title Here
                                        </h5>
                                        <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
                                          Information would go here.
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-200">
                                          Secondary Information here.
                                        </p>
                                        <div className="float-right flex gap-2">
                                          <ErrorButton>Cancel</ErrorButton>
                                          <SuccessButton>Save</SuccessButton>
                                        </div>
                                      </Card>
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
                                    data={`<Card>Blank Ready to filled.</Card>
<Card>
  <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900 dark:text-gray-300">
    Title Here
  </h5>
  <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
    Information would go here.
  </p>
  <p className="text-xs text-gray-600 dark:text-gray-200">
    Secondary Information here.
  </p>
  <div className="float-right flex gap-2">
    <ErrorButton>Cancel</ErrorButton>
    <SuccessButton>Save</SuccessButton>
  </div>
</Card>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Simple Card</h3>
                      <p>
                        A simple card is allows for data to be easily passed and
                        represented. Takes CardData prop. Does not display an
                        image if passed.
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
                                    <div className="md:w-72">
                                      <SimpleCard
                                        title="Simple Card"
                                        info="Simple cards are responsive."
                                        secondaryInfo="Secondary Info"
                                        buttons={
                                          <>
                                            <ErrorButton>Cancel</ErrorButton>
                                            <SuccessButton>Save</SuccessButton>
                                          </>
                                        }
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
                                    data={`<SimpleCard
  title="Simple Card"
  info="Simple cards are responsive."
  secondaryInfo="Secondary Info"
  buttons={
    <>
      <ErrorButton>Cancel</ErrorButton>
      <SuccessButton>Save</SuccessButton>
    </>
  }
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Image Top Card</h3>
                      <p>
                        This card allows for data to be easily passed and
                        represented. Takes CardData prop.
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
                                      <div className="md:w-72">
                                        <ImageCard
                                          image="https://api.lorem.space/image/book"
                                          title="Image Card"
                                          info="Image card are responsive and show the image on the top of the card."
                                          secondaryInfo="Secondary Info"
                                          buttons={
                                            <>
                                              <ErrorButton>Cancel</ErrorButton>
                                              <SuccessButton>
                                                Save
                                              </SuccessButton>
                                            </>
                                          }
                                        />
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
                                    data={`<ImageCard
  image="https://api.lorem.space/image/book"
  title="Image Card"
  info="Image card are responsive and show the image on the top of the card."
  secondaryInfo="Secondary Info"
  buttons={
    <>
      <ErrorButton>Cancel</ErrorButton>
      <SuccessButton>
        Save
      </SuccessButton>
    </>
  }
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Image Bottom Card</h3>
                      <p>
                        This card allows for data to be easily passed and
                        represented. Takes CardData prop.
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
                                      <div className="md:w-72">
                                        <ImageBottomCard
                                          image="https://api.lorem.space/image/album"
                                          title="Image Bottom"
                                          info="Image bottom card are responsive."
                                          secondaryInfo="Secondary Info"
                                          buttons={
                                            <>
                                              <ErrorButton>Cancel</ErrorButton>
                                              <SuccessButton>
                                                Save
                                              </SuccessButton>
                                            </>
                                          }
                                        />
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
                                    data={`<ImageBottomCard
  image="https://api.lorem.space/image/album"
  title="Image Bottom"
  info="Image bottom card are responsive."
  secondaryInfo="Secondary Info"
  buttons={
    <>
      <ErrorButton>Cancel</ErrorButton>
      <SuccessButton>
        Save
      </SuccessButton>
    </>
  }
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Image Left Card</h3>
                      <p>
                        This card allows for data to be easily passed and
                        represented. Takes CardData prop.
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
                                    <div>
                                      <ImageLeftCard
                                        image="https://api.lorem.space/image/game"
                                        title="Image Left"
                                        info="Image left card are responsive and when seen on phone will show the image above."
                                        secondaryInfo="Secondary Info"
                                        buttons={
                                          <>
                                            <ErrorButton>Cancel</ErrorButton>
                                            <SuccessButton>Save</SuccessButton>
                                          </>
                                        }
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
                                    data={`<ImageLeftCard
  image="https://api.lorem.space/image/game"
  title="Image Left"
  info="Image left card are responsive and when seen on phone will show the image above."
  secondaryInfo="Secondary Info"
  buttons={
    <>
      <ErrorButton>Cancel</ErrorButton>
      <SuccessButton>Save</SuccessButton>
    </>
  }
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Image Right Card</h3>
                      <p>
                        This card allows for data to be easily passed and
                        represented. Takes CardData prop.
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
                                    <div>
                                      <ImageRightCard
                                        image="https://api.lorem.space/image/movie"
                                        title="Image Right"
                                        info="Image right card are responsive and when seen on phone will show the image below."
                                        secondaryInfo="Secondary Info"
                                        buttons={
                                          <>
                                            <ErrorButton>Cancel</ErrorButton>
                                            <SuccessButton>Save</SuccessButton>
                                          </>
                                        }
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
                                    data={`<ImageRightCard
  image="https://api.lorem.space/image/movie"
  title="Image Right"
  info="Image right card are responsive and when seen on phone will show the image below."
  secondaryInfo="Secondary Info"
  buttons={
    <>
      <ErrorButton>Cancel</ErrorButton>
      <SuccessButton>Save</SuccessButton>
    </>
  }
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Card</h3>
                      <p>
                        A basic card can be fully customised. It can then
                        contain any other customised data. Currently on Basic
                        card can be customised.
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
                                      <Card
                                        mainStylings={{
                                          background: {
                                            backgroundColor:
                                              'bg-emerald-500/25',
                                          },
                                          text: { textColor: 'text-green-500' },
                                          sizing: {
                                            width: 'md:w-72',
                                            height: 'md:h-72',
                                          },
                                          border: {
                                            borderColor: 'border-green-500',
                                            borderWidth: 'border-2',
                                          },
                                        }}
                                      >
                                        <h4>Customised</h4>
                                        <p className="text-white">
                                          {' '}
                                          Basic Card
                                        </p>
                                      </Card>
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
                                    data={`<Card
  mainStylings={{
    background: {
      backgroundColor:
        'bg-emerald-500/25',
    },
    text: { textColor: 'text-green-500' },
    sizing: {
      width: 'w-72',
      height: 'h-72',
    },
    border: {
      borderColor: 'border-green-500',
      borderWidth: 'border-2',
    },
  }}
>
  <h4>Customised</h4>
  <p className="text-white">
    {' '}
    Basic Card
  </p>
</Card>`}
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
                        data={`import Card, {
                          ImageBottomCard,
                          ImageCard,
                          ImageLeftCard,
                          ImageRightCard,
                          SimpleCard,
                        } from '@nextail/core/Card';`}
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
                          title: 'CardProps',
                          content: (
                            <>
                              <h2 className="py-4">CardProps</h2>
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
                                    ['titleStylings', 'TailwindStylings', 'no'],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'CardData',
                          content: (
                            <>
                              <h2 className="py-4">CardData</h2>
                              <p>Extends CardProps</p>
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
                                    ['image', 'string', 'no'],
                                    ['imageLink', 'string', 'no'],
                                    ['title', 'string', 'no'],
                                    ['info', 'string', 'no'],
                                    ['secondaryInfo', 'string', 'no'],
                                    ['buttons', 'ReactNode', 'no'],
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

export default CardPage;
