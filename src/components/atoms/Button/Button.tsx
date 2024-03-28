import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  ariaLabel: string
  special?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  special,
  onClick,
  ...restProps
}) => {
  return (
    <button
      className={`${styles.button} ${special ? styles.special : ''}`}
      aria-label={ariaLabel}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
