import Avatar from '@nextail/core/Avatar';
import CodeSnippet from '@nextail/core/CodeSnippet';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const AvatarPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Avatars</h1>
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
                      <h2>Avatars</h2>
                      <p>
                        Avatars can be used to show a thumbnail of a user. They
                        can also be passed into
                      </p>

                      <h3 className="pt-4">Basic Avatar</h3>
                      <p>Below is a basic avatar with the image rounded.</p>
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
                                      <Avatar>
                                        <img
                                          className="mx-auto h-20 w-20 rounded-full object-cover"
                                          alt="avatar"
                                          src="https://api.lorem.space/image/face?w=150&h=150"
                                        />
                                      </Avatar>
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
                                    data={`<Avatar>
    <img
      className="mx-auto h-20 w-20 rounded-full object-cover"
      alt="avatar"
      src="https://api.lorem.space/image/face?w=150&h=150"
    />
</Avatar>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Avatar with title</h3>
                      <p>
                        Below is a basic avatar with a title passed. Is useful
                        to pass the users name.
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
                                      <Avatar title="Barry White">
                                        <img
                                          className="mx-auto h-20 w-20 rounded-full object-cover"
                                          alt="avatar"
                                          src="https://api.lorem.space/image/face?w=150&h=150"
                                        />
                                      </Avatar>
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
                                    data={`<Avatar title="Barry White">
    <img
      className="mx-auto h-20 w-20 rounded-full object-cover"
      alt="avatar"
      src="https://api.lorem.space/image/face?w=150&h=150"
    />
</Avatar>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Avatar with Status</h3>
                      <p>
                        Avatars can be shown with Online, Offline or Away
                        statuses. Pass the status props to enable them.
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
                                      <Avatar status="online">
                                        <img
                                          className="mx-auto h-20 w-20 rounded-full object-cover"
                                          alt="avatar"
                                          src="https://api.lorem.space/image/face?w=150&h=150"
                                        />
                                      </Avatar>
                                      <Avatar status="offline">
                                        <img
                                          className="mx-auto h-20 w-20 rounded-full object-cover"
                                          alt="avatar"
                                          src="https://api.lorem.space/image/face?w=150&h=150"
                                        />
                                      </Avatar>
                                      <Avatar status="away">
                                        <img
                                          className="mx-auto h-20 w-20 rounded-full object-cover"
                                          alt="avatar"
                                          src="https://api.lorem.space/image/face?w=150&h=150"
                                        />
                                      </Avatar>
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
                                    data={`<Avatar status="online">
    <img
      className="mx-auto h-20 w-20 rounded-full object-cover"
      alt="avatar"
      src="https://api.lorem.space/image/face?w=150&h=150"
    />
</Avatar>
<Avatar status="offline">
    <img
      className="mx-auto h-20 w-20 rounded-full object-cover"
      alt="avatar"
      src="https://api.lorem.space/image/face?w=150&h=150"
    />
</Avatar>
<Avatar status="away">
    <img
      className="mx-auto h-20 w-20 rounded-full object-cover"
      alt="avatar"
      src="https://api.lorem.space/image/face?w=150&h=150"
    />
</Avatar>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Avatar with zoom</h3>
                      <p>Pass animateZoom to enable hover affect.</p>
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
                                      <Avatar animateZoom>
                                        <img
                                          className="mx-auto h-20 w-20 rounded-full object-cover"
                                          alt="avatar"
                                          src="https://api.lorem.space/image/face?w=150&h=150"
                                        />
                                      </Avatar>
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
                                    data={`<Avatar animateZoom>
    <img
      className="mx-auto h-20 w-20 rounded-full object-cover"
      alt="avatar"
      src="https://api.lorem.space/image/face?w=150&h=150"
    />
</Avatar>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Square Avatar</h3>
                      <p>
                        To adjust the shap eof the avatar adjust border radius
                        of the image. For example the below has a border radius
                        of rounded-md.
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
                                      <Avatar animateZoom>
                                        <img
                                          className="mx-auto h-20 w-20 rounded-md object-cover"
                                          alt="avatar"
                                          src="https://api.lorem.space/image/face?w=150&h=150"
                                        />
                                      </Avatar>
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
                                    data={`<Avatar animateZoom>
    <img
      className="mx-auto h-20 w-20 rounded-md object-cover"
      alt="avatar"
      src="https://api.lorem.space/image/face?w=150&h=150"
    />
</Avatar>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Placeholder Avatar</h3>
                      <p>
                        Placeholder act as he image when none is passed. For
                        example pass placeHolder={`'AS'`}
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
                                      <Avatar
                                        animateZoom
                                        placeholder="AS"
                                      ></Avatar>
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
                                    data={` <Avatar
  animateZoom
  placeholder="AS"
></Avatar>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Avatar with Link</h3>
                      <p>
                        Links can be passed to an avatar. For example a user
                        profile could be linked to the avatar.
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
                                      <Avatar
                                        animateZoom
                                        placeholder="AS"
                                        link="/components/avatar"
                                      ></Avatar>
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
                                    data={` <Avatar
  animateZoom
  placeholder="AS"
  link="/components/avatar"
></Avatar>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Custom Avatar</h3>
                      <p>
                        Avatar can be customised by editing the image passed, or
                        by editing the internal stylings. Such as the below
                        example.
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
                                      <Avatar
                                        mainStylings={{
                                          transform: {
                                            scale: 'hover:scale-150',
                                          },
                                        }}
                                        placeholderStylings={{
                                          text: {
                                            textColor:
                                              'text-emerald-500 hover:text-emerald-200',
                                          },
                                        }}
                                        statusStylings={{
                                          spacing: { padding: 'px-4' },
                                        }}
                                        animateZoom
                                        placeholder="AS"
                                        status="online"
                                      ></Avatar>
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
                                    data={`<Avatar
        mainStylings={{
          transform: {
            scale: 'hover:scale-150',
          },
        }}
        placeholderStylings={{
          text: {
            textColor:
              'text-emerald-500 hover:text-emerald-200',
          },
        }}
        statusStylings={{
          spacing: { padding: 'px-4' },
        }}
        animateZoom
        placeholder="AS"
        status="online"
      ></Avatar>`}
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
                        data={`import Avatar from '@nextail/core/Avatar';`}
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
                          title: 'AvatarProps',
                          content: (
                            <>
                              <h2 className="py-4">AvatarProps</h2>
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
                                    ['animateZoom', 'boolean', 'no'],
                                    ['link', 'string', 'no'],
                                    ['placeholder', 'string', 'no'],
                                    ['title', 'strinng', 'no'],
                                    ['status', 'online | offline | away', 'no'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    [
                                      'placeholderStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                    [
                                      'statusStylings',
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
    </Layout>
  );
};

export default AvatarPage;
