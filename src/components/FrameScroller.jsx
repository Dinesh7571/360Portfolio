import { useEffect, useState, useRef } from "react"

function FrameScroller() {
    const videoRef = useRef(null)
    const [loaded, setLoaded] = useState(false)
    const [videoDuration, setVideoDuration] = useState(0)
    const lastScrollY = useRef(0)
    const lastTime = useRef(0)
  
    useEffect(() => {
      const video = videoRef.current
      if (!video) return
  
      const handleLoadedMetadata = () => {
        setVideoDuration(video.duration)
        setLoaded(true)
        // Set initial video time to 0
        video.currentTime = 0
      }
  
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
  
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }, [])
  
    /* -------------------------------------------------
     Scroll handler (RAF throttled) - controls video playback
     Video plays forward on scroll down, reverse on scroll up
    --------------------------------------------------*/
    useEffect(() => {
      if (!loaded || !videoRef.current) return
  
      let ticking = false
      const video = videoRef.current
  
      const handleScroll = () => {
        if (ticking) return
  
        ticking = true
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight
  
          const progress = docHeight > 0 ? Math.max(0, Math.min(1, scrollY / docHeight)) : 0
          
          // Calculate video time based on scroll progress
          const targetTime = progress * videoDuration
          
          // Update video time - this naturally handles forward/reverse
          // When scrolling down, progress increases, video plays forward
          // When scrolling up, progress decreases, video plays in reverse
          video.currentTime = targetTime
          
          lastScrollY.current = scrollY
          lastTime.current = Date.now()
  
          ticking = false
        })
      }
  
      handleScroll()
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [loaded, videoDuration])
  
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 w-full overflow-hidden pt-10 bg-[#eaeef1]">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full">
            {!loaded && (
              <div className="absolute inset-0 bg-[#eaeef1]"></div>
            )}
  
            <video
              ref={videoRef}
              className="h-full w-full object-cover outline-none focus:outline-none border-none"
              playsInline
              muted
              preload="metadata"
              style={{ display: loaded ? 'block' : 'none' }}
            >
              <source src="/profile2/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    )
  }
  
  export default FrameScroller