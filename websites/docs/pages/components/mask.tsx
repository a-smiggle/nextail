import { CodeSnippet, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const CardPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Masks</h1>
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
                      <h2>Masks</h2>
                      <p>
                        Images can be masked to change the shape of them. This
                        is much like the clip components but uses the CSS
                        image-mask variable.
                      </p>

                      <h3 className="pt-4">Shapes</h3>
                      <p>
                        A selection of the variation shapes that images can be
                        masked to. Hover over to see the title.
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
                                        className="mask mask-triangle"
                                      />
                                      <img
                                        title="circle"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-circle"
                                      />
                                      <img
                                        title="eclipse"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-eclipse"
                                      />
                                      <img
                                        title="eclipse2"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-eclipse2"
                                      />
                                      <img
                                        title="pentagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-pentagon"
                                      />
                                      <img
                                        title="hexagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-hexagon"
                                      />
                                      <img
                                        title="heptagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-heptagon"
                                      />
                                      <img
                                        title="octagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-octagon"
                                      />
                                      <img
                                        title="nonagon"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-nonagon"
                                      />
                                      <img
                                        title="rhombus"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-rhombus"
                                      />
                                      <img
                                        title="star"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-star"
                                      />
                                      <img
                                        title="star6"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-star6"
                                      />
                                      <img
                                        title="star7"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-star7"
                                      />
                                      <img
                                        title="star8"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-star8"
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
  className="mask mask-triangle"
/>
<img
  title="circle"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-circle"
/>
<img
  title="eclipse"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-eclipse"
/>
<img
  title="eclipse2"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-eclipse2"
/>
<img
  title="pentagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-pentagon"
/>
<img
  title="hexagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-hexagon"
/>
<img
  title="heptagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-heptagon"
/>
<img
  title="octagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-octagon"
/>
<img
  title="nonagon"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-nonagon"
/>
<img
  title="rhombus"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-rhombus"
/>
<img
  title="star"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-star"
/>
<img
  title="star6"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-star6"
/>
<img
  title="star7"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-star7"
/>
<img
  title="star8"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-star8"
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Repeat Mask</h3>
                      <p>The mask can be repeated ocross the whole image.</p>
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
                                        title="circle"
                                        alt=""
                                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                                        className="mask mask-repeat mask-circle"
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
  title="circle"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-repeat mask-circle"
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Cover Mask</h3>
                      <p>
                        Compare how the triangle compares to the above. Changes
                        CSS mask-size to cover from contain.
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
                                        className="mask mask-cover mask-triangle"
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
  title="circle"
  alt=""
  src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
  className="mask mask-cover mask-triangle"
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
                        <a
                          className="text-emerald-500 underline"
                          href="/setup/custom_css"
                        >
                          instructions.
                        </a>
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
