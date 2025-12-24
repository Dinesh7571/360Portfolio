import React, { useEffect, useRef, useState } from 'react'
import FrameScroller from './components/FrameScroller'
import { Briefcase, Code, ExternalLink, Github, Calendar, MapPin, GraduationCap, Award, Monitor } from 'lucide-react'
import './App.css'

function RevealSection({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let hasTriggered = false
    let rafId = null

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
      if (rafId) return
      
      rafId = window.requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate progress based on scroll position - moves up as you scroll
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - elementTop) / (windowHeight + elementHeight * 0.5)
          )
        )
        setProgress(scrollProgress)
        rafId = null
      })
    }

    observer.observe(el)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
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
  // Move up on scroll - starts below and moves up as progress increases
  const translateY = direction === 'up' 
    ? initialTransform * (1 - progress) 
    : direction === 'left' || direction === 'right'
    ? -20 * (1 - progress) // Slight upward movement for all sections
    : 0

  const opacity = Math.min(1, progress * 1.5)
  const scale = 0.85 + progress * 0.15

  return (
    <section
      ref={ref}
      className="will-change-transform"
      style={{
        opacity: visible ? opacity : 0,
        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${visible ? scale : 0.85})`,
        transition: visible 
          ? `opacity 2s ease-in-out ${delay}ms, transform 2s ease-in-out ${delay}ms`
          : 'none',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </section>
  )
}

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Check if mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Show mobile message if on mobile device
  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-[#eaeef1] flex items-center justify-center p-6 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg border-2 border-gray-900 p-8 max-w-md text-center shadow-xl">
          <Monitor className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Desktop Experience Recommended</h2>
          <p className="text-gray-700 mb-4">
            This portfolio is optimized for desktop viewing. Please open this page on a desktop or laptop for the best experience.
          </p>
          <p className="text-sm text-gray-600">
            For the best feel, use a screen width of 1024px or larger.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative  text-slate-100 smooth-scroll">
      {/* Fixed background FrameScroller */}
      <FrameScroller />

      {/* Foreground content - Left and Right sides only */}
      <div className="relative z-10">
        <main className="flex justify-between px-8 pb-24 pt-32 lg:px-20 lg:pb-40 lg:pt-40">
          {/* Left Side Content */}
          <div className="flex w-[45%] flex-col gap-32 lg:gap-40">
            <RevealSection direction="left" delay={0}>
              <div className="space-y-6">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90">
                  PROFILE
                </p>
                <h1 className="text-5xl font-black tracking-tight text-gray-900 lg:text-7xl ">
                  Dinesh<br /><span className=''>Kannaujiya</span>
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

            <RevealSection direction="left" delay={400}>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-900" />
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90">
                    EXPERIENCE
                  </h2>
                </div>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-gray-900/30">
                    <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-gray-900"></div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">Frontend Developer</h3>
                      <p className="text-sm font-semibold text-gray-800">SR EDU Technology Pvt Ltd</p>
                      <div className="flex items-center gap-2 text-xs text-gray-700">
                        <Calendar className="w-3 h-3" />
                        <span>June 2025 — Present</span>
                        <MapPin className="w-3 h-3 ml-2" />
                        <span>Hyderabad</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        Building educational web frontends, optimizing performance and UI, collaborating with backend teams.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-900/30">
                    <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-gray-900"></div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">IT Developer</h3>
                      <p className="text-sm font-semibold text-gray-800">Gyankosha</p>
                      <div className="flex items-center gap-2 text-xs text-gray-700">
                        <Calendar className="w-3 h-3" />
                        <span>Feb 2025 — Jun 2025</span>
                        <MapPin className="w-3 h-3 ml-2" />
                        <span>Gorakhpur</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        Developed and maintained e-learning platform web & mobile.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-900/30">
                    <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-gray-900"></div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">Freelance Mobile App Developer</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-700">
                        <Calendar className="w-3 h-3" />
                        <span>Ongoing</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        Delivered multiple mobile apps to international clients, handling delivery, QA, and deployment.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-900/30">
                    <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-gray-900"></div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">App Developer Intern</h3>
                      <p className="text-sm font-semibold text-gray-800">Pinkmoon Technologies</p>
                      <div className="flex items-center gap-2 text-xs text-gray-700">
                        <Calendar className="w-3 h-3" />
                        <span>Oct 2024</span>
                        <MapPin className="w-3 h-3 ml-2" />
                        <span>Hyderabad</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        Translated Figma to pixel-perfect React Native screens and integrated APIs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection direction="left" delay={600}>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gray-900" />
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90">
                    EDUCATION & EXTRAS
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Institution of Technology and Management, GIDA Gorakhpur</h3>
                    <p className="text-sm font-semibold text-gray-800">B.Tech — Computer Science & Engineering</p>
                    <p className="text-xs text-gray-700 mt-1">2021 — 2025</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Organized coding workshops and managed college events.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Participated in hackathons; learned teamwork under stress.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Built monitoring tools using node-cron, axios and Mongoose.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Center - Blank */}
          <div className="w-[10%]" />

          {/* Right Side Content */}
          <div className="flex w-[35%] flex-col gap-32 lg:gap-40">
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

            <RevealSection direction="right" delay={300}>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-gray-900" />
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-900 opacity-90">
                    SELECTED PROJECTS
                  </h2>
                </div>
                <p className="text-xs font-semibold text-gray-800 mb-6">Full-stack · Mobile</p>
                
                <div className="space-y-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg border-2 border-gray-900 p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Truecaller Clone</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Caller ID & spam detection app using React Native + Kotlin native modules, Node.js backend.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-lg border-2 border-gray-900 p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Baymax</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Personal health companion: water intake, steps, reminders, Gemini API integration, TTS.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-lg border-2 border-gray-900 p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce App</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Cross-platform e-commerce app and website with Zod validations and responsive UI.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-lg border-2 border-gray-900 p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SiteWatch Pro</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Real-time website monitoring (MERN) with cron jobs, keyword checks and alerts.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                      <a href="#" className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
