import React from 'react'
import { cn } from '../../../utils'
import styles from './button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'
  
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg'
  
  /**
   * Whether the button should take the full width of its container
   */
  fullWidth?: boolean
  
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean
  
  /**
   * Icon to display before the button text
   */
  startIcon?: React.ReactNode
  
  /**
   * Icon to display after the button text
   */
  endIcon?: React.ReactNode
  
  /**
   * The content of the button
   */
  children: React.ReactNode
}

/**
 * Button component with multiple variants and sizes
 * Built with Bloom Design System tokens
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      startIcon,
      endIcon,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          styles.button,
          styles[variant],
          styles[size],
          {
            [styles.fullWidth]: fullWidth,
            [styles.loading]: loading,
          },
          className
        )}
        {...props}
      >
        {loading && <span className={styles.spinner} />}
        {!loading && startIcon && (
          <span className={styles.startIcon}>{startIcon}</span>
        )}
        <span className={styles.content}>{children}</span>
        {!loading && endIcon && (
          <span className={styles.endIcon}>{endIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'