import { MenuData } from '@nextail/core/types';

export const MENU: MenuData[] = [
  {
    title: 'Getting Started',
    subMenu: [
      { title: 'Install', link: '/setup/install' },
      { title: 'Customise', link: '/setup/customise' },
      { title: 'Custom CSS', link: '/setup/custom_css' },
    ],
  },
  {
    title: 'Components',
    subMenu: [
      { title: 'Accordion', link: '/components/accordion' },
      { title: 'Alert', link: '/components/alert' },
      { title: 'Alert Container', link: '/components/alertcontainer' },
      { title: 'Avatar', link: '/components/avatar' },
      { title: 'Avatar Group', link: '/components/avatargroup' },
      { title: 'Badge', link: '/components/badge' },
      { title: 'Button', link: '/components/button' },
      { title: 'Card', link: '/components/card' },
      { title: 'Clip', link: '/components/clip' },
      { title: 'Carousel', link: '/components/carousel' },
      { title: 'Code Snippet', link: '/components/codesnippet' },
      { title: 'Dropdown', link: '/components/dropdown' },
      { title: 'Mask', link: '/components/mask' },
      { title: 'Modal', link: '/components/modal' },
      { title: 'Progress', link: '/components/progress' },
      { title: 'Skeleton', link: '/components/skeleton' },
      { title: 'Spinner', link: '/components/spinner' },
      { title: 'Table', link: '/components/table' },
    ],
  },
  {
    title: 'Layout',
    subMenu: [
      { title: 'Drawer', link: '/layout/drawer' },
      { title: 'Footer', link: '/layout/footer' },
      { title: 'Navbar', link: '/layout/navbar' },
      { title: 'Sidebar', link: '/layout/sidebar' },
      { title: 'Tabs', link: '/layout/tabs' },
    ],
  },
];
