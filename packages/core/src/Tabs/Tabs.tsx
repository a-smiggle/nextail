import React, { Fragment, ReactElement, useState } from 'react';

import createStylings from '../stylings';
import { TabsProps } from './types';

function Tabs(props: TabsProps): ReactElement {
  const [selected, setSelected] = useState(0);

  const { SelectedButton } = props;
  const { UnselectedButton } = props;

  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'flex flex-row';
    mainStylings.layout.overflow = props.mainStylings?.layout?.overflow
      ? props.mainStylings.layout.overflow
      : 'overflow-auto';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.spaceBetween = props.mainStylings?.spacing
      ?.spaceBetween
      ? props.mainStylings.spacing.spaceBetween
      : '-space-x-2';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings.border.borderColor
      : 'border-slate-300 dark:border-slate-300';
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings.border.borderWidth
      : 'border-b-2';
  }

  return (
    <Fragment>
      <div
        id="tab-buttons"
        className={
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        }
      >
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
      <div id="tab-content" className="w-full">
        {props.data.map((item, index) => {
          if (index === selected) return <div key={index}>{item.content}</div>;
          return (
            <div key={index} className="hidden">
              {item.content}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Tabs;
