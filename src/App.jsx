import React, { useEffect } from 'react'

function App() {
  return (
    <div className="relative min-h-[300vh]  text-slate-100">
      {/* Fixed background FrameScroller */}
      <FrameScroller />

      {/* Foreground content */}
      <div className="relative z-10">

      </div>
    </div>
  )
}



function FrameScroller() {
  const TOTAL_FRAMES = 160
  const FIRST_FRAME_INDEX = 1

  const formatFrameNumber = (index) => String(index).padStart(3, '0')

  const [frameIndex, setFrameIndex] = React.useState(FIRST_FRAME_INDEX)
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)

  useEffect(() => {
    let loadedCount = 0
    const images = []

    for (let i = FIRST_FRAME_INDEX; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = `/profile2/ezgif-frame-${formatFrameNumber(i)}.jpg`

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

  const src = `/profile2/ezgif-frame-${formatFrameNumber(frameIndex)}.jpg`

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.16),_transparent_60%)]" />

      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative h-full w-full">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <span className="text-slate-300 text-sm tracking-wide">
                Loading animation…
              </span>
            </div>
          )}

          {loaded && (
            <img
              src={src}
              alt={`Frame ${frameIndex}`}
              className="h-full w-full object-cover"
              draggable={false}
            />
          )}

          {/* Debug HUD */}
          {loaded && (
            <div className="pointer-events-none absolute bottom-4 right-4 flex gap-3 text-[10px] text-slate-200">
              <div className="rounded-full bg-black/70 px-3 py-1.5 backdrop-blur-md">
                <span className="text-slate-400">Frame</span>{' '}
                <span className="font-mono text-sky-300">
                  {String(frameIndex).padStart(3, '0')}
                </span>
                <span className="text-slate-500"> / {TOTAL_FRAMES}</span>
              </div>

              <div className="rounded-full bg-black/70 px-3 py-1.5 backdrop-blur-md">
                <span className="text-slate-400">Scroll</span>{' '}
                <span className="font-mono text-sky-300">
                  {(scrollProgress * 100).toFixed(0)}
                </span>
                <span className="text-slate-500">%</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}







export default App
