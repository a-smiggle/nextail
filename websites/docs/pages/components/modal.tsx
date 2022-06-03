import Button, {
  ErrorButton,
  InfoButton,
  SuccessButton,
  WarningButton,
} from '@nextail/core/Button';
import CodeSnippet from '@nextail/core/CodeSnippet';
import Modal, {
  ErrorModal,
  InfoModal,
  SuccessModal,
  WarningModal,
} from '@nextail/core/Modal';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React, { useState } from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const INFO =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const ModalPage: NextPage = () => {
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [filledModal, setFilledModal] = useState(false);
  const [customModal, setCustomModal] = useState(false);
  const [customSuccessModal, setCustomSuccessModal] = useState(false);

  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Modals</h1>
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
                      <h2>Modals</h2>
                      <p>
                        A modal is a separate window that can be toggled to be
                        visible. They are useful for dialog boxes and other
                        important information that needs to be focused.
                      </p>

                      <h3 className="pt-4">Basic Modal</h3>
                      <p>
                        Modals allow header, body, and footer to be passed for
                        content to be split up, or for a child to be passed.
                        They should not be used together.
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
                                      <Button onClick={() => setModal(true)}>
                                        Open Basic Modal
                                      </Button>
                                      <Modal
                                        open={modal}
                                        toggle={setModal}
                                        header={<h1>Header</h1>}
                                        body={<p>Body</p>}
                                        footer={<Button>Footer</Button>}
                                      ></Modal>
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
                                    data={`<Button onClick={() => setModal(true)}>
  Toggle Modal
</Button>

<Modal open={modal} toggle={setModal} header={<div>Hello</div>} />`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Pre-Styled Modal</h3>
                      <p>
                        These are pre-styled modals that change the basic
                        appearance of the container and text within.
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
                                    <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-4">
                                      <SuccessButton
                                        onClick={() =>
                                          setSuccessModal(!successModal)
                                        }
                                      >
                                        Open Success Modal
                                      </SuccessButton>
                                      <SuccessModal
                                        open={successModal}
                                        toggle={setSuccessModal}
                                        header={<div>Hello</div>}
                                      />
                                      <WarningButton
                                        onClick={() =>
                                          setWarningModal(!warningModal)
                                        }
                                      >
                                        Open Warning Modal
                                      </WarningButton>

                                      <WarningModal
                                        open={warningModal}
                                        toggle={setWarningModal}
                                        header={<div>Hello</div>}
                                      />
                                      <ErrorButton
                                        onClick={() =>
                                          setErrorModal(!errorModal)
                                        }
                                      >
                                        Open Error Modal
                                      </ErrorButton>

                                      <ErrorModal
                                        open={errorModal}
                                        toggle={setErrorModal}
                                        header={<div>Hello</div>}
                                      />
                                      <InfoButton
                                        onClick={() => setInfoModal(!infoModal)}
                                      >
                                        Open Error Modal
                                      </InfoButton>
                                      <InfoModal
                                        open={infoModal}
                                        toggle={setInfoModal}
                                        header={<div>Hello</div>}
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
                                    data={`<SuccessButton
  onClick={() =>
    setSuccessModal(!successModal)
  }
>
  Open Success Modal
</SuccessButton>
<SuccessModal
  open={successModal}
  toggle={setSuccessModal}
  header={<div>Hello</div>}
/>
<WarningButton
  onClick={() =>
    setWarningModal(!warningModal)
  }
>
  Open Warning Modal
</WarningButton>

<WarningModal
  open={warningModal}
  toggle={setWarningModal}
  header={<div>Hello</div>}
/>
<ErrorButton
  onClick={() =>
    setErrorModal(!errorModal)
  }
>
  Open Error Modal
</ErrorButton>

<ErrorModal
  open={errorModal}
  toggle={setErrorModal}
  header={<div>Hello</div>}
/>
<InfoButton
  onClick={() => setInfoModal(!infoModal)}
>
  Open Error Modal
</InfoButton>
<InfoModal
  open={infoModal}
  toggle={setInfoModal}
  header={<div>Hello</div>}
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Filled Modal</h3>
                      <p>An example with content.</p>
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
                                        onClick={() => setFilledModal(true)}
                                      >
                                        Open Filled Modal
                                      </Button>
                                      <Modal
                                        open={filledModal}
                                        toggle={setFilledModal}
                                      >
                                        <h1>Filled Modal</h1>
                                        <p className="pt-8">{INFO}</p>
                                        <div className="flex justify-end gap-2 pt-4">
                                          <ErrorButton
                                            onClick={() =>
                                              setFilledModal(false)
                                            }
                                          >
                                            Close
                                          </ErrorButton>
                                          <SuccessButton>Accept</SuccessButton>
                                        </div>
                                      </Modal>
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
  onClick={() => setFilledModal(true)}
>
  Open Filled Modal
</Button>
<Modal
  open={filledModal}
  toggle={setFilledModal}
>
  <h1>Filled Modal</h1>
  <p className="pt-8">{INFO}</p>
  <div className="flex justify-end gap-2 pt-4">
    <ErrorButton
      onClick={() =>
        setFilledModal(false)
      }
    >
      Close
    </ErrorButton>
    <SuccessButton>Accept</SuccessButton>
  </div>
</Modal>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Modal</h3>
                      <p>
                        Both the basic modal and pre-styled allow editing
                        mainStylings and backdropStylings.
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
                                    <div className="flex w-fit flex-col justify-center gap-2 md:flex-col">
                                      <Button
                                        onClick={() => setCustomModal(true)}
                                      >
                                        Open Custom Modal
                                      </Button>
                                      <Modal
                                        mainStylings={{
                                          text: {
                                            textColor: 'text-emerald-500',
                                            textAlign: 'text-right',
                                          },
                                        }}
                                        backdropStylings={{
                                          background: {
                                            backgroundColor:
                                              'bg-emerald-500/25',
                                          },
                                        }}
                                        open={customModal}
                                        toggle={setCustomModal}
                                        header={<h1>Custom</h1>}
                                        body={<p>{INFO}</p>}
                                      />
                                      <SuccessButton
                                        onClick={() =>
                                          setCustomSuccessModal(true)
                                        }
                                      >
                                        Open Custom Success Modal
                                      </SuccessButton>
                                      <SuccessModal
                                        mainStylings={{
                                          text: {
                                            textAlign: 'text-right',
                                          },
                                        }}
                                        backdropStylings={{
                                          background: {
                                            backgroundColor:
                                              'bg-emerald-500/25',
                                          },
                                        }}
                                        open={customSuccessModal}
                                        toggle={setCustomSuccessModal}
                                        header={<h1>Custom Success</h1>}
                                        body={<p>{INFO}</p>}
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
                                    data={`<Button
  onClick={() => setCustomModal(true)}
>
  Open Custom Modal
</Button>
<Modal
  mainStylings={{
    text: {
      textColor: 'text-emerald-500',
      textAlign: 'text-right',
    },
  }}
  backdropStylings={{
    background: {
      backgroundColor:
        'bg-emerald-500/25',
    },
  }}
  open={customModal}
  toggle={setCustomModal}
  header={<h1>Custom</h1>}
  body={<p>{INFO}</p>}
/>
<SuccessButton
  onClick={() =>
    setCustomSuccessModal(true)
  }
>
  Open Custom Success Modal
</SuccessButton>
<SuccessModal
  mainStylings={{
    text: {
      textAlign: 'text-right',
    },
  }}
  backdropStylings={{
    background: {
      backgroundColor:
        'bg-emerald-500/25',
    },
  }}
  open={customSuccessModal}
  toggle={setCustomSuccessModal}
  header={<h1>Custom Success</h1>}
  body={<p>{INFO}</p>}
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
                        data={`import Modal, {
  ErrorModal,
  InfoModal,
  SuccessModal,
  WarningModal,
} from '@nextail/core/Modal';`}
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
                          title: 'ModalProps',
                          content: (
                            <>
                              <h2 className="py-4">ModalProps</h2>
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
                                    ['header', 'ReactNode', 'no'],
                                    ['body', 'ReactNode', 'no'],
                                    ['footer', 'ReactNode', 'no'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    [
                                      'backdropStylings',
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

export default ModalPage;
