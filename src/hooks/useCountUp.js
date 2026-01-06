import { useState, useEffect, useRef } from 'react'

export const useCountUp = (end, start = 0, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(start)
  const frameRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (!shouldStart) return

    const startTime = performance.now()
    startTimeRef.current = startTime

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      const currentCount = Math.floor(start + (end - start) * easeOut)
      setCount(currentCount)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, start, duration, shouldStart])

  return count
}

