import React from 'react'
import styles from './Options.module.scss'
import { Option } from '~/components/atoms/Option'

type OptionProps = {
  active: number | undefined
  values: string[]
  onSelect: (index: number) => void
}

const Options: React.FC<OptionProps> = ({ values, active, onSelect }) => {
  return (
    <ul role="list" className={styles.options} aria-label='Select an option'>
      {values.map((value, index) => (
        <Option active={active===index} key={index} ariaLabel={value} onClick={()=>onSelect(index)}>
          {value}
        </Option>
      ))}
    </ul>
  )
}

export default Options
