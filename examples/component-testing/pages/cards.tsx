import Card, {
  ImageBottomCard,
  ImageCard,
  ImageLeftCard,
  ImageRightCard,
} from '@nextail/core/Card';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="flex justify-between p-2">
        <Card></Card>
        <ImageLeftCard></ImageLeftCard>
        <ImageRightCard></ImageRightCard>
      </div>
      <div className="flex justify-between p-2">
        <ImageCard></ImageCard>
        <ImageBottomCard></ImageBottomCard>
      </div>
    </div>
  );
};

export default Home;
