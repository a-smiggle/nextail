import {
  ImageBottomCard,
  ImageCard,
  ImageLeftCard,
  ImageRightCard,
} from '@nextail/core/Card';
import {
  ImageBottomCardSkeleton,
  ImageCardSkeleton,
  ImageLeftCardSkeleton,
  ImageRightCardSkelton,
} from '@nextail/core/Skeleton';
import { NextPage } from 'next';
import React, { useState } from 'react';

const SkeletonPage: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-auto w-full bg-slate-400">
      <div className="flex">
        <div>
          <ImageCardSkeleton />
        </div>
        <div>
          <ImageCard />
        </div>
      </div>

      <div className="flex">
        <div>
          <ImageBottomCardSkeleton />
        </div>
        <div>
          <ImageBottomCard />
        </div>
      </div>
      <div>
        <ImageLeftCardSkeleton />
      </div>
      <div>
        <ImageLeftCard />
      </div>
      <div>
        <ImageRightCardSkelton />
      </div>
      <div>
        <ImageRightCard />
      </div>
    </div>
  );
};

export default SkeletonPage;
