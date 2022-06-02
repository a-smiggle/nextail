import {
  AccessibilityStylings,
  BackgroundStylings,
  BorderStylings,
  EffectStylings,
  FilterStylings,
  FlexboxGridStylings,
  InteractivityStylings,
  LayoutStylings,
  SizingStylings,
  SpacingStylings,
  SvgStylings,
  TableStylings,
  TailwindStylings,
  TransformStylings,
  TransitionAnimationStylings,
  TypographyStyling,
} from './types';

const createLayout = (layout: LayoutStylings): string =>
  `${layout.aspectRatio ? layout.aspectRatio : ''} ${
    layout.container ? layout.container : ''
  } ${layout.columns ? layout.columns : ''} ${
    layout.breakAfter ? layout.breakAfter : ''
  } ${layout.breakBefore ? layout.breakBefore : ''} ${
    layout.breakInside ? layout.breakInside : ''
  } ${layout.boxDecorationBreak ? layout.boxDecorationBreak : ''} ${
    layout.boxSizing ? layout.boxSizing : ''
  } ${layout.display ? layout.display : ''} ${
    layout.float ? layout.float : ''
  } ${layout.clear ? layout.clear : ''} ${
    layout.isolation ? layout.isolation : ''
  } ${layout.objectFit ? layout.objectFit : ''} ${
    layout.objectPosition ? layout.objectPosition : ''
  } ${layout.overflow ? layout.overflow : ''} ${
    layout.overflowBehavior ? layout.overflowBehavior : ''
  } ${layout.position ? layout.position : ''} ${layout.top ? layout.top : ''} ${
    layout.bottom ? layout.bottom : ''
  } ${layout.left ? layout.left : ''} ${layout.right ? layout.right : ''} ${
    layout.inset ? layout.inset : ''
  } ${layout.visibility ? layout.visibility : ''} ${
    layout.zIndex ? layout.zIndex : ''
  }`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createFlexboxGrid = (flexboxGrid: FlexboxGridStylings): string =>
  `${flexboxGrid.flexBasis ? flexboxGrid.flexBasis : ''} ${
    flexboxGrid.flexDirection ? flexboxGrid.flexDirection : ''
  } ${flexboxGrid.flexWrap ? flexboxGrid.flexWrap : ''} ${
    flexboxGrid.flex ? flexboxGrid.flex : ''
  } ${flexboxGrid.flexGrow ? flexboxGrid.flexGrow : ''} ${
    flexboxGrid.flexShrink ? flexboxGrid.flexShrink : ''
  } ${flexboxGrid.order ? flexboxGrid.order : ''} ${
    flexboxGrid.gridTemplateColumns ? flexboxGrid.gridTemplateColumns : ''
  } ${flexboxGrid.gridColumnStartEnd ? flexboxGrid.gridColumnStartEnd : ''} ${
    flexboxGrid.gridTemplateRows ? flexboxGrid.gridTemplateRows : ''
  } ${flexboxGrid.gridRowStartEnd ? flexboxGrid.gridRowStartEnd : ''} ${
    flexboxGrid.gridAutoFlow ? flexboxGrid.gridAutoFlow : ''
  } ${flexboxGrid.gridAutoColumns ? flexboxGrid.gridAutoColumns : ''} ${
    flexboxGrid.gridAutoRows ? flexboxGrid.gridAutoRows : ''
  } ${flexboxGrid.gap ? flexboxGrid.gap : ''} ${
    flexboxGrid.justifyContent ? flexboxGrid.justifyContent : ''
  } ${flexboxGrid.justifyItems ? flexboxGrid.justifyItems : ''} ${
    flexboxGrid.justifySelf ? flexboxGrid.justifySelf : ''
  } ${flexboxGrid.alignContent ? flexboxGrid.alignContent : ''} ${
    flexboxGrid.alignItems ? flexboxGrid.alignItems : ''
  } ${flexboxGrid.alignSelf ? flexboxGrid.alignSelf : ''} ${
    flexboxGrid.placeContent ? flexboxGrid.placeContent : ''
  } ${flexboxGrid.placeItems ? flexboxGrid.placeItems : ''} ${
    flexboxGrid.placeSelf ? flexboxGrid.placeSelf : ''
  }`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createSpacing = (spacing: SpacingStylings): string =>
  `${spacing.padding ? spacing.padding : ''} ${
    spacing.margin ? spacing.margin : ''
  } ${spacing.spaceBetween ? spacing.spaceBetween : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createSizing = (sizing: SizingStylings): string =>
  `${sizing.width ? sizing.width : ''} ${
    sizing.minWidth ? sizing.minWidth : ''
  } ${sizing.maxWidth ? sizing.maxWidth : ''} ${
    sizing.height ? sizing.height : ''
  } ${sizing.minHeight ? sizing.minHeight : ''} ${
    sizing.maxHeight ? sizing.maxHeight : ''
  }`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createText = (text: TypographyStyling): string =>
  `${text.fontFamily ? text.fontFamily : ''} ${
    text.fontSize ? text.fontSize : ''
  } ${text.fontSmoothing ? text.fontSmoothing : ''} ${
    text.fontStyle ? text.fontStyle : ''
  } ${text.fontWeight ? text.fontWeight : ''} ${
    text.fontVariantNumeric ? text.fontVariantNumeric : ''
  } ${text.letterSpacing ? text.letterSpacing : ''} ${
    text.lineHeight ? text.lineHeight : ''
  } ${text.listStyleExportType ? text.listStyleExportType : ''} ${
    text.listStylePosition ? text.listStylePosition : ''
  } ${text.textAlign ? text.textAlign : ''} ${
    text.textColor ? text.textColor : ''
  } ${text.textDecoration ? text.textDecoration : ''} ${
    text.textDecorationColor ? text.textDecorationColor : ''
  } ${text.textDecorationStyle ? text.textDecorationStyle : ''} ${
    text.textDecorationThickness ? text.textDecorationThickness : ''
  } ${text.textUnderlineOffset ? text.textUnderlineOffset : ''} ${
    text.textTransform ? text.textTransform : ''
  } ${text.textOverflow ? text.textOverflow : ''} ${
    text.textIndent ? text.textIndent : ''
  } ${text.verticalAlign ? text.verticalAlign : ''} ${
    text.whitespace ? text.whitespace : ''
  } ${text.wordBreak ? text.wordBreak : ''} ${text.content ? text.content : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createBackground = (background: BackgroundStylings): string =>
  `${background.backgroundAttachment ? background.backgroundAttachment : ''} ${
    background.backgroundClip ? background.backgroundClip : ''
  } ${background.backgroundColor ? background.backgroundColor : ''} ${
    background.backgroundOrigin ? background.backgroundOrigin : ''
  } ${background.backgroundPosition ? background.backgroundPosition : ''} ${
    background.backgroundRepeat ? background.backgroundRepeat : ''
  } ${background.backgroundSize ? background.backgroundSize : ''} ${
    background.backgroundImage ? background.backgroundImage : ''
  } ${background.gradientColorStops ? background.gradientColorStops : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createBorder = (border: BorderStylings): string =>
  `${border.borderRadius ? border.borderRadius : ''} ${
    border.borderWidth ? border.borderWidth : ''
  } ${border.borderColor ? border.borderColor : ''} ${
    border.borderStyle ? border.borderStyle : ''
  } ${border.divideColor ? border.divideColor : ''} ${
    border.divideStyle ? border.divideStyle : ''
  } ${border.divideWidth ? border.divideWidth : ''} ${
    border.outlineColor ? border.outlineColor : ''
  } ${border.outlineWidth ? border.outlineWidth : ''} ${
    border.outlineStyle ? border.outlineStyle : ''
  } ${border.outlineOffset ? border.outlineOffset : ''} ${
    border.ringWidth ? border.ringWidth : ''
  } ${border.ringColor ? border.ringColor : ''} ${
    border.ringOffsetWidth ? border.ringOffsetWidth : ''
  } ${border.ringOffsetColor ? border.ringOffsetColor : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createEffect = (effect: EffectStylings): string =>
  `${effect.boxShadow ? effect.boxShadow : ''} ${
    effect.boxShadowColor ? effect.boxShadowColor : ''
  } ${effect.opacity ? effect.opacity : ''} ${
    effect.mixBlendMode ? effect.mixBlendMode : ''
  } ${effect.backgroundBlendMode ? effect.backgroundBlendMode : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createFilter = (filter: FilterStylings): string =>
  `${filter.blur ? filter.blur : ''} ${
    filter.brightness ? filter.brightness : ''
  } ${filter.contrast ? filter.contrast : ''} ${
    filter.dropShadow ? filter.dropShadow : ''
  } ${filter.grayscale ? filter.grayscale : ''} ${
    filter.hueRotate ? filter.hueRotate : ''
  } ${filter.invert ? filter.invert : ''} ${
    filter.saturate ? filter.saturate : ''
  } ${filter.sepia ? filter.sepia : ''} ${
    filter.backdropBlur ? filter.backdropBlur : ''
  } ${filter.backdropBrightness ? filter.backdropBrightness : ''} ${
    filter.backdropContrast ? filter.backdropContrast : ''
  } ${filter.backdropGrayscale ? filter.backdropGrayscale : ''} ${
    filter.backdropHueRotate ? filter.backdropHueRotate : ''
  } ${filter.backdropInvert ? filter.backdropInvert : ''} ${
    filter.backdropOpacity ? filter.backdropOpacity : ''
  } ${filter.backdropSaturate ? filter.backdropSaturate : ''} ${
    filter.backdropSepia ? filter.backdropSepia : ''
  }`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createTable = (table: TableStylings): string =>
  `${table.borderCollapse ? table.borderCollapse : ''} ${
    table.borderCollapse ? table.borderCollapse : ''
  }`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createTransitionAnimation = (
  transitionAnimation: TransitionAnimationStylings
): string =>
  `${
    transitionAnimation.transitionProperty
      ? transitionAnimation.transitionProperty
      : ''
  } ${
    transitionAnimation.transitionDuration
      ? transitionAnimation.transitionDuration
      : ''
  } ${
    transitionAnimation.transitionTimingFunction
      ? transitionAnimation.transitionTimingFunction
      : ''
  } ${
    transitionAnimation.transitionDelay
      ? transitionAnimation.transitionDelay
      : ''
  } ${transitionAnimation.animation ? transitionAnimation.animation : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createTransform = (transform: TransformStylings): string =>
  `${transform.scale ? transform.scale : ''} ${
    transform.rotate ? transform.rotate : ''
  } ${transform.translate ? transform.translate : ''} ${
    transform.skew ? transform.skew : ''
  } ${transform.transform ? transform.transform : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createInteractivity = (interactivity: InteractivityStylings): string =>
  `${interactivity.accentColor ? interactivity.accentColor : ''} ${
    interactivity.appearance ? interactivity.appearance : ''
  } ${interactivity.cursor ? interactivity.cursor : ''} ${
    interactivity.caretColor ? interactivity.caretColor : ''
  } ${interactivity.pointerEvents ? interactivity.pointerEvents : ''} ${
    interactivity.resize ? interactivity.resize : ''
  } ${interactivity.scrollBehavior ? interactivity.scrollBehavior : ''} ${
    interactivity.scrollMargin ? interactivity.scrollMargin : ''
  } ${interactivity.scrollPadding ? interactivity.scrollPadding : ''} ${
    interactivity.scrollSnapAlign ? interactivity.scrollSnapAlign : ''
  } ${interactivity.scrollSnapStop ? interactivity.scrollSnapStop : ''} ${
    interactivity.scrollSnapExportType ? interactivity.scrollSnapExportType : ''
  } ${interactivity.touchAction ? interactivity.touchAction : ''} ${
    interactivity.userSelect ? interactivity.userSelect : ''
  } ${interactivity.willChange ? interactivity.willChange : ''}`;

const createSvg = (svg: SvgStylings): string =>
  `${svg.fill ? svg.fill : ''} ${svg.stroke ? svg.stroke : ''} ${
    svg.strokeWidth ? svg.strokeWidth : ''
  }`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

const createAccessibility = (accessibility: AccessibilityStylings): string =>
  `${accessibility.screenReaders ? accessibility.screenReaders : ''}`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');

function createStylings(stylings: TailwindStylings): string {
  return `${stylings.layout ? createLayout(stylings.layout) : ''} ${
    stylings.flexboxGrid ? createFlexboxGrid(stylings.flexboxGrid) : ''
  } ${stylings.spacing ? createSpacing(stylings.spacing) : ''} ${
    stylings.sizing ? createSizing(stylings.sizing) : ''
  } ${stylings.text ? createText(stylings.text) : ''} ${
    stylings.background ? createBackground(stylings.background) : ''
  } ${stylings.border ? createBorder(stylings.border) : ''} ${
    stylings.effect ? createEffect(stylings.effect) : ''
  } ${stylings.filter ? createFilter(stylings.filter) : ''} ${
    stylings.table ? createTable(stylings.table) : ''
  } ${
    stylings.transitionAnimation
      ? createTransitionAnimation(stylings.transitionAnimation)
      : ''
  } ${stylings.transform ? createTransform(stylings.transform) : ''} ${
    stylings.interactivity ? createInteractivity(stylings.interactivity) : ''
  } ${stylings.svg ? createSvg(stylings.svg) : ''} ${
    stylings.accessibility ? createAccessibility(stylings.accessibility) : ''
  }`
    .replace(/^(\s*)|(\s*)$/g, '')
    .replace(/\s+/g, ' ');
}

export default createStylings;
export {
  createAccessibility,
  createBackground,
  createBorder,
  createEffect,
  createFilter,
  createFlexboxGrid,
  createInteractivity,
  createLayout,
  createSizing,
  createSpacing,
  createSvg,
  createTable,
  createText,
  createTransform,
  createTransitionAnimation,
};
