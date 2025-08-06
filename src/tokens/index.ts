// Export all tokens
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './shadows'
export * from './borders'
export * from './z-index'

// Re-export as a single theme object for convenience
import { colors, semanticColors } from './colors'
import { fontFamilies, fontWeights, fontSizes, lineHeights, typography } from './typography'
import { spacing, semanticSpacing } from './spacing'
import { shadows } from './shadows'
import { borderRadius, borderWidth } from './borders'
import { zIndex } from './z-index'

export const theme = {
  colors,
  semanticColors,
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  typography,
  spacing,
  semanticSpacing,
  shadows,
  borderRadius,
  borderWidth,
  zIndex,
} as const

export type Theme = typeof theme