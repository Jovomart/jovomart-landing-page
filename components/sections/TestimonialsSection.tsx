'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { TESTIMONIALS } from '@/data'
import { useScrollAnimations } from '@/hooks/useScrollAnimation'
import WaveDivider from '@/components/ui/WaveDivider'

const roundBtn =
  'flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink/50 ring-1 ring-ink/10 transition-all duration-200 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

export default function TestimonialsSection() {
  useScrollAnimations()
  const [active, setActive] = useState(0)
  const testimonial = TESTIMONIALS[active]

  const go = (dir: 1 | -1) =>
    setActive((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="relative bg-white pb-14 pt-14 sm:pb-20 sm:pt-20" aria-label="Student testimonials">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <h2
            className="text-balance font-display text-[30px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[40px]"
            data-animate="fade-up"
          >
            The campus
            <br className="hidden sm:block" /> loves JOVO.
          </h2>

          <div data-animate="fade-up" data-delay="80">
            <p className="text-[11px] font-medium text-ink/40">Explore testimonials:</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    i === active
                      ? 'bg-white text-ink shadow-soft ring-1 ring-ink/[.07]'
                      : 'bg-sand/80 text-ink/45 hover:text-ink/75'
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: item.avatarColor }}
                    aria-hidden="true"
                  />
                  {item.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-6 lg:mt-12 lg:grid-cols-[1.5fr_0.5fr] lg:items-center lg:gap-10">
          <div
            key={testimonial.id}
            className="animate-pop-in border-l-2 border-ink/15 pl-5 sm:pl-7"
            aria-live="polite"
          >
            <div className="flex items-center gap-1 text-[10px] text-ink/45" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} aria-hidden="true" />
              ))}
            </div>

            <blockquote className="mt-3 text-balance font-display text-[19px] font-normal leading-[1.42] tracking-[-0.015em] text-ink/85 sm:text-[25px]">
              “{testimonial.text}”
            </blockquote>

            <footer className="mt-5 flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-semibold text-white"
                style={{ background: testimonial.avatarColor }}
                aria-hidden="true"
              >
                {testimonial.initial}
              </span>
              <div className="min-w-0">
                <cite className="block truncate text-[12.5px] font-semibold not-italic text-ink">
                  {testimonial.name}
                </cite>
                <span className="block truncate text-[11px] text-ink/40">{testimonial.role}</span>
              </div>
              <div className="ml-auto flex gap-1.5">
                <button onClick={() => go(-1)} aria-label="Previous testimonial" className={roundBtn}>
                  <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
                </button>
                <button onClick={() => go(1)} aria-label="Next testimonial" className={roundBtn}>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                </button>
              </div>
            </footer>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[24px] bg-lilac p-5 sm:p-6">
              <p className="font-display text-[32px] font-medium leading-none tracking-tight text-ink">
                4.9<span className="ml-1 text-[14px] align-top">★</span>
              </p>
              <p className="mt-2 text-[11px] leading-[1.6] text-ink/60">
                from 1,200+ verified student reviews
              </p>
            </div>
            <div className="rounded-[24px] bg-mint p-5 sm:p-6">
              <p className="font-display text-[32px] font-medium leading-none tracking-tight text-ink">
                50K+
              </p>
              <p className="mt-2 text-[11px] leading-[1.6] text-ink/60">
                students buying and selling every month
              </p>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#F7F3EC" className="mt-12 sm:mt-16" />
    </section>
  )
}
