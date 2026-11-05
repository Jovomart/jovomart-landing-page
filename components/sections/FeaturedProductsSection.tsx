'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { PRODUCTS } from '@/data'
import ProductCard from '@/components/ui/ProductCard'
import type { Product } from '@/types'
import WaveDivider from '@/components/ui/WaveDivider'

const TABS = [
  { label: 'All', value: 'all' },
  { label: 'Phones', value: 'phones' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Fashion', value: 'fashion' },
  { label: 'Computing', value: 'computing' },
]

const roundBtn =
  'flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink/55 ring-1 ring-ink/10 transition-all duration-200 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState('all')
  const [fading, setFading] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const filtered: Product[] =
    activeTab === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.tab === activeTab)

  const switchTab = (value: string) => {
    if (value === activeTab) return
    setFading(true)
    setTimeout(() => {
      setActiveTab(value)
      setFading(false)
      if (sliderRef.current) sliderRef.current.scrollLeft = 0
    }, 180)
  }

  const scroll = (dir: -1 | 1) => {
    const el = sliderRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.product-card')
    const step = card ? card.offsetWidth + 14 : 250
    el.scrollBy({ left: dir * step * 2, behavior: 'smooth' })
  }

  return (
    <section className="relative bg-white pt-14 sm:pt-20" aria-label="Featured products">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div data-animate="fade-up">
            <p className="text-[10.5px] font-semibold uppercase tracking-[.18em] text-ink/35">
              Student picks
            </p>
            <h2 className="mt-2.5 text-balance font-display text-[30px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[40px]">
              Handpicked for
              <br className="hidden sm:block" /> campus life
            </h2>
          </div>

          <div className="flex items-center gap-2" data-animate="fade-up" data-delay="80">
            <Link
              href="/shop"
              className="mr-1 hidden items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-semibold text-ink/60 transition-colors hover:bg-sand hover:text-ink sm:inline-flex"
            >
              View all
              <FontAwesomeIcon icon={faArrowRight} className="text-[9px]" />
            </Link>
            <button onClick={() => scroll(-1)} aria-label="Scroll products left" className={roundBtn}>
              <FontAwesomeIcon icon={faArrowLeft} className="text-[11px]" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Scroll products right" className={roundBtn}>
              <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
            </button>
          </div>
        </div>

        {/* Filter chips */}
        <div
          className="no-scrollbar mt-6 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Filter featured products"
        >
          <div className="flex w-max items-center gap-1.5">
            {TABS.map(({ label, value }) => (
              <button
                key={value}
                role="tab"
                aria-selected={activeTab === value}
                onClick={() => switchTab(value)}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[11.5px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  activeTab === value
                    ? 'bg-ink text-white'
                    : 'bg-sand text-ink/50 hover:text-ink/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-4">
          <div
            ref={sliderRef}
            className="no-scrollbar overflow-x-auto overflow-y-visible pb-3"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div
              className="flex gap-3.5"
              role="list"
              aria-label="Featured products"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? 'translateY(6px)' : 'none',
                transition: 'opacity .2s ease, transform .2s ease',
              }}
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink/[.06] pt-4">
          <p className="text-[11px] text-ink/40">
            Prices in naira · delivery calculated at checkout
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-ink/60 transition-colors hover:text-ink sm:hidden"
          >
            View all
            <FontAwesomeIcon icon={faArrowRight} className="text-[9px]" />
          </Link>
        </div>
      </div>

      <WaveDivider fill="#FBEFE3" className="mt-12 sm:mt-16" />
    </section>
  )
}
