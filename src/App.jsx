import React from 'react'
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Code2,
  Briefcase,
  GraduationCap,
  ExternalLink,
} from 'lucide-react'


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
  const TOTAL_FRAMES = 192
  const FIRST_FRAME_INDEX = 1

  const formatFrameNumber = (index) => String(index).padStart(5, '0')

  const [frameIndex, setFrameIndex] = React.useState(FIRST_FRAME_INDEX)
  const [scrollProgress, setScrollProgress] = React.useState(0)

  React.useEffect(() => {
    const preloadCount = 20
    const preloadStart = FIRST_FRAME_INDEX
    const preloadEnd = Math.min(FIRST_FRAME_INDEX + preloadCount, TOTAL_FRAMES)

    for (let i = preloadStart; i <= preloadEnd; i += 1) {
      const img = new Image()
      img.src = `/profile/${formatFrameNumber(i)}.png`
    }
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollY / docHeight : 0

      const mappedIndex =
        FIRST_FRAME_INDEX + Math.round(progress * (TOTAL_FRAMES - 1))
      const clampedIndex = Math.min(
        TOTAL_FRAMES,
        Math.max(FIRST_FRAME_INDEX, mappedIndex),
      )

      setScrollProgress(progress)
      setFrameIndex(clampedIndex)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const src = `/profile/${formatFrameNumber(frameIndex)}.png`

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.16),_transparent_60%)]" />
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative w-full">
          <div
            className="absolute "
            style={{
              opacity: 0.25 + scrollProgress * 0.7,
            }}
          />
          <div className="relative h-full w-full  ">
            <img
              src={src}
              alt={`Frame ${frameIndex}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Meta overlay bottom-right */}
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
        </div>
      </div>
    </div>
  )
}

export default App
