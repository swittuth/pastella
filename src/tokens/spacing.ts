export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  18: '4.5rem',      // 72px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
} as const

export const semanticSpacing = {
  // Component spacing
  component: {
    xs: spacing[2],    // 8px - tight spacing
    sm: spacing[3],    // 12px - small components
    md: spacing[4],    // 16px - default component spacing
    lg: spacing[6],    // 24px - comfortable spacing
    xl: spacing[8],    // 32px - loose spacing
  },
  
  // Layout spacing
  layout: {
    xs: spacing[4],    // 16px - minimal section spacing
    sm: spacing[8],    // 32px - small section spacing
    md: spacing[12],   // 48px - default section spacing
    lg: spacing[16],   // 64px - large section spacing
    xl: spacing[24],   // 96px - major section spacing
  },
  
  // Container spacing
  container: {
    xs: spacing[4],    // 16px - mobile padding
    sm: spacing[6],    // 24px - tablet padding
    md: spacing[8],    // 32px - desktop padding
    lg: spacing[12],   // 48px - large desktop padding
  },
} as const

export type Spacing = typeof spacing
export type SemanticSpacing = typeof semanticSpacing