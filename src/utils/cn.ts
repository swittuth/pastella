import { clsx, type ClassValue } from 'clsx'

/**
 * Utility function for combining class names
 * This is a wrapper around clsx for consistent class name handling
 * 
 * @param inputs - Class names to combine
 * @returns Combined class name string
 * 
 * @example
 * cn('base-class', { 'conditional-class': condition }, undefined, 'another-class')
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}