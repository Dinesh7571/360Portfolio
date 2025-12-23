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
import './App.css'

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-slate-100">
      {/* Foreground content */}
      <div className="relative z-10">
        <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 pb-24 pt-24 lg:flex-row lg:gap-16 lg:pb-32 lg:pt-28">
          {/* Left column – identity & summary */}
          <section className="lg:sticky lg:top-24 lg:h-fit lg:w-[40%]">
            <div className="space-y-8 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl shadow-[0_0_80px_rgba(15,23,42,0.9)]">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                  DK / Portfolio
                </p>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Dinesh Kannaujiya
                </h1>
                <p className="text-sm font-medium text-slate-300">
                  B.Tech — Computer Science &amp; Engineering
                </p>
                <p className="text-xs text-slate-400">
                  Frontend &amp; React Native Engineer crafting mobile-first,
                  performant products.
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Contact
                </h2>
                <div className="space-y-2 text-sm">
                  <a
                    href="mailto:kannaujiya00000@gmail.com"
                    className="group flex items-center gap-2 text-slate-200 transition hover:text-sky-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/60 text-sky-300 group-hover:border-sky-300">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate text-xs sm:text-sm">
                      kannaujiya00000@gmail.com
                    </span>
                  </a>
                  <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/60 text-sky-300">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span>Available for calls on request</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/60 text-sky-300">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <span>Deoria, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-sky-400 hover:bg-sky-400/10"
                >
                  <Github className="h-3.5 w-3.5 text-slate-300 group-hover:text-sky-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-sky-400 hover:bg-sky-400/10"
                >
                  <Linkedin className="h-3.5 w-3.5 text-slate-300 group-hover:text-sky-300" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
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
                      className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-medium text-slate-200 shadow-sm backdrop-blur"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-3 border-t border-white/5 pt-4">
                <p className="text-xs text-slate-300">
                  Available for{' '}
                  <span className="font-semibold text-sky-300">
                    React / React Native roles
                  </span>{' '}
                  &amp; freelance work.
                </p>
                <a
                  href="mailto:kannaujiya00000@gmail.com?subject=React%20/%20React%20Native%20Opportunity"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Let&apos;s build something</span>
                </a>
              </div>
            </div>
          </section>

          {/* Right column – scrollable details */}
          <section className="flex-1 space-y-10 lg:space-y-12">
            {/* About */}
            <section className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
              <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                  <Code2 className="h-3 w-3" />
                </span>
                About
              </h2>
              <p className="text-sm leading-relaxed text-slate-200">
                I build mobile-first experiences and full-stack products. My
                primary focus is{' '}
                <span className="font-semibold text-sky-300">
                  React Native app development
                </span>
                , complemented by strong backend skills (
                <span className="font-medium">Node.js, Express, MongoDB</span>).
                I currently work as a{' '}
                <span className="font-medium">
                  Frontend Developer at SR EDU Technology Pvt Ltd, Hyderabad
                </span>{' '}
                (June 2025 — Present) and also do freelance app projects for
                international clients. I prefer minimalist, performant apps and
                pragmatic engineering.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                Interests: Science-fiction movies · Technology · AI tools
              </p>
            </section>

            {/* Projects */}
            <section className="space-y-5 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Selected Projects
                </h2>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-300">
                  Full-stack · Mobile
                </span>
              </div>

              <div className="space-y-4">
                {/* Truecaller Clone */}
                <article className="group rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-sky-400/80 hover:bg-sky-400/5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      Truecaller Clone
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      React Native · Node.js
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Caller ID &amp; spam detection app using React Native +
                    Kotlin native modules, Node.js backend.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    {['React Native', 'Kotlin', 'Node.js', 'Spam Detection'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/60 px-2.5 py-1 text-slate-200"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <Code2 className="h-3 w-3" />
                      Code
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </button>
                  </div>
                </article>

                {/* Baymax */}
                <article className="group rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-sky-400/80 hover:bg-sky-400/5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      Baymax
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Health · AI
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Personal health companion: water intake, steps, reminders,
                    Gemini API integration, TTS.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    {['React Native', 'Gemini API', 'TTS', 'Notifications'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/60 px-2.5 py-1 text-slate-200"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <Code2 className="h-3 w-3" />
                      Code
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </button>
                  </div>
                </article>

                {/* E-commerce App */}
                <article className="group rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-sky-400/80 hover:bg-sky-400/5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      E-commerce App
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Cross-platform
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Cross-platform e-commerce app and website with Zod
                    validations and responsive UI.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    {['React Native', 'React.js', 'Zod', 'Responsive UI'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/60 px-2.5 py-1 text-slate-200"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <Code2 className="h-3 w-3" />
                      Code
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </button>
                  </div>
                </article>

                {/* SiteWatch Pro */}
                <article className="group rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-sky-400/80 hover:bg-sky-400/5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      SiteWatch Pro
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Monitoring
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Real-time website monitoring (MERN) with cron jobs, keyword
                    checks and alerts.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    {['MERN', 'node-cron', 'Monitoring', 'Alerts'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/60 px-2.5 py-1 text-slate-200"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <Code2 className="h-3 w-3" />
                      Code
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-slate-50 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </button>
                  </div>
                </article>
              </div>
            </section>

            {/* Experience */}
            <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
              <h2 className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                  <Briefcase className="h-3 w-3" />
                </span>
                Experience
              </h2>

              <div className="space-y-4">
                <article className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      Frontend Developer — SR EDU Technology Pvt Ltd
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      June 2025 — Present · Hyderabad
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Building educational web frontends, optimizing performance
                    and UI, collaborating with backend teams.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      IT Developer — Gyankosha
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      Feb 2025 — Jun 2025 · Gorakhpur
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Developed and maintained e-learning platform web &amp;
                    mobile.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      Freelance Mobile App Developer
                    </h3>
                    <span className="text-[10px] text-slate-400">Ongoing</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Delivered multiple mobile apps to international clients,
                    handling delivery, QA, and deployment.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      App Developer Intern — Pinkmoon Technologies
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      Oct 2024 · Hyderabad
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Translated Figma to pixel-perfect React Native screens and
                    integrated APIs.
                  </p>
                </article>
              </div>
            </section>

            {/* Education & Extras */}
            <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
              <h2 className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10 text-violet-300">
                  <GraduationCap className="h-3 w-3" />
                </span>
                Education &amp; Extras
              </h2>

              <article className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-slate-50">
                  Institution of Technology and Management, GIDA Gorakhpur
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  B.Tech — Computer Science &amp; Engineering (2021 — 2025)
                </p>
              </article>

              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Organized coding workshops and managed college events.</li>
                <li>
                  • Participated in hackathons; learned teamwork under stress.
                </li>
                <li>
                  • Built monitoring tools using node-cron, axios and Mongoose.
                </li>
              </ul>
            </section>

            {/* CTA / Footer */}
            <section className="rounded-3xl border border-sky-500/40 bg-sky-500/10 p-6 text-xs text-slate-100 backdrop-blur-xl">
              <p className="font-medium">
                Want the source code, resume PDF, or a live demo?
              </p>
              <p className="mt-1">
                Email me at{' '}
                <a
                  href="mailto:kannaujiya00000@gmail.com"
                  className="font-semibold text-sky-300 underline-offset-4 hover:underline"
                >
                  kannaujiya00000@gmail.com
                </a>
              </p>
              <p className="mt-3 text-[11px] text-slate-300">
                I&apos;m currently open to React, React Native, and full-stack
                roles, along with freelance collaborations.
              </p>
            </section>
          </section>
        </main>
      </div>
    </div>
  )
}



export default Portfolio
