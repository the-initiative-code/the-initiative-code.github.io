// main imports
import React from 'react'
import moment from 'moment'

// styles
import styles from './Hero.module.css'

// components
import { NavLink, NavA } from './Link'

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

const LINK_SHOPPER =
  'https://www.thinkwithgoogle.com/intl/en-cee/advertising-channels-tools/mobile/four-insights-how-shoppers-use-apps-and-mobile-sites/'

const LINK_CONSUMER =
  'https://www.thinkwithgoogle.com/advertising-channels/mobile-marketing/consumer-behavior-mobile-digital-experiences/'

const AnimatedText = ({ interval = 5 }) => {}

const HeroText = () => (
  <div className={styles.default}>
    <div className={styles.text}>
      <h1 className={styles.h1}>We build websites.</h1>
      <h2 className={styles.h2}>
        We work with you to bring your digital presence to life.
      </h2>
      <div className={styles.break} />

      <h3 className={styles.h3}>
        It's {moment().format('gggg')} and online experiences are more important
        than ever. Your Customers expect{' '}
        <NavA
          href={LINK_CONSUMER}
          text="personalized"
          type="header"
          selected={LINK_CONSUMER}
          style={{ fontWeight: 600, fontSize: '1em' }}
        />
        ,{' '}
        <NavA
          href={LINK_SHOPPER}
          text="fast"
          type="header"
          selected={LINK_SHOPPER}
          style={{ fontWeight: 600, fontSize: '1em' }}
        />{' '}
        website experiences, while you want them to understand your brand and
        the value you bring to their lives. This is where{' '}
        <NavLink
          href="/about"
          text="we."
          type="header"
          selected="/about"
          style={{ fontWeight: 600, fontSize: '1em' }}
        />{' '}
        come in.{' '}
        <NavLink
          href="/pricing"
          text="Check out some of our works."
          type="header"
          selected="/pricing"
          style={{ fontWeight: 600, fontSize: '1em' }}
        />
      </h3>
      {/* <code>hero text here, use absolute positioning</code>
      <code>
        in the future, I plan to animate the text based on the content behind
        also a link to a related important chart
      </code>
      <code>content scroll behind, front text animates typewriter style</code> */}
    </div>
  </div>
)

export default HeroText
