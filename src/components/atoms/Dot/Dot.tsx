import React, { ButtonHTMLAttributes } from 'react'
import styles from './Dot.module.scss'

interface DotProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  onClick?: () => void;
}

const Button: React.FC<DotProps> = ({ active, ...restProps }) => {
  return (
    <span className={`${styles.dot} ${active ? styles.active : ''}`} {...restProps} />
  )
}

export default Button
