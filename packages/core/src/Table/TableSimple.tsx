import React from 'react';

import createStylings from '../stylings';
import { TableProps } from './types';

function TableSimple(props: TableProps) {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'table';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings.border.borderRadius
      : 'rounded-lg';

    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.padding = props.mainStylings?.spacing?.padding
      ? props.mainStylings.spacing.padding
      : 'p-4';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-gray-800';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings.text.textColor
      : 'text-black dark:text-slate-300';
    if (!mainStylings.effect) mainStylings.effect = {};
    mainStylings.effect.boxShadow = props.mainStylings?.effect?.boxShadow
      ? props.mainStylings.effect.boxShadow
      : 'shadow';
  }

  const titleStylings = props.titleStylings ? props.titleStylings : {};
  if (titleStylings) {
    if (!titleStylings.border) titleStylings.border = {};
    titleStylings.border.borderWidth = props.titleStylings?.border?.borderWidth
      ? props.titleStylings.border.borderWidth
      : `${props.border ? 'border' : 'border-b-2'}`;
    titleStylings.border.borderColor = props.titleStylings?.border?.borderColor
      ? props.titleStylings.border.borderColor
      : 'dark:border-slate-300/10';

    if (!titleStylings.spacing) titleStylings.spacing = {};
    titleStylings.spacing.padding = props.titleStylings?.spacing?.padding
      ? props.titleStylings.spacing.padding
      : 'p-4';
    if (!titleStylings.text) titleStylings.text = {};
    titleStylings.text.textColor = props.titleStylings?.text?.textColor
      ? props.titleStylings.text.textColor
      : 'text-black dark:text-slate-400';
    titleStylings.text.fontWeight = props.titleStylings?.text?.fontWeight
      ? props.titleStylings.text.fontWeight
      : 'font-bold';
    titleStylings.text.whitespace = props.titleStylings?.text?.whitespace
      ? props.titleStylings.text.whitespace
      : 'whitespace-nowrap';
  }

  const bodyStylings = props.bodyStylings ? props.bodyStylings : {};
  if (bodyStylings) {
    if (!bodyStylings.border) bodyStylings.border = {};
    bodyStylings.border.borderWidth = props.bodyStylings?.border?.borderWidth
      ? props.bodyStylings.border.borderWidth
      : `${props.border ? 'border' : 'border-b-2'}`;
    bodyStylings.border.borderColor = props.bodyStylings?.border?.borderColor
      ? props.bodyStylings.border.borderColor
      : 'dark:border-slate-300/10';
    if (!bodyStylings.spacing) bodyStylings.spacing = {};
    bodyStylings.spacing.padding = props.bodyStylings?.spacing?.padding
      ? props.bodyStylings.spacing.padding
      : 'p-4';
    if (!bodyStylings.text) bodyStylings.text = {};
    bodyStylings.text.textColor = props.bodyStylings?.text?.textColor
      ? props.bodyStylings.text.textColor
      : 'text-black dark:text-slate-400';
  }

  return (
    <table
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      <thead>
        <tr>
          {props.titles.map((item, index) => (
            <th
              key={`title-${index}`}
              className={
                props.titleStylings?.className
                  ? props.titleStylings.className
                  : createStylings(titleStylings)
              }
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((item: any, index: number) => {
          return (
            <tr key={index}>
              {item?.map((entry: any, entryIndex: number) => (
                <td
                  key={`body-${index}-${entryIndex}`}
                  className={
                    props.bodyStylings?.className
                      ? props.bodyStylings.className
                      : createStylings(bodyStylings)
                  }
                >
                  {entry}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableSimple;
