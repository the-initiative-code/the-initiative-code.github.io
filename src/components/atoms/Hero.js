// main imports
import React from 'react'

// styles
import styles from './Hero.module.css'

// components

const HeroText = () => (
  <div className={styles.default}>
    <code>hero text here, use absolute positioning</code>
    <code>
      in the future, I plan to animate the text based on the content behind
    </code>
    <code>content scroll behind, front text animates typewriter style</code>
  </div>
)

export default HeroText
