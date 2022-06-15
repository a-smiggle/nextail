import { CodeSnippet, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const CardPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Clip</h1>
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
                      <h2>Clip</h2>
                      <p>
                        Images can be clipped to change the shape of them. This
                        is much like the mask components but uses the CSS
                        clip-path variable.
                      </p>

                      <h3 className="pt-4">Shapes</h3>
                      <p>
                        A selection of the variation shapes that images can be
                        clipped to. Hover over to see the title.
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
                                    <div className="grid gap-2 md:grid-cols-4">
                                      <img
                                        title="triangle"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-triangle"
                                      />
                                      <img
                                        title="trapezoid"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-trapezoid"
                                      />
                                      <img
                                        title="parallel"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-parallel"
                                      />
                                      <img
                                        title="rhombus"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-rhombus"
                                      />
                                      <img
                                        title="pentagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-pentagon"
                                      />
                                      <img
                                        title="hexagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-hexagon"
                                      />
                                      <img
                                        title="heptagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-heptagon"
                                      />
                                      <img
                                        title="octagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-octagon"
                                      />
                                      <img
                                        title="nonagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-nonagon"
                                      />
                                      <img
                                        title="decagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-decagon"
                                      />
                                      <img
                                        title="bevel"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-bevel"
                                      />
                                      <img
                                        title="rabbet"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-rabbet"
                                      />
                                      <img
                                        title="left-arrow"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-left-arrow"
                                      />
                                      <img
                                        title="right-arrow"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-right-arrow"
                                      />
                                      <img
                                        title="left-chevron"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-left-chevron"
                                      />
                                      <img
                                        title="right-chevron"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-right-chevron"
                                      />
                                      <img
                                        title="star"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-right-chevron"
                                      />
                                      <img
                                        title="plus"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-plus"
                                      />
                                      <img
                                        title="minus"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-minus"
                                      />
                                      <img
                                        title="cross"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-cross"
                                      />
                                      <img
                                        title="message"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-message"
                                      />
                                      <img
                                        title="fram"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-frame"
                                      />
                                      <img
                                        title="lightning"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-lightning"
                                      />
                                      <img
                                        title="blinds"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-blinds"
                                      />
                                      <img
                                        title="circle"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-circle"
                                      />
                                      <img
                                        title="eclipse"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-eclipse"
                                      />
                                      <img
                                        title="eclipse2"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="clip-eclipse2"
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
                                    data={`<img
  title="triangle"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-triangle"
/>
<img
  title="trapezoid"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-trapezoid"
/>
<img
  title="parallel"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-parallel"
/>
<img
  title="rhombus"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-rhombus"
/>
<img
  title="pentagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-pentagon"
/>
<img
  title="hexagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-hexagon"
/>
<img
  title="heptagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-heptagon"
/>
<img
  title="octagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-octagon"
/>
<img
  title="nonagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-nonagon"
/>
<img
  title="decagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-decagon"
/>
<img
  title="bevel"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-bevel"
/>
<img
  title="rabbet"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-rabbet"
/>
<img
  title="left-arrow"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-left-arrow"
/>
<img
  title="right-arrow"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-right-arrow"
/>
<img
  title="left-chevron"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-left-chevron"
/>
<img
  title="right-chevron"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-right-chevron"
/>
<img
  title="star"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-right-chevron"
/>
<img
  title="plus"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-plus"
/>
<img
  title="minus"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-minus"
/>
<img
  title="cross"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-cross"
/>
<img
  title="message"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-message"
/>
<img
  title="fram"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-frame"
/>
<img
  title="lightning"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-lightning"
/>
<img
  title="blinds"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-blinds"
/>
<img
  title="circle"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-circle"
/>
<img
  title="eclipse"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-eclipse"
/>
<img
  title="eclipse2"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="clip-eclipse2"
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
                        No imports are required for these components. Ensure you
                        have followed these{' '}
                        <Link href="/setup/custom_css">
                          <a className="text-emerald-500 underline">
                            instructions.
                          </a>
                        </Link>
                      </p>
                    </div>
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
