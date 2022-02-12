import { useEffect } from 'react'

export default function useOutsideTouch(
  ref: React.MutableRefObject<any>,
  fn: () => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleTouchOutside(event: TouchEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn()
      }
    }

    // Bind the event listener
    document.addEventListener('touchstart', handleTouchOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('touchstart', handleTouchOutside)
    }
  }, [ref])
}
