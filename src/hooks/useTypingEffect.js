import { useState, useEffect } from 'react'

export default function useTypingEffect(
  texts,
  typingSpeed   = 60,
  pauseDuration = 1800,
  deletingSpeed = 35
) {
  const [displayed,  setDisplayed]  = useState('')
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [phase,      setPhase]      = useState('typing')

  useEffect(() => {
    const current = texts[roleIndex]
    let timeout

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed
        )
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseDuration)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          deletingSpeed
        )
      } else {
        setRoleIndex((i) => (i + 1) % texts.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, roleIndex, texts, typingSpeed, pauseDuration, deletingSpeed])

  return displayed
}
