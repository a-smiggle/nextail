import Alert, {
  ErrorAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
} from '@nextail/core/Alert';
import AlertContainer from '@nextail/core/AlertContainer';
import Avatar from '@nextail/core/Avatar';
import AvatarGroup from '@nextail/core/AvatarGroup';
import Button, {
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  InfoOutlineButton,
  SuccessButton,
  SuccessOutlineButton,
  WarningButton,
  WarningOutlineButton,
} from '@nextail/core/Button';
import { ImageCard, ImageLeftCard, ImageRightCard } from '@nextail/core/Card';
import Carousel from '@nextail/core/Carousel';
import CodeSnippet from '@nextail/core/CodeSnippet';
import Drawer from '@nextail/core/Drawer';
import Dropdown, {
  ErrorDropdown,
  ErrorOutlineDropdown,
  InfoDropdown,
  SuccesDropdown,
  SuccesOutlineDropdown,
  WarningDropdown,
  WarningOutlineDropdown,
} from '@nextail/core/Dropdown';
import Modal, {
  ErrorModal,
  InfoModal,
  SuccessModal,
  WarningModal,
} from '@nextail/core/Modal';
import Progress, {
  ErrorProgress,
  InfoProgress,
  SuccessProgress,
  WarningProgress,
} from '@nextail/core/Progress';
import {
  ImageCardSkeleton,
  ImageLeftCardSkeleton,
  ImageRightCardSkelton,
} from '@nextail/core/Skeleton';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useInterval } from 'usehooks-ts';

import Layout from '../components/Layout';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nisl pellentesque, tempus leo et, dignissim tortor.';

