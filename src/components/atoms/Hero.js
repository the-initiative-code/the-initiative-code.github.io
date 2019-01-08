// main imports
import React from 'react'

// styles
import styles from './Hero.module.css'

// components

const heroContent = [
  {
    h1: 'We build websites.',
    h2: 'We leverage the latest tech to bring you fast, responsive webpages.',
  },
  {
    h1: 'We help you build your brand image.',
    h2: 'We work with you to refine your brand messaging.',
  },
  {
    h1: 'We do digital branding.',
    h2: 'We work with you to strengthen your digital presence.',
  },
  {
    h1: 'We design web experiences',
    h2:
      'Interactive, animated experiences drive more engagement with your customers.',
  },
]

const AnimatedText = ({ interval = 5 }) => {}

const HeroText = () => (
  <div className={styles.default}>
    <div className={styles.text}>
      <h1>We build websites.</h1>
      <h2>We work with you to bring your digital presence to life.</h2>
      <br />
      <br />
      <h3>
        here's another text description convincing you with some data to part
        your hard earned money in order to invest in the future of your company
        or brand.
      </h3>
      {/* <code>hero text here, use absolute positioning</code>
      <code>
        in the future, I plan to animate the text based on the content behind
      </code>
      <code>content scroll behind, front text animates typewriter style</code> */}
    </div>
  </div>
)

export default HeroText
