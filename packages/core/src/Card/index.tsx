import React, { ReactElement } from 'react';

import Card from './Card';
import { CardData } from './types';

const INFO =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const SimpleCard = (props: CardData): ReactElement => (
  <Card>
    <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900 dark:text-gray-300">
      {props.title ? props.title : 'Title Here'}
    </h5>
    <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
      {props.info ? props.info : INFO}
    </p>
    <p className="text-xs text-gray-600 dark:text-gray-200">
      {props.secondaryInfo ? props.secondaryInfo : ''}
    </p>
    {props.buttons ? props.buttons : null}
  </Card>
);

const ImageCard = (props: CardData): ReactElement => (
  <Card mainStylings={{ spacing: { padding: ' ' } }}>
    <img
      className="h-64 w-full rounded-t-lg object-cover"
      src={props.image ? props.image : 'https://api.lorem.space/image'}
      alt=""
    />

    <div
      className={`px-4 pt-6 md:relative ${
        props.buttons ? 'pb-4 md:pb-20' : 'pb-4'
      }`}
    >
      <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
        {props.title ? props.title : 'Title Here'}
      </h5>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {props.info ? props.info : INFO}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-200">
        {props.secondaryInfo ? props.secondaryInfo : ''}
      </p>
      <div className="md:absolute md:right-0 md:bottom-0 md:mt-8 md:flex md:w-full md:items-center md:justify-end md:gap-4 md:p-4">
        {props.buttons ? props.buttons : null}
      </div>
    </div>
  </Card>
);

const ImageBottomCard = (props: CardData): ReactElement => (
  <Card mainStylings={{ spacing: { padding: ' ' } }}>
    <div
      className={`px-4 pt-6 md:relative ${
        props.buttons ? 'pb-4 md:pb-20' : 'pb-4'
      }`}
    >
      <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
        {props.title ? props.title : 'Title Here'}
      </h5>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {props.info ? props.info : INFO}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-100">
        {props.secondaryInfo ? props.secondaryInfo : ''}
      </p>
      <div className="md:absolute md:right-0 md:bottom-0 md:mt-8 md:flex md:w-full md:items-center md:justify-end md:gap-4 md:p-4">
        {props.buttons ? props.buttons : null}
      </div>
    </div>
    <a href={props.imageLink ? props.imageLink : '#!'}>
      <img
        className="h-64 w-full rounded-b-lg object-cover"
        src={props.image ? props.image : 'https://api.lorem.space/image'}
        alt=""
      />
    </a>
  </Card>
);

const ImageLeftCard = (props: CardData): ReactElement => (
  <Card
    mainStylings={{
      layout: { display: 'flex flex-col md:flex-row' },
      sizing: { maxWidth: ' ' },
      spacing: { padding: ' ' },
    }}
  >
    <img
      className="h-64 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg"
      src={props.image ? props.image : 'https://api.lorem.space/image/book'}
      alt=""
    />
    <div
      className={`relative flex w-full flex-col justify-start px-4 pt-6 ${
        props.buttons ? 'pb-4 md:pb-20' : 'pb-2'
      }`}
    >
      <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
        {props.title ? props.title : 'Title Here'}
      </h5>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {props.info ? props.info : INFO}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-100">
        {props.secondaryInfo ? props.secondaryInfo : ''}
      </p>
      <div className="md:absolute md:right-0 md:bottom-0 md:mt-8 md:flex md:w-full md:items-center md:justify-end md:gap-4 md:p-4">
        {props.buttons ? props.buttons : null}
      </div>
    </div>
  </Card>
);

const ImageRightCard = (props: CardData): ReactElement => (
  <Card
    mainStylings={{
      layout: { display: 'flex flex-col md:flex-row ' },
      sizing: { maxWidth: ' ' },
      spacing: { padding: ' ' },
    }}
  >
    <div
      className={`relative flex w-full flex-col justify-start px-4 pt-6 ${
        props.buttons ? 'pb-4 md:pb-20' : 'pb-2'
      }`}
    >
      <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
        {props.title ? props.title : 'Title Here'}
      </h5>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {props.info ? props.info : INFO}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-100">
        {props.secondaryInfo ? props.secondaryInfo : ''}
      </p>
      <div className="md:absolute md:right-0 md:bottom-0 md:mt-8 md:flex md:w-full md:items-center md:justify-end md:gap-4 md:p-4">
        {props.buttons ? props.buttons : null}
      </div>
    </div>
    <img
      className="relative h-64 w-full rounded-b-lg object-cover  md:h-auto md:w-1/3 md:rounded-none md:rounded-r-lg"
      src={props.image ? props.image : 'https://api.lorem.space/image/book'}
      alt=""
    />
  </Card>
);

export {
  ImageBottomCard,
  ImageCard,
  ImageLeftCard,
  ImageRightCard,
  SimpleCard,
};
export default Card;
