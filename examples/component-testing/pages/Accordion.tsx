import Accordion from '@nextail/core/Accordion';
import { NextPage } from 'next';
import React from 'react';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nisl pellentesque, tempus leo et, dignissim tortor. Morbi pretium augue in posuere maximus. Aliquam porttitor libero ut nisl venenatis luctus. Mauris tellus velit, hendrerit at libero et, maximus molestie ante. Duis vel ultricies sapien. Aliquam aliquet, turpis ut sodales blandit, felis ligula ultricies urna, id sagittis velit velit non turpis. Nulla eu tellus tincidunt, euismod eros sed, scelerisque massa.';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-white p-5">
      <Accordion
        flush
        data={[
          {
            title: '1',
            content: (
              <div>
                <div className="h-12 w-12 rounded-full bg-red-500" />
                {LOREM}
              </div>
            ),
          },
          { title: '2', content: <div className="text-red-500">{LOREM}</div> },
          {
            title: '3',
            content: (
              <div>
                <div className="h-12 w-12 rounded-full bg-red-500" />
                {LOREM}
              </div>
            ),
          },
          { title: '4', content: <div className="text-red-500">{LOREM}</div> },
          {
            title: '5',
            content: (
              <div>
                <div className="h-12 w-12 rounded-full bg-red-500" />
                {LOREM}
              </div>
            ),
          },
          { title: '6', content: <div className="text-red-500">{LOREM}</div> },
        ]}
      />
    </div>
  );
};

export default Home;
