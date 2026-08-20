import { useState, useEffect } from 'react'

export function useScrollReveal(ref, threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(currentRef)
        }
      },
      { threshold }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [ref, threshold])

  return isVisible
}