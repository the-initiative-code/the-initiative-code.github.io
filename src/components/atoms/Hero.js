// main imports
import React from 'react'

// styles
import styles from './Hero.module.css'

// components

const HeroText = () => (
  <div className={styles.default}>
    <div className={styles.text}>
      <h1>let us build your digital brand with you.</h1>
      <h4>we work with you to bring your digital presence to life.</h4>
      <p>
        brand authenticity is the key factor to driving engagement with your
        brand. We can help you take the first step.{' '}
      </p>
      {/* <code>hero text here, use absolute positioning</code>
      <code>
        in the future, I plan to animate the text based on the content behind
      </code>
      <code>content scroll behind, front text animates typewriter style</code> */}
    </div>
  </div>
)

export default HeroText
