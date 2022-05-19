import React, { useState } from 'react';

import { TabsProps } from './types';

function Tabs(props: TabsProps) {
  const [selected, setSelected] = useState(0);

  const { SelectedButton } = props;
  const { UnselectedButton } = props;

  return (
    <>
      <div id="tab-buttons" className="flex overflow-auto">
        {props.data.map((item, index) => {
          if (index === selected)
            return (
              <SelectedButton key={index} onClick={() => setSelected(index)}>
                {item.title}
              </SelectedButton>
            );
          return (
            <UnselectedButton key={index} onClick={() => setSelected(index)}>
              {item.title}
            </UnselectedButton>
          );
        })}
      </div>
      <div id="tab-content">
        {props.data.map((item, index) => {
          if (index === selected) return <div key={index}>{item.content}</div>;
          return (
            <div key={index} className="hidden">
              {item.content}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tabs;
