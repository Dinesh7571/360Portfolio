import { useEffect, useState } from "react"

function FrameScroller() {
    const TOTAL_FRAMES = 30
    const FIRST_FRAME_INDEX = 1
  
    const formatFrameNumber = (index) => String(index).padStart(3, '0')
  
    const [frameIndex, setFrameIndex] = useState(FIRST_FRAME_INDEX)
    const [scrollProgress, setScrollProgress] =useState(0)
    const [loaded, setLoaded] = useState(false)
  
    useEffect(() => {
      let loadedCount = 0
      const images = []
  
      for (let i = FIRST_FRAME_INDEX; i <= TOTAL_FRAMES; i++) {
        const img = new Image()
        img.src = `/profile2/ezgif-frame-${formatFrameNumber(i)}.png`
  
        img.onload = () => {
          loadedCount++
          if (loadedCount === TOTAL_FRAMES) {
            setLoaded(true)
          }
        }
  
        images.push(img)
      }
    }, [])
  
    /* -------------------------------------------------
     Scroll handler (RAF throttled)
    --------------------------------------------------*/
      useEffect(() => {
      if (!loaded) return
  
      let ticking = false
  
      const handleScroll = () => {
        if (ticking) return
  
        ticking = true
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight
  
          const progress = docHeight > 0 ? scrollY / docHeight : 0
  
          const mappedIndex =
            FIRST_FRAME_INDEX +
            Math.floor(progress * (TOTAL_FRAMES - 1))
  
          const clampedIndex = Math.min(
            TOTAL_FRAMES,
            Math.max(FIRST_FRAME_INDEX, mappedIndex),
          )
  
          setScrollProgress(progress)
          setFrameIndex(clampedIndex)
  
          ticking = false
        })
      }
  
      handleScroll()
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [loaded])
  
    const src = `/profile2/ezgif-frame-${formatFrameNumber(frameIndex)}.png`
  
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 w-full overflow-hidden pt-10 bg-[#eaeef1] ">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full">
            {!loaded && (
              <div className="absolute inset-0 bg-[#eaeef1]"></div>
            )}
  
            {loaded && (
              <img
                src={src}
                alt={`Frame ${frameIndex}`}
                className="h-full w-full object-cover"
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
  
  export default FrameScroller