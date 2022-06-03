import Button from '@nextail/core/Button';
import CodeSnippet from '@nextail/core/CodeSnippet';
import { TableSimple } from '@nextail/core/Table';
import Tabs from '@nextail/core/Tabs';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const Customise: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Customisation</h1>
          <div className="p-4">
            <Tabs
              mainStylings={{
                border: {
                  borderColor: 'border-emerald-200 dark:border-emerald-500',
                },
              }}
              SelectedButton={SelectedButton}
              UnselectedButton={UnSelectedButton}
              data={[
                {
                  title: 'Overview',
                  content: (
                    <>
                      <p className="pt-4 font-light">
                        For a detailed list of styling props check the
                        individual component documentation.
                      </p>
                      <p className="pt-4">
                        Nextail Components are semi-styled and allows styling
                        props to be passed. A component may have multiple
                        styling props that can be customised changing the
                        default styling.
                      </p>
                      <p className="pt-2">
                        These styling props are TailwindStylings type. This
                        comprises of different types that make up the Tailwind
                        CSS groupings seen in the Tailwind CSS documentation.
                        For example layout, border, flexboxGrid etc.
                      </p>
                      <p className="pt-2">
                        Each styling props also contains a className string,
                        that can be used to override all stylings.
                      </p>
                    </>
                  ),
                },
                {
                  title: 'Styling Properties',
                  content: (
                    <Tabs
                      mainStylings={{
                        spacing: { padding: 'pt-4' },
                        border: {
                          borderColor:
                            'border-emerald-200 dark:border-emerald-500',
                        },
                      }}
                      SelectedButton={SelectedButton}
                      UnselectedButton={UnSelectedButton}
                      data={[
                        {
                          title: 'TailwindStylings',
                          content: (
                            <>
                              <h2 className="py-4">TailwindStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type']}
                                  rows={[
                                    ['className', 'string'],
                                    ['layout', 'LayoutStylings'],
                                    ['flexboxGrid', 'FlexboxGridStylings'],
                                    ['spacing', 'SpacingStylings'],
                                    ['sizing', 'SizingStylings'],
                                    ['text', 'TypographyStyling'],
                                    ['background', 'BackgroundStylings'],
                                    ['border', 'BorderStylings'],
                                    ['effect', 'EffectStylings'],
                                    ['filter', 'FilterStylings'],
                                    ['table', 'TableStylings'],
                                    [
                                      'transitionAnimation',
                                      'TransitionAnimationStylings',
                                    ],
                                    ['transform', 'TransformStylings'],
                                    ['interactivity', 'InteractivityStylings'],
                                    ['svg', 'SvgStylings'],
                                    ['accessibility', 'AccessibilityStylings'],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'LayoutStylings',
                          content: (
                            <>
                              <h2 className="py-4">LayoutStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'aspectRatio',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'aspect-ratio-docs'}
                                        href="https://tailwindcss.com/docs/aspect-ratio"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Aspect Ratio
                                      </a>,
                                    ],
                                    [
                                      'container',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'container-docs'}
                                        href="https://tailwindcss.com/docs/container"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Container
                                      </a>,
                                    ],
                                    [
                                      'columns',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'columns-docs'}
                                        href="https://tailwindcss.com/docs/columns"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Columns
                                      </a>,
                                    ],
                                    [
                                      'breakAfter',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'break-after-docs'}
                                        href="https://tailwindcss.com/docs/break-after"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Break After
                                      </a>,
                                    ],
                                    [
                                      'breakBefore',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'break-before-docs'}
                                        href="https://tailwindcss.com/docs/break-before"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Break Before
                                      </a>,
                                    ],
                                    [
                                      'breakInside',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'break-inside-docs'}
                                        href="https://tailwindcss.com/docs/break-inside"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Break Inside
                                      </a>,
                                    ],
                                    [
                                      'boxDecorationBreak',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'box-decoration-break-docs'}
                                        href="https://tailwindcss.com/docs/box-decoration-break"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Box Decoration Break
                                      </a>,
                                    ],
                                    [
                                      'boxSizing',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'box-sizing-docs'}
                                        href="https://tailwindcss.com/docs/box-sizing"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Box Sizing
                                      </a>,
                                    ],
                                    [
                                      'display',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'display-docs'}
                                        href="https://tailwindcss.com/docs/display"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Display
                                      </a>,
                                    ],
                                    [
                                      'float',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'float-docs'}
                                        href="https://tailwindcss.com/docs/float"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Float
                                      </a>,
                                    ],
                                    [
                                      'clear',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'clear-docs'}
                                        href="https://tailwindcss.com/docs/clear"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Clear
                                      </a>,
                                    ],
                                    [
                                      'isolation',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'isolation-docs'}
                                        href="https://tailwindcss.com/docs/isolation"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Isolation
                                      </a>,
                                    ],
                                    [
                                      'objectFit',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'object-fit-docs'}
                                        href="https://tailwindcss.com/docs/object-fit"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Object Fit
                                      </a>,
                                    ],
                                    [
                                      'objectPosition',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'object-position-docs'}
                                        href="https://tailwindcss.com/docs/object-position"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Object Position
                                      </a>,
                                    ],
                                    [
                                      'overflow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'overflow-docs'}
                                        href="https://tailwindcss.com/docs/overflow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Overflow
                                      </a>,
                                    ],
                                    [
                                      'overflowBehavior',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'overflow-behavior-docs'}
                                        href="https://tailwindcss.com/docs/overflow-behavior"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Overflow Behavior
                                      </a>,
                                    ],
                                    [
                                      'position',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'position-docs'}
                                        href="https://tailwindcss.com/docs/position"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Position
                                      </a>,
                                    ],
                                    [
                                      'top',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'top--docs'}
                                        href="https://tailwindcss.com/docs/top-right-bottom-left"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Top/ Right / Bottom / Left
                                      </a>,
                                    ],
                                    [
                                      'bottom',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'bottom-docs'}
                                        href="https://tailwindcss.com/docs/top-right-bottom-left"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Top/ Right / Bottom / Left
                                      </a>,
                                    ],
                                    [
                                      'left',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'left-docs'}
                                        href="https://tailwindcss.com/docs/top-right-bottom-left"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Top/ Right / Bottom / Left
                                      </a>,
                                    ],
                                    [
                                      'right',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'right-docs'}
                                        href="https://tailwindcss.com/docs/top-right-bottom-left"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Top/ Right / Bottom / Left
                                      </a>,
                                    ],
                                    [
                                      'inset',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'inset-docs'}
                                        href="https://tailwindcss.com/docs/inset"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Inset
                                      </a>,
                                    ],
                                    [
                                      'visibility',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'visibility-docs'}
                                        href="https://tailwindcss.com/docs/visibilty"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Visibility
                                      </a>,
                                    ],
                                    [
                                      'zIndex',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'z-index-docs'}
                                        href="https://tailwindcss.com/docs/z-index"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Z-Index
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'FlexboxGridStylings',
                          content: (
                            <>
                              <h2 className="py-4">FlexboxGridStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'flexBasis',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'flex-basis-docs'}
                                        href="https://tailwindcss.com/docs/flex-basis"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Flex Basis
                                      </a>,
                                    ],
                                    [
                                      'flexDirection',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'flex-direction-docs'}
                                        href="https://tailwindcss.com/docs/flex-direction"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Flex Direction
                                      </a>,
                                    ],
                                    [
                                      'flexWrap',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'flex-wrap-docs'}
                                        href="https://tailwindcss.com/docs/flex-wrap"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Flex Wrap
                                      </a>,
                                    ],
                                    [
                                      'breakAfter',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'break-after-docs'}
                                        href="https://tailwindcss.com/docs/break-after"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Break After
                                      </a>,
                                    ],
                                    [
                                      'flex',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'flex-docs'}
                                        href="https://tailwindcss.com/docs/flex"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Flex
                                      </a>,
                                    ],
                                    [
                                      'flexGrow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'flex-grow-docs'}
                                        href="https://tailwindcss.com/docs/flex-grow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Flex Grow
                                      </a>,
                                    ],
                                    [
                                      'flexShrink',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'flex-shrink-docs'}
                                        href="https://tailwindcss.com/docs/flex-shrink"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Flex Shrink
                                      </a>,
                                    ],
                                    [
                                      'order',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'order-docs'}
                                        href="https://tailwindcss.com/docs/order"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Order
                                      </a>,
                                    ],
                                    [
                                      'gridTemplateColumns',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gridTemplateColumns-docs'}
                                        href="https://tailwindcss.com/docs/grid-template-columns"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Grid Template Columns
                                      </a>,
                                    ],
                                    [
                                      'gridColumnStartEnd',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gridColumnStartEnd-docs'}
                                        href="https://tailwindcss.com/docs/grid-column-start-end"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Grid Column Start End
                                      </a>,
                                    ],
                                    [
                                      'gridTemplateRows',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gridTemplateRows-docs'}
                                        href="https://tailwindcss.com/docs/grid-template-rows"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Grid Template Rows
                                      </a>,
                                    ],
                                    [
                                      'gridRowStartEnd',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gridRowStartEnd-docs'}
                                        href="https://tailwindcss.com/docs/grid-row-start-end"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Grid Row Start End
                                      </a>,
                                    ],
                                    [
                                      'gridAutoFlow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gridAutoFlow-docs'}
                                        href="https://tailwindcss.com/docs/grid-auto-flow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Grid Auto Flow
                                      </a>,
                                    ],
                                    [
                                      'gridAutoColumns',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gridAutoColumns-docs'}
                                        href="https://tailwindcss.com/docs/grid-auto-columns"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Grid Auto Columns
                                      </a>,
                                    ],
                                    [
                                      'overflow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'overflow-docs'}
                                        href="https://tailwindcss.com/docs/overflow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Overflow
                                      </a>,
                                    ],
                                    [
                                      'gridAutoRows',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gridAutoRows-docs'}
                                        href="https://tailwindcss.com/docs/grid-auto-rows"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Grid Auto Rows
                                      </a>,
                                    ],
                                    [
                                      'gap',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gap-docs'}
                                        href="https://tailwindcss.com/docs/gap"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Gap
                                      </a>,
                                    ],
                                    [
                                      'justifyContent',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'justifyContent-docs'}
                                        href="https://tailwindcss.com/docs/justify-content"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Justify Content
                                      </a>,
                                    ],
                                    [
                                      'justifyItems',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'justifyItems-docs'}
                                        href="https://tailwindcss.com/docs/justify-items"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Justify Items
                                      </a>,
                                    ],
                                    [
                                      'justifySelf',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'justifySelf-docs'}
                                        href="https://tailwindcss.com/docs/justify-self"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Justify Self
                                      </a>,
                                    ],
                                    [
                                      'alignContent',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'alignContent-docs'}
                                        href="https://tailwindcss.com/docs/alignContent"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Align Content
                                      </a>,
                                    ],
                                    [
                                      'alignItems',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'alignItems-docs'}
                                        href="https://tailwindcss.com/docs/align-items"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Align Items
                                      </a>,
                                    ],
                                    [
                                      'alignSelf',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'alignSelf-docs'}
                                        href="https://tailwindcss.com/docs/align-self"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Align Self
                                      </a>,
                                    ],
                                    [
                                      'placeContent',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'placeContent-docs'}
                                        href="https://tailwindcss.com/docs/place-content"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Place Content
                                      </a>,
                                    ],
                                    [
                                      'placeItems',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'placeItems-docs'}
                                        href="https://tailwindcss.com/docs/place-items"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Place Items
                                      </a>,
                                    ],
                                    [
                                      'placeSelf',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'placeSelf-docs'}
                                        href="https://tailwindcss.com/docs/place-self"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Place Self
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'SpacingStylings',
                          content: (
                            <>
                              <h2 className="py-4">SpacingStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'padding',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'padding-docs'}
                                        href="https://tailwindcss.com/docs/padding"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Padding
                                      </a>,
                                    ],
                                    [
                                      'margin',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'margin-docs'}
                                        href="https://tailwindcss.com/docs/margin"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Margin
                                      </a>,
                                    ],
                                    [
                                      'spaceBetween',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'spaceBetween-docs'}
                                        href="https://tailwindcss.com/docs/space-between"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Space Between
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'SizingStylings',
                          content: (
                            <>
                              <h2 className="py-4">SizingStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'width',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'width-docs'}
                                        href="https://tailwindcss.com/docs/width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Width
                                      </a>,
                                    ],
                                    [
                                      'minWidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'minWidth-docs'}
                                        href="https://tailwindcss.com/docs/min-width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Min Width
                                      </a>,
                                    ],
                                    [
                                      'maxWidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'maxWidth-docs'}
                                        href="https://tailwindcss.com/docs/max-width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Max Width
                                      </a>,
                                    ],
                                    [
                                      'height',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'height-docs'}
                                        href="https://tailwindcss.com/docs/height"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Height
                                      </a>,
                                    ],
                                    [
                                      'minHeight',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'minHeight-docs'}
                                        href="https://tailwindcss.com/docs/minHeight"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Min Height
                                      </a>,
                                    ],
                                    [
                                      'maxHeight',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'maxHeight-docs'}
                                        href="https://tailwindcss.com/docs/max-height"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Max Height
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'TypographyStyling',
                          content: (
                            <>
                              <h2 className="py-4">TypographyStyling</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'fontFamily',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'fontFamily-docs'}
                                        href="https://tailwindcss.com/docs/font-family"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Font Family
                                      </a>,
                                    ],
                                    [
                                      'fontSize',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'fontSize-docs'}
                                        href="https://tailwindcss.com/docs/font-size"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Font Size
                                      </a>,
                                    ],
                                    [
                                      'fontSmoothing',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'fontSmoothing-docs'}
                                        href="https://tailwindcss.com/docs/fontSmoothing"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Font Smoothing
                                      </a>,
                                    ],
                                    [
                                      'fontStyle',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'fontStyle-docs'}
                                        href="https://tailwindcss.com/docs/font-style"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Font Style
                                      </a>,
                                    ],
                                    [
                                      'fontWeight',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'fontWeight-docs'}
                                        href="https://tailwindcss.com/docs/font-weight"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Font Weight
                                      </a>,
                                    ],
                                    [
                                      'flexGrow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'flex-grow-docs'}
                                        href="https://tailwindcss.com/docs/flex-grow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Flex Grow
                                      </a>,
                                    ],
                                    [
                                      'fontVariantNumeric',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'fontVariantNumeric-docs'}
                                        href="https://tailwindcss.com/docs/font-variant-numeric"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Font Variant Numeric
                                      </a>,
                                    ],
                                    [
                                      'letterSpacing',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'letterSpacing-docs'}
                                        href="https://tailwindcss.com/docs/letterSpacing"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Letter Spacing
                                      </a>,
                                    ],
                                    [
                                      'lineHeight',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'lineHeight-docs'}
                                        href="https://tailwindcss.com/docs/line-height"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Line Height
                                      </a>,
                                    ],
                                    [
                                      'listStyleExportType',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'listStyleExportType-docs'}
                                        href="https://tailwindcss.com/docs/list-style-export-type"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        List Style Export Type
                                      </a>,
                                    ],
                                    [
                                      'listStylePosition',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'listStylePosition-docs'}
                                        href="https://tailwindcss.com/docs/list-style-position"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        List Style Position
                                      </a>,
                                    ],
                                    [
                                      'textAlign',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textAlign-docs'}
                                        href="https://tailwindcss.com/docs/text-align"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Align
                                      </a>,
                                    ],
                                    [
                                      'textColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textColor-docs'}
                                        href="https://tailwindcss.com/docs/text-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Color
                                      </a>,
                                    ],
                                    [
                                      'textDecoration',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textDecoration-docs'}
                                        href="https://tailwindcss.com/docs/text-decoration"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Decoration
                                      </a>,
                                    ],
                                    [
                                      'textDecorationColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textDecorationColor-docs'}
                                        href="https://tailwindcss.com/docs/textDecorationColor"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text DecorationColor
                                      </a>,
                                    ],
                                    [
                                      'textDecorationStyle',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textDecorationStyle-docs'}
                                        href="https://tailwindcss.com/docs/text-decoration-style"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Decoration Style
                                      </a>,
                                    ],
                                    [
                                      'textDecorationThickness',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textDecorationThickness-docs'}
                                        href="https://tailwindcss.com/docs/text-decoration-thickness"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Decoration Thickness
                                      </a>,
                                    ],
                                    [
                                      'textUnderlineOffset',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textUnderlineOffset-docs'}
                                        href="https://tailwindcss.com/docs/text-underline-offset"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Underline Offset
                                      </a>,
                                    ],
                                    [
                                      'textTransform',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textTransform-docs'}
                                        href="https://tailwindcss.com/docs/text-transform"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Transform
                                      </a>,
                                    ],
                                    [
                                      'textOverflow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textOverflow-docs'}
                                        href="https://tailwindcss.com/docs/text-overflow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Overflow
                                      </a>,
                                    ],
                                    [
                                      'textIndent',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'textIndent-docs'}
                                        href="https://tailwindcss.com/docs/text-indent"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Text Indent
                                      </a>,
                                    ],
                                    [
                                      'verticalAlign',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'verticalAlign-docs'}
                                        href="https://tailwindcss.com/docs/vertical-align"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Vertical Align
                                      </a>,
                                    ],
                                    [
                                      'whitespace',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'whitespace-docs'}
                                        href="https://tailwindcss.com/docs/whitespace"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Whitespace
                                      </a>,
                                    ],
                                    [
                                      'wordBreak',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'wordBreak-docs'}
                                        href="https://tailwindcss.com/docs/word-break"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Word Break
                                      </a>,
                                    ],
                                    [
                                      'content',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'content-docs'}
                                        href="https://tailwindcss.com/docs/content"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Content
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'BackgroundStylings',
                          content: (
                            <>
                              <h2 className="py-4">BackgroundStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'backgroundAttachment',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundAttachment-docs'}
                                        href="https://tailwindcss.com/docs/background-attachment"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Attachment
                                      </a>,
                                    ],
                                    [
                                      'backgroundClip',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundClip-docs'}
                                        href="https://tailwindcss.com/docs/background-clip"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Clip
                                      </a>,
                                    ],
                                    [
                                      'backgroundColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundColor-docs'}
                                        href="https://tailwindcss.com/docs/background-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Color
                                      </a>,
                                    ],
                                    [
                                      'backgroundOrigin',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundOrigin-docs'}
                                        href="https://tailwindcss.com/docs/backgroundOrigin"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Origin
                                      </a>,
                                    ],
                                    [
                                      'backgroundPosition',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundPosition-docs'}
                                        href="https://tailwindcss.com/docs/background-position"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Position
                                      </a>,
                                    ],
                                    [
                                      'backgroundRepeat',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundRepeat-docs'}
                                        href="https://tailwindcss.com/docs/background-repeat"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Repeat
                                      </a>,
                                    ],
                                    [
                                      'backgroundSize',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundSize-docs'}
                                        href="https://tailwindcss.com/docs/background-size"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Size
                                      </a>,
                                    ],
                                    [
                                      'backgroundImage',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundImage-docs'}
                                        href="https://tailwindcss.com/docs/background-image"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Image
                                      </a>,
                                    ],
                                    [
                                      'gradientColorStops',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'gradientColorStops-docs'}
                                        href="https://tailwindcss.com/docs/gradient-color-stops"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Gradient Color Stops
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'BorderStylings',
                          content: (
                            <>
                              <h2 className="py-4">BorderStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'borderRadius',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'borderRadius-docs'}
                                        href="https://tailwindcss.com/docs/border-radius"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Border Radius
                                      </a>,
                                    ],
                                    [
                                      'borderwidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'borderWidth-docs'}
                                        href="https://tailwindcss.com/docs/border-width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Border Width
                                      </a>,
                                    ],
                                    [
                                      'borderColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'borderColor-docs'}
                                        href="https://tailwindcss.com/docs/border-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Border Color
                                      </a>,
                                    ],
                                    [
                                      'borderStyle',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'borderStyle-docs'}
                                        href="https://tailwindcss.com/docs/border-style"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Border Style
                                      </a>,
                                    ],
                                    [
                                      'divideWidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'divideWidth-docs'}
                                        href="https://tailwindcss.com/docs/divide-width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Divide Width
                                      </a>,
                                    ],
                                    [
                                      'divideColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'divideColor-docs'}
                                        href="https://tailwindcss.com/docs/divide-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Divide Color
                                      </a>,
                                    ],
                                    [
                                      'divideStyle',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'divideStyle-docs'}
                                        href="https://tailwindcss.com/docs/divide-style"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Divide Style
                                      </a>,
                                    ],
                                    [
                                      'outlineWidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'outlineWidth-docs'}
                                        href="https://tailwindcss.com/docs/outline-width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Outline Width
                                      </a>,
                                    ],
                                    [
                                      'outlineColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'outlineColor-docs'}
                                        href="https://tailwindcss.com/docs/outline-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Outline Color
                                      </a>,
                                    ],
                                    [
                                      'outlineStyle',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'outlineStyle-docs'}
                                        href="https://tailwindcss.com/docs/outline-style"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Outline Style
                                      </a>,
                                    ],
                                    [
                                      'outlineOffset',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'outlineOffset-docs'}
                                        href="https://tailwindcss.com/docs/outline-offset"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Outline Offset
                                      </a>,
                                    ],
                                    [
                                      'ringWidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'ringWidth-docs'}
                                        href="https://tailwindcss.com/docs/ring-width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Ring Width
                                      </a>,
                                    ],
                                    [
                                      'ringColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'ringColor-docs'}
                                        href="https://tailwindcss.com/docs/ring-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Ring Color
                                      </a>,
                                    ],
                                    [
                                      'ringOffsetWidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'ringOffsetWidth-docs'}
                                        href="https://tailwindcss.com/docs/ring-offsetwidth"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Ring Offset Width
                                      </a>,
                                    ],
                                    [
                                      'ringOffsetColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'ringOffsetColor-docs'}
                                        href="https://tailwindcss.com/docs/ring-offset-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Ring Offset Color
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'EffectStylings',
                          content: (
                            <>
                              <h2 className="py-4">EffectStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'boxShadow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'boxShadow-docs'}
                                        href="https://tailwindcss.com/docs/box-shadow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Box Shadow
                                      </a>,
                                    ],
                                    [
                                      'boxShadowColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'boxShadowColor-docs'}
                                        href="https://tailwindcss.com/docs/box-shadow-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Box Shadow Color
                                      </a>,
                                    ],
                                    [
                                      'opacity',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'opacity-docs'}
                                        href="https://tailwindcss.com/docs/opacity"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Opacity
                                      </a>,
                                    ],
                                    [
                                      'mixBlendMode',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'mixBlendMode-docs'}
                                        href="https://tailwindcss.com/docs/mix-blend-mode"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Mix Blend Mode
                                      </a>,
                                    ],
                                    [
                                      'backgroundBlendMode',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backgroundBlendMode-docs'}
                                        href="https://tailwindcss.com/docs/background-blend-mode"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Background Blend Mode
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'FilterStylings',
                          content: (
                            <>
                              <h2 className="py-4">FilterStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'blur',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'blur-docs'}
                                        href="https://tailwindcss.com/docs/blur"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Blur
                                      </a>,
                                    ],
                                    [
                                      'brightness',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'brightness-docs'}
                                        href="https://tailwindcss.com/docs/brightness"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Brightness
                                      </a>,
                                    ],
                                    [
                                      'contrast',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'contrast-docs'}
                                        href="https://tailwindcss.com/docs/contrast"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Contrast
                                      </a>,
                                    ],
                                    [
                                      'dropShadow',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'dropShadow-docs'}
                                        href="https://tailwindcss.com/docs/drop-shadow"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Drop Shadow
                                      </a>,
                                    ],
                                    [
                                      'hueRotate',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'hueRotate-docs'}
                                        href="https://tailwindcss.com/docs/hue-rotate"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Hue Rotate
                                      </a>,
                                    ],
                                    [
                                      'invert',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'invert-docs'}
                                        href="https://tailwindcss.com/docs/invert"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Invert
                                      </a>,
                                    ],
                                    [
                                      'saturate',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'saturate-docs'}
                                        href="https://tailwindcss.com/docs/saturate"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Saturate
                                      </a>,
                                    ],
                                    [
                                      'sepia',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'sepia-docs'}
                                        href="https://tailwindcss.com/docs/sepia"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Sepia
                                      </a>,
                                    ],
                                    [
                                      'backdropBlur',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropBlur-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-blur"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Blur
                                      </a>,
                                    ],
                                    [
                                      'backdropBrightness',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropBrightness-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-brightness"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Brightness
                                      </a>,
                                    ],
                                    [
                                      'backdropContrast',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropContrast-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-contrast"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Contrast
                                      </a>,
                                    ],
                                    [
                                      'backdropGrayscale',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropGrayscale-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-grayscale"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Grayscale
                                      </a>,
                                    ],
                                    [
                                      'backdropHueRotate',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropHueRotate-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-hue-rotate"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Hue Rotate
                                      </a>,
                                    ],
                                    [
                                      'backdropInvert',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropInvert-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-invert"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Invert
                                      </a>,
                                    ],
                                    [
                                      'backdropOpacity',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropOpacity-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-opacity"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Opacity
                                      </a>,
                                    ],
                                    [
                                      'backdropSaturate',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropSaturate-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-saturate"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Saturate
                                      </a>,
                                    ],
                                    [
                                      'backdropSepia',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'backdropSepia-docs'}
                                        href="https://tailwindcss.com/docs/backdrop-sepia"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Backdrop Sepia
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'TableStylings',
                          content: (
                            <>
                              <h2 className="py-4">TableStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'borderCollapse',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'borderCollapse-docs'}
                                        href="https://tailwindcss.com/docs/border-collapse"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Border Collapse
                                      </a>,
                                    ],
                                    [
                                      'tableLayout',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'tableLayout-docs'}
                                        href="https://tailwindcss.com/docs/table-layout"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Table Layout
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'TransitionAnimationStylings',
                          content: (
                            <>
                              <h2 className="py-4">
                                TransitionAnimationStylings
                              </h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'transitionProperty',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'transitionProperty-docs'}
                                        href="https://tailwindcss.com/docs/transition-property"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Transition Property
                                      </a>,
                                    ],
                                    [
                                      'transitionDuration',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'transitionDuration-docs'}
                                        href="https://tailwindcss.com/docs/transition-duration"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Transition Duration
                                      </a>,
                                    ],
                                    [
                                      'transitionTimingFunction',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'transitionTimingFunction-docs'}
                                        href="https://tailwindcss.com/docs/transition-timing-function"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Transition Timing Function
                                      </a>,
                                    ],
                                    [
                                      'transitionDelay',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'transitionDelay-docs'}
                                        href="https://tailwindcss.com/docs/transition-delay"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Transition Delay
                                      </a>,
                                    ],
                                    [
                                      'animation',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'animation-docs'}
                                        href="https://tailwindcss.com/docs/animation"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Animation
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'TransformStylings',
                          content: (
                            <>
                              <h2 className="py-4">TransformStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'scale',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'scale-docs'}
                                        href="https://tailwindcss.com/docs/scale"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Scale
                                      </a>,
                                    ],
                                    [
                                      'rotate',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'rotate-docs'}
                                        href="https://tailwindcss.com/docs/rotate"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Rotate
                                      </a>,
                                    ],
                                    [
                                      'translate',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'translate-docs'}
                                        href="https://tailwindcss.com/docs/translate"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Translate
                                      </a>,
                                    ],
                                    [
                                      'skew',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'skew-docs'}
                                        href="https://tailwindcss.com/docs/skew"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Skew
                                      </a>,
                                    ],
                                    [
                                      'transform',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'transform-docs'}
                                        href="https://tailwindcss.com/docs/transform"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Transform
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'InteractivityStylings',
                          content: (
                            <>
                              <h2 className="py-4">InteractivityStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'accentColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'accentColor-docs'}
                                        href="https://tailwindcss.com/docs/accent-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Accent Color
                                      </a>,
                                    ],
                                    [
                                      'appearance',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'appearance-docs'}
                                        href="https://tailwindcss.com/docs/appearance"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Appearance
                                      </a>,
                                    ],
                                    [
                                      'cursor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'cursor-docs'}
                                        href="https://tailwindcss.com/docs/cursor"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Cursor
                                      </a>,
                                    ],
                                    [
                                      'caretColor',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'caretColor-docs'}
                                        href="https://tailwindcss.com/docs/caret-color"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Caret Color
                                      </a>,
                                    ],
                                    [
                                      'pointerEvents',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'pointerEvents-docs'}
                                        href="https://tailwindcss.com/docs/pointer-events"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Pointer Events
                                      </a>,
                                    ],
                                    [
                                      'resize',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'resize-docs'}
                                        href="https://tailwindcss.com/docs/resize"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Resize
                                      </a>,
                                    ],
                                    [
                                      'scrollBehavior',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'scrollBehavior-docs'}
                                        href="https://tailwindcss.com/docs/scroll-behavior"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Scroll Behavior
                                      </a>,
                                    ],
                                    [
                                      'scrollMargin',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'scrollMargin-docs'}
                                        href="https://tailwindcss.com/docs/scroll-margin"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Scroll Margin
                                      </a>,
                                    ],
                                    [
                                      'scrollPadding',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'scrollPadding-docs'}
                                        href="https://tailwindcss.com/docs/scroll-padding"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Scroll Padding
                                      </a>,
                                    ],
                                    [
                                      'scrollSnapAlign',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'scrollSnapAlign-docs'}
                                        href="https://tailwindcss.com/docs/scroll-snap-align"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Scroll Snap Align
                                      </a>,
                                    ],
                                    [
                                      'scrollSnapStop',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'scrollSnapStop-docs'}
                                        href="https://tailwindcss.com/docs/scroll-snap-stop"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Scroll Snap Stop
                                      </a>,
                                    ],
                                    [
                                      'scrollSnapExportType',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'scrollSnapExportType-docs'}
                                        href="https://tailwindcss.com/docs/scroll-snap-export-type"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Scroll Snap Export Type
                                      </a>,
                                    ],
                                    [
                                      'touchAction',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'touchAction-docs'}
                                        href="https://tailwindcss.com/docs/touch-action"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Touch Action
                                      </a>,
                                    ],
                                    [
                                      'userSelect',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'userSelect-docs'}
                                        href="https://tailwindcss.com/docs/user-select"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        User Select
                                      </a>,
                                    ],
                                    [
                                      'willChange',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'willChange-docs'}
                                        href="https://tailwindcss.com/docs/willChange"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Will Change
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'SvgStylings',
                          content: (
                            <>
                              <h2 className="py-4">SvgStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'fill',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'fill-docs'}
                                        href="https://tailwindcss.com/docs/fill"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Fill
                                      </a>,
                                    ],
                                    [
                                      'stroke',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'stroke-docs'}
                                        href="https://tailwindcss.com/docs/stroke"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Stroke
                                      </a>,
                                    ],
                                    [
                                      'strokeWidth',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'strokeWidth-docs'}
                                        href="https://tailwindcss.com/docs/stroke-width"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Stroke Width
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'AccessibilityStylings',
                          content: (
                            <>
                              <h2 className="py-4">AccessibilityStylings</h2>
                              <p>All optional.</p>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Documentation']}
                                  rows={[
                                    [
                                      'screenReaders',
                                      'string',
                                      <a
                                        target="_blank"
                                        key={'screenReaders-docs'}
                                        href="https://tailwindcss.com/docs/screen-readers"
                                        className="text-emerald-500 underline"
                                        rel="noreferrer"
                                      >
                                        Screen Readers
                                      </a>,
                                    ],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Example',
                  content: (
                    <Tabs
                      mainStylings={{
                        spacing: { padding: 'pt-4' },
                        border: {
                          borderColor:
                            'border-emerald-200 dark:border-emerald-500',
                        },
                      }}
                      SelectedButton={SelectedButton}
                      UnselectedButton={UnSelectedButton}
                      data={[
                        {
                          title: 'Tailwind Stylings',
                          content: (
                            <>
                              <h2 className="py-4">
                                Customising With TailwindStylings
                              </h2>
                              <p>Example use the Nextail Button Component.</p>
                              <CodeSnippet
                                data={`import Button from '@nextail/core/Button
import { NextPage } from 'next';
import React from 'react';

const ButtonPage: NextPage = () => {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="flex justify-between p-2">
        <Button
        mainStylings={{
          border: { borderRadius: 'rounded-full' },
          background: { backgroundColor: 'bg-emerald-500' },
          text: { textColor: 'text-white' },
          filter: { invert: 'hover:invert' },
        }}
        >
          Hey
        </Button>
      </div>
    </div>
    );
  };
  
  export default ButtonPage;`}
                              />
                              <h2 className="py-4">Output is:</h2>
                              <Button
                                mainStylings={{
                                  border: { borderRadius: 'rounded-full' },
                                  background: {
                                    backgroundColor: 'bg-emerald-500',
                                  },
                                  text: { textColor: 'text-white' },
                                  filter: { invert: 'hover:invert' },
                                }}
                              >
                                Hey
                              </Button>
                            </>
                          ),
                        },
                        {
                          title: 'ClassName Override',
                          content: (
                            <>
                              <h2 className="py-4">
                                Overriding styling with className
                              </h2>
                              <p>Example use the Nextail Button Component.</p>
                              <CodeSnippet
                                data={`import Button from '@nextail/core/Button
import { NextPage } from 'next';
import React from 'react';

const ButtonPage: NextPage = () => {
return (
  <div className="h-screen w-full bg-slate-400">
    <div className="flex justify-between p-2">
      <Button
        mainStylings={{
          className:
            'px-6 py-2 text-center uppercase leading-light font-medium 
            text-xs shadow-md rounded-full bg-emerald-500 inline-block 
            text-white hover:invert',
        }}
      >
        Hey
      </Button>
    </div>
  </div>
  );
};

export default ButtonPage;`}
                              />
                              <h2 className="py-4">Output is:</h2>
                              <Button
                                mainStylings={{
                                  className:
                                    'px-6 py-2 text-center uppercase leading-light font-medium text-xs shadow-md rounded-full bg-emerald-500 inline-block text-white hover:invert',
                                }}
                              >
                                Hey
                              </Button>
                            </>
                          ),
                        },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Customise;
