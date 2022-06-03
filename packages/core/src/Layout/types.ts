import { FooterProps } from '../Footer/types';
import { NavbarProps } from '../Navbar/types';
import { SidebarProps } from '../Sidebar/types';
import { TailwindStylings } from '../types';

export interface LayoutProps {
  navbar: NavbarProps;
  zIndexNavbar?: string | 'z-10' | 'z-20' | 'z-30' | 'z-40' | 'z-50';
  sidebar: SidebarProps;
  zIndexSidebar?: string | 'z-10' | 'z-20' | 'z-30' | 'z-40' | 'z-50';
  mainStylings?: TailwindStylings;
  footer?: FooterProps;
}
