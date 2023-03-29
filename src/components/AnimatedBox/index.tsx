import React from 'react'
import { animated, useSpring } from 'react-spring'

import { Props } from './interface'

const AnimatedBox: React.FC<Props> = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 5 }
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default AnimatedBox
