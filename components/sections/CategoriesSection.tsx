'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { CATEGORIES } from '@/data'
import WaveDivider from '@/components/ui/WaveDivider'

const tileTones = ['bg-cream', 'bg-sky', 'bg-mint', 'bg-lilac', 'bg-peach', 'bg-sky-soft']

const arrowBtn =
  'flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink/55 ring-1 ring-ink/10 transition-all duration-200 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-cream'

export default function CategoriesSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  return (
    <section className="relative bg-cream pt-14 sm:pt-20" aria-label="Shop by category">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div data-animate="fade-up">
            <p className="text-[10.5px] font-semibold uppercase tracking-[.18em] text-ink/35">
              The catalogue
            </p>
            <h2 className="mt-2.5 text-balance font-display text-[30px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[40px]">
              Browse the catalogue
            </h2>
          </div>
          <div
            className="flex items-center gap-2"
            data-animate="fade-up"
            data-delay="80"
          >
            <Link
              href="/shop"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12px] font-semibold text-ink/70 ring-1 ring-ink/[.07] transition-colors hover:bg-white/70 hover:text-ink"
            >
              Browse everything
              <FontAwesomeIcon icon={faArrowRight} className="text-[9px]" />
            </Link>
            <div className="hidden gap-1.5 sm:flex">
              <button onClick={() => scroll(-1)} aria-label="Scroll categories left" className={arrowBtn}>
                <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
              </button>
              <button onClick={() => scroll(1)} aria-label="Scroll categories right" className={arrowBtn}>
                <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-7 rounded-[30px] bg-ink p-3.5 sm:p-5" data-animate="fade-up" data-delay="120">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-smooth pb-1"
          >
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.id}
                href={cat.href}
                className={`group w-[186px] shrink-0 snap-start rounded-[20px] ${tileTones[i % tileTones.length]} p-2.5 transition-transform duration-300 hover:-translate-y-1 sm:w-[206px]`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-white/40">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="206px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex items-start justify-between gap-2 px-1 pb-1 pt-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-[13px] font-medium tracking-tight text-ink">
                      {cat.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] text-ink/45">{cat.count}</p>
                  </div>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-[8px] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-ink/40">
            Thousands of items from verified campus sellers
          </p>
          <div className="flex items-center gap-1.5 sm:hidden">
            <button onClick={() => scroll(-1)} aria-label="Scroll categories left" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink/50 ring-1 ring-ink/10">
              <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Scroll categories right" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink/50 ring-1 ring-ink/10">
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            </button>
          </div>
        </div>
      </div>

      <WaveDivider fill="#0E0E10" variant="hill" className="mt-10 sm:mt-14" />
    </section>
  )
}