const Home: NextPage = () => {
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [plainDropdown, setPlainDropdown] = useState(false);
  const [successDropdown, setSuccessDropdown] = useState(false);
  const [warningDropdown, setWarningDropdown] = useState(false);
  const [errorDropdown, setErrorDropdown] = useState(false);
  const [infoDropdown, setInfoDropdown] = useState(false);
  const [successOutlineDropdown, setSuccessOutlineDropdown] = useState(false);
  const [warningOutlineDropdown, setWarningOutlineDropdown] = useState(false);
  const [errorOutlineDropdown, setErrorOutlineDropdown] = useState(false);
  const [leftDrawer, setLeftDrawer] = useState(false);
  const [rightDrawer, setRightDrawer] = useState(false);
  const [topDrawer, setTopDrawer] = useState(false);
  const [bottomDrawer, setBottomDrawer] = useState(false);
  const [alerts, setAlerts] = useState(false);
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [progress, setProgress] = useState(10);
  const [successProgress, setSuccessProgress] = useState(25);
  const [warningProgress, setWarningProgress] = useState(40);
  const [errorProgress, setErrorProgress] = useState(75);
  const [infoProgress, setInfoProgress] = useState(90);

  useInterval(() => {
    let p = progress + 5;
    if (p > 100) p = 0;
    setProgress(p);
    p = successProgress + 5;
    if (p > 100) p = 0;
    setSuccessProgress(p);
    p = warningProgress + 5;
    if (p > 100) p = 0;
    setWarningProgress(p);
    p = errorProgress + 5;
    if (p > 100) p = 0;
    setErrorProgress(p);
    p = infoProgress + 5;
    if (p > 100) p = 0;
    setInfoProgress(p);
  }, 5000);

  return (
    <>
      <Layout>
        <div className="w-full bg-white py-4 dark:bg-emerald-900 md:p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="col-span-1 w-full rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20">
              <h1 className="pb-6 text-2xl font-bold text-white">Buttons</h1>
              <div className="grid grid-cols-2 gap-2">
                <Button>Plain</Button>
                <SuccessButton>Success</SuccessButton>
                <WarningButton>Warning</WarningButton>
                <ErrorButton>Error</ErrorButton>
                <InfoButton>Info</InfoButton>
                <SuccessOutlineButton>Success</SuccessOutlineButton>
                <WarningOutlineButton>Warning</WarningOutlineButton>
                <ErrorOutlineButton>Error</ErrorOutlineButton>
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Dropdowns</h1>
              <div className="grid grid-cols-2 gap-2">
                <Dropdown
                  open={plainDropdown}
                  toggle={setPlainDropdown}
                  button={
                    <Button onClick={() => setPlainDropdown(!plainDropdown)}>
                      Plain
                    </Button>
                  }
                  items={[
                    { title: 'Link 1', link: '#' },
                    { title: 'Link 2', link: '#' },
                  ]}
                />
                <SuccesDropdown
                  open={successDropdown}
                  toggle={setSuccessDropdown}
                  button={
                    <SuccessButton
                      onClick={() => setSuccessDropdown(!successDropdown)}
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
                      onClick={() => setWarningDropdown(!warningDropdown)}
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
                      onClick={() => setErrorDropdown(!errorDropdown)}
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
                    <InfoButton onClick={() => setInfoDropdown(!infoDropdown)}>
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
                        setSuccessOutlineDropdown(!successOutlineDropdown)
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
                        setWarningOutlineDropdown(!warningOutlineDropdown)
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
                        setErrorOutlineDropdown(!errorOutlineDropdown)
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
                <Dropdown
                  open={avatarDropdown}
                  toggle={setAvatarDropdown}
                  button={
                    <Button
                      onClick={() => setAvatarDropdown(!avatarDropdown)}
                      mainStylings={{
                        border: { borderRadius: 'rounded-full' },
                        spacing: { padding: 'p-2' },
                        background: { backgroundColor: ' ' },
                        effect: { boxShadow: ' ' },
                      }}
                    >
                      <Avatar />
                    </Button>
                  }
                  items={[
                    { title: 'Barry Brown', link: '' },
                    { title: 'Profile', link: '#' },
                    { title: 'Reset Password', link: '#' },
                  ]}
                />
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Avatars</h1>
              <div className="grid grid-cols-2 gap-2 ">
                <div>
                  <Avatar />
                </div>
                <div className="flex">
                  <Avatar status="online" />
                </div>
                <div className="flex">
                  <Avatar status="offline" />
                </div>
                <div className="flex">
                  <Avatar status="away" />
                </div>
                <AvatarGroup>
                  <Avatar animateZoom placeholder="AS" status="online" />
                  <Avatar animateZoom status="online" />
                  <Avatar animateZoom status="online" />
                  <Avatar animateZoom placeholder="20+" link="#" />
                </AvatarGroup>
              </div>
            </div>
            <div className="col-span-1 h-fit w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:row-span-1 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Carousel</h1>
              <Carousel
                mainStylings={{
                  spacing: { margin: ' ', padding: ' ' },
                }}
                timer
                fullscreen
                buttonStylings={{
                  border: { borderRadius: 'rounded-full' },
                  spacing: { padding: 'p-2' },
                  background: { backgroundColor: ' ' },
                  text: { textColor: 'text-slate-300' },
                  effect: { boxShadow: ' ' },
                }}
                data={[
                  {
                    title: 'One',
                    description: LOREM,
                    element: (
                      <img
                        alt=""
                        src="https://api.lorem.space/image/car?w=800&h=350&hash=8B7BCDC2"
                        className="h-full w-screen md:w-full"
                      />
                    ),
                  },
                  {
                    title: 'TWo',
                    element: (
                      <img
                        alt=""
                        src="https://api.lorem.space/image/car?w=800&h=350&hash=500B67FB"
                        className="h-full w-screen md:w-full"
                      />
                    ),
                  },
                  {
                    title: 'Three',
                    element: (
                      <img
                        alt=""
                        src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                        className="h-full w-screen md:w-full"
                      />
                    ),
                  },
                ]}
              />
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:col-span-2 md:row-span-3 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Cards</h1>
              <div className="grid gap-2 md:grid-cols-2">
                <ImageLeftCard />
                <div className="md:row-span-2">
                  <ImageCard />
                </div>
                <ImageRightCard />
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:row-span-1 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Drawers</h1>
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={() => setLeftDrawer(!leftDrawer)}>
                  Open Left Drawer
                </Button>
                <Button onClick={() => setRightDrawer(!rightDrawer)}>
                  Open Right Drawer
                </Button>
                <Button onClick={() => setTopDrawer(!topDrawer)}>
                  Open Top Drawer
                </Button>
                <Button onClick={() => setBottomDrawer(!bottomDrawer)}>
                  Open Bottom Drawer
                </Button>
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:row-span-1 md:w-fit">
              <h1 className="pb-6 text-2xl font-bold text-white">Alerts</h1>
              <Button onClick={() => setAlerts(!alerts)}>Open Alerts</Button>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:col-span-2 md:row-span-2 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Skeltons</h1>
              <div className="grid gap-2 md:grid-cols-2">
                <ImageLeftCardSkeleton />
                <div className="md:row-span-2">
                  <ImageCardSkeleton />
                </div>
                <ImageRightCardSkelton />
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:row-span-1 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Modals</h1>
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={() => setModal(!modal)}> Open Modal</Button>
                <SuccessButton onClick={() => setSuccessModal(!successModal)}>
                  Open Success Modal
                </SuccessButton>
                <WarningButton onClick={() => setWarningModal(!warningModal)}>
                  Open Warning Modal
                </WarningButton>
                <ErrorButton onClick={() => setErrorModal(!errorModal)}>
                  Open Error Modal
                </ErrorButton>
                <InfoButton onClick={() => setInfoModal(!infoModal)}>
                  Open Error Modal
                </InfoButton>
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:row-span-1 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Progress</h1>
              <div className="space-y-2">
                <Progress
                  backgroundStylings={{
                    background: { backgroundColor: 'bg-black' },
                  }}
                  progress={progress}
                />
                <SuccessProgress progress={successProgress} />
                <WarningProgress progress={warningProgress} />
                <ErrorProgress progress={errorProgress} />
                <InfoProgress progress={infoProgress} />
              </div>
            </div>
            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:row-span-1 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">
                Code Snippet
              </h1>
              <CodeSnippet data="npm i @nextail/core @nextail/providers" />
            </div>

            <div className="col-span-1 w-screen rounded bg-emerald-500/50 p-6 shadow-lg dark:bg-emerald-500/20 md:col-span-2 md:row-span-1 md:w-full">
              <h1 className="pb-6 text-2xl font-bold text-white">Tabs</h1>
              <Tabs
                SelectedButton={InfoButton}
                UnselectedButton={InfoOutlineButton}
                data={[
                  {
                    title: 'Tab1',
                    content: (
                      <div className="mt-2 h-12 w-full rounded bg-white dark:bg-slate-700 dark:text-slate-300">
                        Tab1
                      </div>
                    ),
                  },
                  {
                    title: 'Tab2',
                    content: (
                      <div className="mt-2 h-12 w-full rounded bg-white dark:bg-slate-700 dark:text-slate-300">
                        Tab2
                      </div>
                    ),
                  },
                  {
                    title: 'Tab3',
                    content: (
                      <div className="mt-2 h-12 w-full rounded bg-white dark:bg-slate-700 dark:text-slate-300">
                        Tab3
                      </div>
                    ),
                  },
                  {
                    title: 'Tab4',
                    content: (
                      <div className="mt-2 h-12 w-full rounded bg-white dark:bg-slate-700 dark:text-slate-300">
                        Tab4
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout>
      <div>
        <Drawer
          toggle={setTopDrawer}
          postion="top"
          open={topDrawer}
          mainStylings={{ background: { backgroundColor: 'bg-red-500' } }}
        >
          Top Drawer
        </Drawer>
        <Drawer toggle={setBottomDrawer} postion="bottom" open={bottomDrawer}>
          Bottom Drawer
        </Drawer>
        <Drawer toggle={setLeftDrawer} postion="left" open={leftDrawer}>
          Left Drawer
        </Drawer>
        <Drawer toggle={setRightDrawer} postion="right" open={rightDrawer}>
          Right Drawer
        </Drawer>
      </div>
      <div>
        <AlertContainer
          toggle={setAlerts}
          backgroundStylings={{}}
          mainStylings={{
            background: { backgroundColor: 'bg-slate-300' },
          }}
          open={alerts}
        >
          <Alert
            mainStylings={{
              border: { borderColor: 'border-black', borderWidth: 'border-4' },
              background: { backgroundColor: 'bg-red-500' },
            }}
          >
            Customised Alert
          </Alert>
          <Alert>Blank Alert</Alert>

          <SuccessAlert
            title="Success Alerts"
            message="Hello"
            timestamp="000Z"
          />
          <WarningAlert
            title="Warning Alerts"
            message="Hello"
            timestamp="000Z"
          />
          <ErrorAlert title="Error Alerts" message="Hello" timestamp="000Z" />
          <InfoAlert title="Info Alerts" message="Hello" timestamp="000Z" />
        </AlertContainer>
      </div>
      <div>
        <Modal open={modal} toggle={setModal} header={<div>Hello</div>} />
        <SuccessModal
          open={successModal}
          toggle={setSuccessModal}
          header={<div>Hello</div>}
        />
        <WarningModal
          open={warningModal}
          toggle={setWarningModal}
          header={<div>Hello</div>}
        />
        <ErrorModal
          open={errorModal}
          toggle={setErrorModal}
          header={<div>Hello</div>}
        />
        <InfoModal
          open={infoModal}
          toggle={setInfoModal}
          header={<div>Hello</div>}
        />
      </div>
    </>
  );
};

export default Home;
