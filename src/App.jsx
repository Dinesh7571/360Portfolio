import React, { useEffect, useRef } from 'react'

function RevealSection({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let hasTriggered = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true
          setVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      },
    )

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate progress based on scroll position
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - elementTop + elementHeight * 0.5) / (windowHeight + elementHeight)
        )
      )
      setProgress(scrollProgress)
    }

    observer.observe(el)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Calculate transforms based on direction and visibility
  const getInitialTransform = () => {
    if (direction === 'left') return -120
    if (direction === 'right') return 120
    return 80
  }

  const initialTransform = getInitialTransform()
  const translateX = direction === 'left' || direction === 'right' 
    ? initialTransform * (1 - progress) 
    : 0
  const translateY = direction === 'up' 
    ? initialTransform * (1 - progress) 
    : 0

  const opacity = Math.min(1, progress * 2)
  const scale = 0.85 + progress * 0.15

  return (
    <section
      ref={ref}
      className="will-change-transform"
      style={{
        opacity: visible ? opacity : 0,
        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${visible ? scale : 0.85})`,
        transition: visible 
          ? `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : 'none',
      }}
    >
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="relative min-h-[320vh]  text-slate-100">
      {/* Fixed background FrameScroller */}
      <FrameScroller />

      {/* Foreground content - Left and Right sides only */}
      <div className="relative z-10 min-h-[300vh]">
        <main className="flex min-h-screen justify-between px-8 pb-24 pt-32 lg:px-20 lg:pb-40 lg:pt-40">
          {/* Left Side Content */}
          <div className="flex w-[45%] flex-col gap-32 lg:gap-40">
            <RevealSection direction="left" delay={0}>
              <div className="space-y-6">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90">
                  PROFILE
                </p>
                <h1 className="text-5xl font-black tracking-tight text-gray-900 lg:text-7xl">
                  Dinesh<br />Kannaujiya
                </h1>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-gray-800 lg:text-2xl">
                    Software Engineer
                  </p>
                  <p className="text-sm font-medium text-gray-700 lg:text-base">
                    B.Tech — Computer Science &amp; Engineering
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection direction="left" delay={200}>
              <div className="space-y-6">
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90">
                  SKILLS
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'React Native',
                    'React.js',
                    'Node.js',
                    'Express',
                    'MongoDB',
                    'Tailwind CSS',
                    'Android',
                    'Firebase',
                    'Git',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full border-2 border-gray-900 bg-white/95 px-4 py-2 text-sm font-bold text-gray-900 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Center - Blank */}
          <div className="w-[10%]" />

          {/* Right Side Content */}
          <div className="flex w-[45%] flex-col gap-32 lg:gap-40">
            <RevealSection direction="right" delay={100}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90 mb-4">
                    CONTACT
                  </h2>
                  <div className="space-y-4 text-base">
                    <div className="flex items-center justify-between gap-4 border-b border-gray-300 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Email
                      </span>
                      <span className="text-right text-sm font-semibold text-gray-900">
                        kannaujiya00000@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-gray-300 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        GitHub
                      </span>
                      <span className="text-right text-sm font-semibold text-gray-900">
                        Available on request
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-gray-300 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        LinkedIn
                      </span>
                      <span className="text-right text-sm font-semibold text-gray-900">
                        Available on request
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90 mb-4">
                    LOCATION
                  </h2>
                  <p className="text-lg font-bold text-gray-900 lg:text-xl">
                    Deoria, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </main>
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
  const [loaded, setLoaded] = React.useState(false)

  useEffect(() => {
    let loadedCount = 0
    const images = []

    for (let i = FIRST_FRAME_INDEX; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = `/profile/${formatFrameNumber(i)}.png`

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

  const src = `/profile/${formatFrameNumber(frameIndex)}.png`

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 w-full overflow-hidden ">
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative h-full w-full">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
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
        </div>
      </div>
    </div>
  )
}







export default App
