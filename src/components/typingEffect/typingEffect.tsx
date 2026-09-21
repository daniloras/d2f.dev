import { useEffect, useState } from 'react'

import { TypingEffectProps } from '@/components/typingEffect/typingEffect.interface'

type Phase = 'typing' | 'erasing'

export const TypingEffect = ({
  text,
  speed = 200,
  eraseSpeed = 200,
  eraseDelay = 5000,
  typingDelay = 2500,
  cursor = '|',
  className,
  cursorClassName,
}: TypingEffectProps) => {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')
  const [isCursorVisible, setIsCursorVisible] = useState(true)

  useEffect(() => {
    const texts = Array.isArray(text) ? text : [text]
    const target = texts[index] ?? ''

    let delay = 0
    let step: () => void

    if (phase === 'typing') {
      if (displayText.length < target.length) {
        delay = displayText.length === 0 ? typingDelay : speed
        step = () => setDisplayText(target.slice(0, displayText.length + 1))
      } else {
        delay = eraseDelay
        step = () => setPhase('erasing')
      }
    } else if (displayText.length > 0) {
      delay = eraseSpeed
      step = () => setDisplayText(displayText.slice(0, -1))
    } else {
      step = () => {
        setIndex((index + 1) % texts.length)
        setPhase('typing')
      }
    }

    const timeout = setTimeout(step, delay)
    return () => clearTimeout(timeout)
  }, [text, index, displayText, phase, speed, eraseSpeed, eraseDelay, typingDelay])

  useEffect(() => {
    const interval = setInterval(() => setIsCursorVisible((visible) => !visible), 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className}>
      <span style={{ display: 'inline-block' }}>{displayText}</span>
      <span
        className={cursorClassName}
        style={{
          display: 'inline-block',
          transition: 'opacity 0.5s',
          opacity: isCursorVisible ? 1 : 0,
        }}
      >
        {cursor}
      </span>
    </span>
  )
}
