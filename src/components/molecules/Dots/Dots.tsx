import React from 'react'
import styles from './Dots.module.scss'
import { Dot } from '~/components/atoms/Dot'

type DotsProps = {
  values: boolean[]
}

const Options: React.FC<DotsProps> = ({ values }) => {
  return (
    <ul className={styles.dots}>
      {values.map((value, index) => (
        <Dot active={value} key={index} />
      ))}
    </ul>
  )
}

export default Options
