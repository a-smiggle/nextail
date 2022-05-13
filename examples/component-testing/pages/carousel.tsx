import Carousel from '@nextail/core/Carousel';
import { NextPage } from 'next';
import React from 'react';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nisl pellentesque, tempus leo et, dignissim tortor. Morbi pretium augue in posuere maximus. Aliquam porttitor libero ut nisl venenatis luctus. Mauris tellus velit, hendrerit at libero et, maximus molestie ante. Duis vel ultricies sapien. Aliquam aliquet, turpis ut sodales blandit, felis ligula ultricies urna, id sagittis velit velit non turpis. Nulla eu tellus tincidunt, euismod eros sed, scelerisque massa.';

const CarouselPage: NextPage = () => {
  return (
    <div className="h-screen w-full bg-white p-5">
      <Carousel
        timer
        buttonStylings={{
          border: { borderRadius: 'rounded-full' },
          spacing: { padding: 'p-2' },
          background: { backgroundColor: ' ' },
          text: { textColor: 'text-slate-300' },
        }}
        data={[
          {
            title: 'One',
            description: LOREM,
            element: (
              <img
                alt=""
                src="https://api.lorem.space/image/car?w=800&h=350&hash=8B7BCDC2"
                className="w-full"
              />
            ),
          },
          {
            title: 'TWo',
            element: (
              <img
                alt=""
                src="https://api.lorem.space/image/car?w=800&h=350&hash=500B67FB"
                className="w-full"
              />
            ),
          },
          {
            title: 'Three',
            element: (
              <img
                alt=""
                src="https://api.lorem.space/image/car?w=800&h=350&hash=A89D0DE6"
                className="w-full"
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default CarouselPage;
