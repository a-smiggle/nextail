import { InfoButton, InfoOutlineButton } from '@nextail/core/Button';
import Footer from '@nextail/core/Footer';
import { NavbarV1 } from '@nextail/core/Navbar';
import Tabs from '@nextail/core/Tabs';
import { NextPage } from 'next';
import React from 'react';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nisl pellentesque, tempus leo et, dignissim tortor. Morbi pretium augue in posuere maximus. Aliquam porttitor libero ut nisl venenatis luctus. Mauris tellus velit, hendrerit at libero et, maximus molestie ante. Duis vel ultricies sapien. Aliquam aliquet, turpis ut sodales blandit, felis ligula ultricies urna, id sagittis velit velit non turpis. Nulla eu tellus tincidunt, euismod eros sed, scelerisque massa.';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavbarV1
        data={{
          title: (
            <div className="text-lg font-bold uppercase text-sky-500">
              Nextail
            </div>
          ),
          menu: [
            { title: 'Home', link: '#' },
            { title: 'About', link: '/about' },
            {
              title: 'Components',
              subMenu: [
                { title: 'Buttons', link: '/buttons' },
                { title: 'Avatars', link: '/avatars' },
              ],
            },
          ],
        }}
        linkStylings={{
          text: { textColor: 'text-slate-500 hover:text-sky-500' },
          background: { backgroundColor: ' ' },
          border: { borderWidth: ' ' },
          effect: { boxShadow: ' ' },
        }}
        dropdownItemStylings={{
          background: { backgroundColor: 'hover:bg-sky-500' },
          text: { textColor: 'hover:text-white' },
        }}
      ></NavbarV1>
      <main className="grow bg-sky-200 p-4">
        <Tabs
          SelectedButton={InfoButton}
          UnselectedButton={InfoOutlineButton}
          data={[
            { title: 'Home', content: <div>Hello</div> },
            { title: 'About', content: <div>Hello Again</div> },
          ]}
        />
      </main>
      <Footer
        data={{
          title: (
            <div className="text-lg font-bold uppercase text-sky-500">
              Nextail
            </div>
          ),
          credit: (
            <p className="text-center text-sm text-gray-500 dark:text-gray-300">
              © 2022 NEXTAIL. Created by a-smiggle.
            </p>
          ),
          links: [
            { title: 'About', link: '/about' },
            { title: 'Contact', link: '/contact' },
          ],
          buttons: (
            <a
              href="https://github.com/a-smiggle/nextail"
              target="_blink"
              className="text-gray-500 transition-colors duration-300 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-500"
            >
              <svg viewBox="0 0 30 30" className="h-6 w-6 fill-current">
                <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"></path>
              </svg>
            </a>
          ),
        }}
      ></Footer>
    </div>
  );
};

export default Home;
