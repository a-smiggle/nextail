import Avatar from '@nextail/core/Avatar';
import Button, {
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  SuccessButton,
  SuccessOutlineButton,
  WarningButton,
  WarningOutlineButton,
} from '@nextail/core/Button';
import CodeSnippet from '@nextail/core/CodeSnippet';
import Dropdown, {
  ErrorDropdown,
  ErrorOutlineDropdown,
  InfoDropdown,
  SuccesDropdown,
  SuccesOutlineDropdown,
  WarningDropdown,
  WarningOutlineDropdown,
} from '@nextail/core/Dropdown';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React, { useState } from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const DropdownPage: NextPage = () => {
  const [basicDropdown, setBasicDropdown] = useState(false);
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [successDropdown, setSuccessDropdown] = useState(false);
  const [warningDropdown, setWarningDropdown] = useState(false);
  const [errorDropdown, setErrorDropdown] = useState(false);
  const [infoDropdown, setInfoDropdown] = useState(false);
  const [successOutlineDropdown, setSuccessOutlineDropdown] = useState(false);
  const [warningOutlineDropdown, setWarningOutlineDropdown] = useState(false);
  const [errorOutlineDropdown, setErrorOutlineDropdown] = useState(false);
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Dropdown</h1>
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
                      <h2>Dropdowns</h2>
                      <p>
                        Contains a list of links that are visible when toggled.
                      </p>

                      <h3 className="pt-4">Basic Dropdown</h3>
                      <p>
                        A basic dropdown allows easy display of a list of items
                        with links.
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
                                      <Dropdown
                                        open={basicDropdown}
                                        toggle={setBasicDropdown}
                                        button={
                                          <Button
                                            onClick={() =>
                                              setBasicDropdown(!basicDropdown)
                                            }
                                          >
                                            Plain
                                          </Button>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
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
                                    data={`<Dropdown
  open={basicDropdown}
  toggle={setBasicDropdown}
  button={
    <Button
      onClick={() =>
        setBasicDropdown(!basicDropdown)
      }
    >
      Plain
    </Button>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Dropdowns</h3>
                      <p>
                        A pre-styled dropdown allows easy display of a list of
                        items with links.
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
                                      <SuccesDropdown
                                        open={successDropdown}
                                        toggle={setSuccessDropdown}
                                        button={
                                          <SuccessButton
                                            onClick={() =>
                                              setSuccessDropdown(
                                                !successDropdown
                                              )
                                            }
                                          >
                                            Success
                                          </SuccessButton>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
                                        ]}
                                      />
                                      <WarningDropdown
                                        open={warningDropdown}
                                        toggle={setWarningDropdown}
                                        button={
                                          <WarningButton
                                            onClick={() =>
                                              setWarningDropdown(
                                                !warningDropdown
                                              )
                                            }
                                          >
                                            Warning
                                          </WarningButton>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
                                        ]}
                                      />
                                      <ErrorDropdown
                                        open={errorDropdown}
                                        toggle={setErrorDropdown}
                                        button={
                                          <ErrorButton
                                            onClick={() =>
                                              setErrorDropdown(!errorDropdown)
                                            }
                                          >
                                            Error
                                          </ErrorButton>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
                                        ]}
                                      />
                                      <InfoDropdown
                                        open={infoDropdown}
                                        toggle={setInfoDropdown}
                                        button={
                                          <InfoButton
                                            onClick={() =>
                                              setInfoDropdown(!infoDropdown)
                                            }
                                          >
                                            Info
                                          </InfoButton>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
                                        ]}
                                      />
                                      <SuccesOutlineDropdown
                                        open={successOutlineDropdown}
                                        toggle={setSuccessOutlineDropdown}
                                        button={
                                          <SuccessOutlineButton
                                            onClick={() =>
                                              setSuccessOutlineDropdown(
                                                !successOutlineDropdown
                                              )
                                            }
                                          >
                                            Success
                                          </SuccessOutlineButton>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
                                        ]}
                                      />
                                      <WarningOutlineDropdown
                                        open={warningOutlineDropdown}
                                        toggle={setWarningOutlineDropdown}
                                        button={
                                          <WarningOutlineButton
                                            onClick={() =>
                                              setWarningOutlineDropdown(
                                                !warningOutlineDropdown
                                              )
                                            }
                                          >
                                            Warning
                                          </WarningOutlineButton>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
                                        ]}
                                      />
                                      <ErrorOutlineDropdown
                                        open={errorOutlineDropdown}
                                        toggle={setErrorOutlineDropdown}
                                        button={
                                          <ErrorOutlineButton
                                            onClick={() =>
                                              setErrorOutlineDropdown(
                                                !errorOutlineDropdown
                                              )
                                            }
                                          >
                                            Error
                                          </ErrorOutlineButton>
                                        }
                                        items={[
                                          { title: 'Link 1', link: '#' },
                                          { title: 'Link 2', link: '#' },
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
                                    data={`<SuccesDropdown
  open={successDropdown}
  toggle={setSuccessDropdown}
  button={
    <SuccessButton
      onClick={() =>
        setSuccessDropdown(
          !successDropdown
        )
      }
    >
      Success
    </SuccessButton>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>
<WarningDropdown
  open={warningDropdown}
  toggle={setWarningDropdown}
  button={
    <WarningButton
      onClick={() =>
        setWarningDropdown(
          !warningDropdown
        )
      }
    >
      Warning
    </WarningButton>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>
<ErrorDropdown
  open={errorDropdown}
  toggle={setErrorDropdown}
  button={
    <ErrorButton
      onClick={() =>
        setErrorDropdown(!errorDropdown)
      }
    >
      Error
    </ErrorButton>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>
<InfoDropdown
  open={infoDropdown}
  toggle={setInfoDropdown}
  button={
    <InfoButton
      onClick={() =>
        setInfoDropdown(!infoDropdown)
      }
    >
      Info
    </InfoButton>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>
<SuccesOutlineDropdown
  open={successOutlineDropdown}
  toggle={setSuccessOutlineDropdown}
  button={
    <SuccessOutlineButton
      onClick={() =>
        setSuccessOutlineDropdown(
          !successOutlineDropdown
        )
      }
    >
      Success
    </SuccessOutlineButton>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>
<WarningOutlineDropdown
  open={warningOutlineDropdown}
  toggle={setWarningOutlineDropdown}
  button={
    <WarningOutlineButton
      onClick={() =>
        setWarningOutlineDropdown(
          !warningOutlineDropdown
        )
      }
    >
      Warning
    </WarningOutlineButton>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>
<ErrorOutlineDropdown
  open={errorOutlineDropdown}
  toggle={setErrorOutlineDropdown}
  button={
    <ErrorOutlineButton
      onClick={() =>
        setErrorOutlineDropdown(
          !errorOutlineDropdown
        )
      }
    >
      Error
    </ErrorOutlineButton>
  }
  items={[
    { title: 'Link 1', link: '#' },
    { title: 'Link 2', link: '#' },
  ]}
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Dropdown</h3>
                      <p>
                        Dropdowns can be fully customised. From the button being
                        customised to the items in the dropdown to the divider.
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
                                      <Dropdown
                                        open={avatarDropdown}
                                        toggle={setAvatarDropdown}
                                        mainStylings={{
                                          border: {
                                            ringColor: 'ring-red-500',
                                          },
                                        }}
                                        dividerStylings={{
                                          border: {
                                            divideColor: 'divide-red-500',
                                          },
                                        }}
                                        itemStylings={{
                                          text: {
                                            textColor:
                                              'text-red-200 hover:text-red-500',
                                          },
                                        }}
                                        button={
                                          <Button
                                            onClick={() =>
                                              setAvatarDropdown(!avatarDropdown)
                                            }
                                            mainStylings={{
                                              border: {
                                                borderRadius: 'rounded-full',
                                              },
                                              spacing: { padding: 'p-2' },
                                              background: {
                                                backgroundColor: ' ',
                                              },
                                              effect: { boxShadow: ' ' },
                                            }}
                                          >
                                            <Avatar />
                                          </Button>
                                        }
                                        items={[
                                          { title: 'Barry Brown', link: '' },
                                          {
                                            title: 'Profile',
                                            link: '#',
                                            description: 'Go to profile',
                                            icon: (
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
                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                              </svg>
                                            ),
                                            disabled: true,
                                          },
                                          { divider: true },
                                          {
                                            title: 'Reset Password',
                                            link: '#',
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
                                    data={`<Dropdown
  open={avatarDropdown}
  toggle={setAvatarDropdown}
  mainStylings={{
    border: {
      ringColor: 'ring-red-500',
    },
  }}
  dividerStylings={{
    border: {
      divideColor: 'divide-red-500',
    },
  }}
  itemStylings={{
    text: {
      textColor:
        'text-red-200 hover:text-red-500',
    },
  }}
  button={
    <Button
      onClick={() =>
        setAvatarDropdown(!avatarDropdown)
      }
      mainStylings={{
        border: {
          borderRadius: 'rounded-full',
        },
        spacing: { padding: 'p-2' },
        background: {
          backgroundColor: ' ',
        },
        effect: { boxShadow: ' ' },
      }}
    >
      <Avatar />
    </Button>
  }
  items={[
    { title: 'Barry Brown', link: '' },
    {
      title: 'Profile',
      link: '#',
      description: 'Go to profile',
      icon: (
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      disabled: true,
    },
    { divider: true },
    {
      title: 'Reset Password',
      link: '#',
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
                          title: 'DropdownProps',
                          content: (
                            <>
                              <h2 className="py-4">DropdownProps</h2>
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
                                    ['items', 'DropdownItem[]', 'yes'],
                                    ['open', 'boolean]', 'yes'],
                                    [
                                      'toggle',
                                      'Dispatch<SetStateAction<boolean>>',
                                      'yes',
                                    ],
                                    ['button', 'ReactNode', 'yes'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    ['itemStylings', 'TailwindStylings', 'no'],
                                    [
                                      'disabledStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                    [
                                      'dividerStylings',
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
                          title: 'DropdownItem',
                          content: (
                            <>
                              <h2 className="py-4">DropdownItem</h2>
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
                                    ['title', 'string', 'no'],
                                    ['divider', 'boolean', 'no'],
                                    ['icon', 'ReactNode', 'no'],
                                    ['description', 'string', 'no'],
                                    ['link', 'string', 'no'],
                                    ['disabled', 'boolean', 'no'],
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

export default DropdownPage;
