import React, { ButtonHTMLAttributes } from 'react'
import styles from './Option.module.scss'

interface OptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  active: boolean
  ariaLabel: string
  onClick?: () => void
}

const Option: React.FC<OptionProps> = ({
  children,
  ariaLabel,
  onClick,
  active,
  ...restProps
}) => {
  return (
    <button
      role="listitem"
      type="button"
      className={`${styles.option} ${active ? styles.active : ''}`}
      aria-label={ariaLabel}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Option
