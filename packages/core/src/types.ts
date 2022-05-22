import { ReactNode } from 'react';

export type LayoutStylings = {
  aspectRatio?: string;
  conatiner?: string;
  comlumns?: string;
  breakAfter?:
    | string
    | 'break-after-auto'
    | 'break-after-avoid'
    | 'break-after-all'
    | 'break-after-avoid-page'
    | 'break-after-page'
    | 'break-after-left'
    | 'break-after-right'
    | 'break-after-column';
  breakBefore?:
    | string
    | 'break-before-auto'
    | 'break-before-avoid'
    | 'break-before-all'
    | 'break-before-avoid-page'
    | 'break-before-page'
    | 'break-before-left'
    | 'break-before-right'
    | 'break-before-column';
  breakInside?:
    | string
    | 'break-inside-auto'
    | 'break-inside-avoid'
    | 'break-inside-avoid-page'
    | 'break-inside-avoid-column';
  boxDecorationBreak?: string | 'box-decoration-clone' | 'box-decoration-slice';
  boxSizing?: string | 'box-border' | 'box-content';
  display?: string;
  float?: string | 'float-right' | 'float-left' | 'float-none';
  clear?: string | 'clear-left' | 'clear-right' | 'clear-both' | 'clear-none';
  isolation?: string | 'isolate' | 'isolation-auto';
  objectFit?:
    | string
    | 'object-contain'
    | 'object-cover'
    | 'object-fill'
    | 'object-none'
    | 'object-scale-down';
  objectPosition?:
    | string
    | 'object-bottom'
    | 'object-center'
    | 'object-left'
    | 'object-left-bottom'
    | 'object-left-top'
    | 'object-right'
    | 'object-right-bottom'
    | 'object-right-top'
    | 'object-top';
  overflow?:
    | string
    | 'overflow-scroll'
    | 'overflow-x-auto'
    | 'overflow-y-auto'
    | 'overflow-x-hidden'
    | 'overflow-y-hidden'
    | 'overflow-x-clip'
    | 'overflow-y-clip'
    | 'overflow-x-visible'
    | 'overflow-y-visible'
    | 'overflow-x-scroll'
    | 'overflow-y-scroll';
  overflowBehavior?:
    | string
    | 'overscroll-auto'
    | 'overscroll-contain'
    | 'overscroll-none'
    | 'overscroll-y-auto'
    | 'overscroll-y-contain'
    | 'overscroll-y-none'
    | 'overscroll-x-auto'
    | 'overscroll-x-contain'
    | 'overscroll-x-none';
  position?: string | 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  inset?: string;
  visibility?: string | 'visible' | 'invisible';
  zIndex?:
    | string
    | 'z-0'
    | 'z-10'
    | 'z-20'
    | 'z-30'
    | 'z-40'
    | 'z-50'
    | 'z-auto';
};

export type FlexboxGridStylings = {
  flexBasis?: string;
  flexDirection?:
    | string
    | 'flex-row'
    | 'flex-row-reverse'
    | 'flex-col'
    | 'flex-col-reverse';
  flexWrap?: string | 'flex-wrap' | 'flex-wrap-reverse' | 'flex-nowrap';
  flex?: string | 'flex-1' | 'flex-auto' | 'flex-initial' | 'flex-none';
  flexGrow?: string | 'grow' | 'grow-0';
  flexShrink?: string | 'shrink' | 'shrink-0';
  order?: string;
  gridTemplateColumns?: string;
  gridColumnStartEnd?: string;
  gridTemplateRows?:
    | string
    | 'grid-rows-1'
    | 'grid-rows-2'
    | 'grid-rows-3'
    | 'grid-rows-4'
    | 'grid-rows-5'
    | 'grid-rows-6'
    | 'grid-rows-none';
  gridRowStartEnd?: string;
  gridAutoFlow?:
    | string
    | 'grid-flow-row'
    | 'grid-flow-col'
    | 'grid-flow-row-dense'
    | 'grid-flow-col-dense';
  gridAutoColumns?:
    | string
    | 'auto-cols-auto'
    | 'auto-cols-min'
    | 'auto-cols-max'
    | 'auto-cols-fr';
  gridAutoRows?:
    | string
    | 'auto-rows-auto'
    | 'auto-rows-min'
    | 'auto-rows-max'
    | 'auto-rows-fr';
  gap?: string;
  justifyContent?:
    | string
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly';
  justifyItems?:
    | string
    | 'justify-items-start'
    | 'justify-items-end'
    | 'justify-items-center'
    | 'justify-items-stretch';
  justifySelf?:
    | string
    | 'justify-self-auto'
    | 'justify-self-start'
    | 'justify-self-end'
    | 'justify-self-center'
    | 'justify-self-stretch';
  alignContent?:
    | string
    | 'content-center'
    | 'content-start'
    | 'content-end'
    | 'content-between'
    | 'content-around'
    | 'content-evenly';
  alignItems?:
    | string
    | 'items-start'
    | 'items-end'
    | 'items-center'
    | 'items-baseline'
    | 'items-stretch';
  alignSelf?:
    | string
    | 'self-auto'
    | 'self-start'
    | 'self-end'
    | 'self-center'
    | 'self-stretch'
    | 'self-baseline';
  placeContent?:
    | string
    | 'place-content-center'
    | 'place-content-start'
    | 'place-content-end'
    | 'place-content-between'
    | 'place-content-around'
    | 'place-content-evenly'
    | 'place-content-stretch';
  placeItems?:
    | string
    | 'place-items-start'
    | 'place-items-end'
    | 'place-items-center'
    | 'place-items-stretch';
  placeSelf?:
    | string
    | 'place-self-auto'
    | 'place-self-start'
    | 'place-self-end'
    | 'place-self-center'
    | 'place-self-stretch';
};

