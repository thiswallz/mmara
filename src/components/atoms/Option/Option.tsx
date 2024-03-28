import React, { ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
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
}) => {
  return (
    <motion.button
      type="button"
      className={`${styles.option} ${active ? styles.active : ''}`}
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  )
}

export default Option
