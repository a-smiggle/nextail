import React, { ReactElement } from 'react';

import createStylings from '../stylings';
import AccordionEntry from './AccordionEntry';
import { AccordionProps } from './types';

function Accordion(props: AccordionProps): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings && !props.flush) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings.border.borderWidth
      : 'border';
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings.border.borderRadius
      : 'rounded-md';
  }
  return (
    <div
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      {props.data.map((data) => (
        <AccordionEntry
          titleStylings={props.titleStylings}
          titleActiveStylings={props.titleActiveStylings}
          childStylings={props.childStylings}
          key={data.title}
          data={data}
        />
      ))}
    </div>
  );
}

export default Accordion;