export type SpacingStylings = {
  padding?: string;
  margin?: string;
  spaceBetween?: string;
};

export type SizingStylings = {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
};

export type TypographyStyling = {
  fontFamily?: string | 'font-sans' | 'font-serif' | 'font-mono';
  fontSize?: string;
  fontSmoothing?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontVariantNumeric?: string;
  letterSpacing?: string;
  lineHeight?: string;
  listStyleExportType?: string;
  listStylePosition?: string;
  textAlign?: string;
  textColor?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  textDecorationStyle?: string;
  textDecorationThickness?: string;
  textUnderlineOffset?: string;
  textTransform?: string;
  textOverflow?: string;
  textIndent?: string;
  verticalAlign?: string;
  whitespace?: string;
  wordBreak?: string;
  content?: string;
};

export type BackgroundStylings = {
  backgroundAttachment?: string;
  backgroundClip?: string;
  backgroundColor?: string;
  backgroundOrigin?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  backgroundImage?: string;
  gradientColorStops?: string;
};

export type BorderStylings = {
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  divideWidth?: string;
  divideColor?: string;
  divideStyle?: string;
  outlineWidth?: string;
  outlineColor?: string;
  outlineStyle?: string;
  outlineOffset?: string;
  ringWidth?: string;
  ringColor?: string;
  ringOffsetWidth?: string;
  ringOffsetColor?: string;
};

export type EffectStylings = {
  boxShadow?: string;
  boxShadowColor?: string;
  opacity?: string;
  mixBlendMode?: string;
  backgroundBlendMode?: string;
};

export type FilterStylings = {
  blur?: string;
  brightness?: string;
  contrast?: string;
  dropShadow?: string;
  grayscale?: string;
  hueRotate?: string;
  invert?: string;
  saturate?: string;
  sepia?: string;
  backdropBlur?: string;
  backdropBrightness?: string;
  backdropContrast?: string;
  backdropGrayscale?: string;
  backdropHueRotate?: string;
  backdropInvert?: string;
  backdropOpacity?: string;
  backdropSaturate?: string;
  backdropSepia?: string;
};

export type TableStylings = {
  borderCollapse?: string;
  tableLayout?: string;
};

export type TransitionAnimationStylings = {
  transitionProperty?: string;
  transitionDuration?: string;
  transitionTimingFunction?: string;
  transitionDelay?: string;
  animation?: string;
};

export type TransformStylings = {
  scale?: string;
  rotate?: string;
  translate?: string;
  skew?: string;
  transform?: string;
};

export type InteractivityStylings = {
  accentColor?: string;
  appearance?: string;
  cursor?: string;
  caretColor?: string;
  pointerEvents?: string;
  resize?: string;
  scrollBehavior?: string;
  scrollMargin?: string;
  scrollPadding?: string;
  scrollSnapAlign?: string;
  scrollSnapStop?: string;
  scrollSnapexportType?: string;
  touchAction?: string;
  userSelect?: string;
  willChange?: string;
};

export type SvgStylings = {
  fill?: string;
  stroke?: string;
  strokeWidth?: string | 'stroke-0' | 'stroke-1' | 'stroke-2';
};

export type AccessibilityStylings = {
  screenReaders?: string | 'sr-only' | 'not-sr-only';
};

export type TailwindStylings = {
  className?: string; // overide
  layout?: LayoutStylings;
  flexboxGrid?: FlexboxGridStylings;
  spacing?: SpacingStylings;
  sizing?: SizingStylings;
  text?: TypographyStyling;
  background?: BackgroundStylings;
  border?: BorderStylings;
  effect?: EffectStylings;
  filter?: FilterStylings;
  table?: TableStylings;
  transitionAnimation?: TransitionAnimationStylings;
  transform?: TransformStylings;
  interactivity?: InteractivityStylings;
  svg?: SvgStylings;
  accessibility?: AccessibilityStylings;
};

export interface MenuData {
  icon?: ReactNode;
  title: string;
  link?: string;
  subMenu?: MenuData[];
}
