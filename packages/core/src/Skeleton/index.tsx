import React from 'react';

import Card from '../Card';
import { SkeletonProps } from './types';

const ImageCardSkeleton = (props: SkeletonProps) => (
  <Card
    mainStylings={
      props.cardStylings ? props.cardStylings : { spacing: { padding: ' ' } }
    }
  >
    <div className="h-48 w-full animate-pulse overflow-hidden rounded-t-lg bg-gray-200" />
    <div className="flex flex-1 flex-col gap-3 px-4 py-6">
      <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
    </div>
  </Card>
);

const ImageBottomCardSkeleton = (props: SkeletonProps) => (
  <Card
    mainStylings={
      props.cardStylings ? props.cardStylings : { spacing: { padding: ' ' } }
    }
  >
    <div className="flex flex-1 flex-col gap-3 px-4 py-6">
      <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
    </div>
    <div className="h-48 w-full animate-pulse overflow-hidden rounded-b-lg bg-gray-200" />
  </Card>
);

const ImageLeftCardSkeleton = (props: SkeletonProps) => (
  <Card
    mainStylings={
      props.cardStylings
        ? props.cardStylings
        : {
            layout: { display: 'flex flex-col md:flex-row ' },
            sizing: { maxWidth: 'md:max-w-xl' },
            spacing: { padding: ' ' },
          }
    }
  >
    <div className="h-36 w-full animate-pulse rounded-t-lg bg-gray-200 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />

    <div className="flex w-full flex-1 flex-col gap-3 px-4 py-6">
      <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
    </div>
  </Card>
);

const ImageRightCardSkelton = (props: SkeletonProps) => (
  <Card
    mainStylings={
      props.cardStylings
        ? props.cardStylings
        : {
            layout: { display: 'flex flex-col md:flex-row ' },
            sizing: { maxWidth: 'md:max-w-xl' },
            spacing: { padding: ' ' },
          }
    }
  >
    <div className="flex w-full flex-1 flex-col gap-3 px-4 py-6">
      <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-3 w-full animate-pulse rounded-md bg-gray-200" />
    </div>
    <div className="h-36 w-full animate-pulse rounded-b-lg bg-gray-200 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg" />
  </Card>
);

export {
  ImageBottomCardSkeleton,
  ImageCardSkeleton,
  ImageLeftCardSkeleton,
  ImageRightCardSkelton,
};
