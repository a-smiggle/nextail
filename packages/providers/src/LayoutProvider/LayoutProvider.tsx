/* eslint-disable object-shorthand */
import { useInnerWidth } from '@nextail/hooks';
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type CustomProps = {
  sidebarDefault?: boolean;
};

type LayoutValue = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  toggleSidebarOpen: () => void;
  leftDrawerOpen: boolean;
  setLeftDrawerOpen: Dispatch<SetStateAction<boolean>>;
  toggleLeftDrawerOpen: () => void;
  rightDrawerOpen: boolean;
  setRightDrawerOpen: Dispatch<SetStateAction<boolean>>;
  toggleRightDrawerOpen: () => void;
  topDrawerOpen: boolean;
  setTopDrawerOpen: Dispatch<SetStateAction<boolean>>;
  toggleTopDrawerOpen: () => void;
  bottomDrawerOpen: boolean;
  setBottomDrawerOpen: Dispatch<SetStateAction<boolean>>;
  toggleBottomDrawerOpen: () => void;
};

const LayoutContext = createContext<LayoutValue | undefined>(undefined);

export default function LayoutProvider(props: PropsWithChildren<CustomProps>) {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarDefault || false);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [topDrawerOpen, setTopDrawerOpen] = useState(false);
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);

  const width = useInnerWidth();

  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleLeftDrawerOpen = () => {
    setLeftDrawerOpen(!leftDrawerOpen);
  };

  const toggleRightDrawerOpen = () => {
    setRightDrawerOpen(!rightDrawerOpen);
  };

  const toggleTopDrawerOpen = () => {
    setTopDrawerOpen(!topDrawerOpen);
  };

  const toggleBottomDrawerOpen = () => {
    setBottomDrawerOpen(!bottomDrawerOpen);
  };

  useEffect(() => {
    const temp: string | null = localStorage.getItem('layout');
    if (temp) {
      const storedLayout = JSON.parse(temp);
      if (storedLayout) {
        const tempSidebarOpen: boolean =
          width <= 425 ? false : storedLayout.sidebarOpen || false;
        setSidebarOpen(tempSidebarOpen);
        const tempLeftDrawerOpen: boolean =
          storedLayout.leftDrawerOpen || false;
        setLeftDrawerOpen(tempLeftDrawerOpen);
      }
    }
  }, []);

  useEffect(() => {
    const temp = {
      sidebarOpen: sidebarOpen,
      leftDrawerOpen: leftDrawerOpen,
      rightDrawerOpen: rightDrawerOpen,
      topDrawerOpen: topDrawerOpen,
      bottomDrawerOpen: bottomDrawerOpen,
    };
    localStorage.setItem('layout', JSON.stringify(temp));
    setLoading(false);
  }, [
    sidebarOpen,
    leftDrawerOpen,
    rightDrawerOpen,
    topDrawerOpen,
    bottomDrawerOpen,
  ]);

  return (
    <LayoutContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        toggleSidebarOpen,
        leftDrawerOpen,
        setLeftDrawerOpen,
        toggleLeftDrawerOpen,
        rightDrawerOpen,
        setRightDrawerOpen,
        toggleRightDrawerOpen,
        topDrawerOpen,
        setTopDrawerOpen,
        toggleTopDrawerOpen,
        bottomDrawerOpen,
        setBottomDrawerOpen,
        toggleBottomDrawerOpen,
      }}
    >
      {loading ? null : props.children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  const context = useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useLayoutContext must be used inside LayoutContext');
  }

  return context;
}
