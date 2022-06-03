import Carousel from '@nextail/core/Carousel';
import CodeSnippet from '@nextail/core/CodeSnippet';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const CarouselPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Carousel</h1>
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
                      <h2>Carousel</h2>
                      <p>A carousel creates a slideshow of JSX Elements.</p>

                      <h3 className="pt-4">Basic Carousel</h3>
                      <p>
                        An basic example of rotating through images. By default
                        a carousel will use the default Basic Button. To ensure
                        large grey buttons are not sure buttonStylings are
                        required.
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
                                  <div className="h-72 rounded md:w-3/4">
                                    <div className="flex h-full justify-center">
                                      <Carousel
                                        timer
                                        buttonStylings={{ className: ' ' }}
                                        data={[
                                          {
                                            title: 'Image1',
                                            element: (
                                              <img
                                                className="w-full object-cover"
                                                src="https://api.lorem.space/image/house?&hash=8B7BCDC2"
                                                alt=""
                                              />
                                            ),
                                          },
                                          {
                                            title: 'Image2',
                                            element: (
                                              <img
                                                className="w-full object-cover"
                                                src="https://api.lorem.space/image/house?&hash=500B67FB"
                                                alt=""
                                              />
                                            ),
                                          },
                                          {
                                            title: 'Image3',
                                            element: (
                                              <img
                                                className="w-full object-cover"
                                                src="https://api.lorem.space/image/house?&hash=225E6693"
                                                alt=""
                                              />
                                            ),
                                          },
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
                                    data={`<Carousel
  timer
  buttonStylings={{ className: ' ' }}
  data={[
    {
      title: 'Image1',
      element: (
        <img
          className="w-full object-cover"
          src="https://api.lorem.space/image/house?&hash=8B7BCDC2"
          alt=""
        />
      ),
    },
    {
      title: 'Image2',
      element: (
        <img
          className="w-full object-cover"
          src="https://api.lorem.space/image/house?&hash=500B67FB"
          alt=""
        />
      ),
    },
    {
      title: 'Image3',
      element: (
        <img
          className="w-full object-cover"
          src="https://api.lorem.space/image/house?&hash=225E6693"
          alt=""
        />
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

                      <h3 className="pt-4">Video Accordion</h3>
                      <p>
                        Video can be used in a carousel but in the data array
                        ensure to pass video: true. This prevents all videos
                        from playing if autoplay is enabled.
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
                                  <div className="h-72 rounded md:w-3/4">
                                    <div className="flex h-full justify-center">
                                      <Carousel
                                        buttonStylings={{ className: ' ' }}
                                        data={[
                                          {
                                            title: 'Video1',
                                            video: true,
                                            element: (
                                              <iframe
                                                allow="autoplay"
                                                className="aspect-video h-full w-full"
                                                src="/videos/1.mp4?autoplay=1"
                                              ></iframe>
                                            ),
                                          },
                                          {
                                            title: 'Video2',
                                            video: true,
                                            element: (
                                              <iframe
                                                allow="autoplay"
                                                className="aspect-video h-full w-full"
                                                src="/videos/2.mp4?autoplay=1"
                                              ></iframe>
                                            ),
                                          },
                                          {
                                            title: 'Video3',
                                            video: true,
                                            element: (
                                              <iframe
                                                allow="autoplay"
                                                className="aspect-video h-full w-full"
                                                src="/videos/3.mp4?autoplay=1"
                                              ></iframe>
                                            ),
                                          },
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
                                    data={`<Carousel
    buttonStylings={{ className: ' ' }}
    data={[
    {
      title: 'Video1',
      video: true,
      element: (
        <iframe
          allow="autoplay"
          className="aspect-video h-full w-full"
          src="/videos/1.mp4?autoplay=1"
        ></iframe>
      ),
    },
    {
      title: 'Video2',
      video: true,
      element: (
        <iframe
          allow="autoplay"
          className="aspect-video h-full w-full"
          src="/videos/2.mp4?autoplay=1"
        ></iframe>
      ),
    },
    {
      title: 'Video3',
      video: true,
      element: (
        <iframe
          allow="autoplay"
          className="aspect-video h-full w-full"
          src="/videos/3.mp4?autoplay=1"
        ></iframe>
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

                      <h3 className="pt-4">Customised Carousel</h3>
                      <p>
                        The below shows how mutliple different components can be
                        customised within the Carousel Component.
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
                                    <div className="flex h-full justify-center">
                                      <Carousel
                                        timer
                                        interval={10000}
                                        fullscreen
                                        mainStylings={{
                                          transitionAnimation: {
                                            transitionDuration: 'duration-1000',
                                          },
                                        }}
                                        titleStylings={{
                                          text: { textColor: 'text-red-500' },
                                        }}
                                        descriptionStylings={{
                                          text: { textColor: 'text-red-500' },
                                        }}
                                        buttonStylings={{
                                          className:
                                            'text-red-500 border-2 border-red-500 rounded-full hover:bg-white',
                                        }}
                                        data={[
                                          {
                                            title: 'Image1',
                                            show: true,
                                            element: (
                                              <img
                                                className="w-full object-cover"
                                                src="https://api.lorem.space/image/house?&hash=8B7BCDC2"
                                                alt=""
                                              />
                                            ),
                                          },
                                          {
                                            title: 'Image2',
                                            description: 'Descitpion here.',
                                            show: true,
                                            element: (
                                              <img
                                                className="w-full object-cover"
                                                src="https://api.lorem.space/image/house?&hash=500B67FB"
                                                alt=""
                                              />
                                            ),
                                          },
                                          {
                                            title: 'Image3',
                                            element: (
                                              <img
                                                className="w-full object-cover"
                                                src="https://api.lorem.space/image/house?&hash=225E6693"
                                                alt=""
                                              />
                                            ),
                                          },
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
                                  <CodeSnippet data={`EDIT ME`} />
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
                        data={`import Carousel from '@nextail/core/Carousel';`}
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
                          title: 'CarouselProps',
                          content: (
                            <>
                              <h2 className="py-4">CarouselProps</h2>
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
                                    ['data', 'CarouselData[]', 'yes'],
                                    ['fullscreen', 'boolean', 'no'],
                                    ['timer', 'boolean', 'no'],
                                    ['interval', 'number', 'no'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    ['titleStylings', 'TailwindStylings', 'no'],
                                    [
                                      'descriptionStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                    [
                                      'buttonStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
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

export default CarouselPage;
