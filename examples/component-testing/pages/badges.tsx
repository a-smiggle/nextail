import Badge, { PillBadge, RoundedBadge } from '@nextail/core/Badge';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="m-2 space-x-2">
        <Badge>Badge</Badge>
        <RoundedBadge>Rounded</RoundedBadge>
        <PillBadge>Pill Badge</PillBadge>
      </div>
    </div>
  );
};

export default Home;
