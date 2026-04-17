'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { PRODUCTS } from '@/data'
import ProductCard from '@/components/ui/ProductCard'
import type { Product } from '@/types'

const TABS = [
  { label: 'All Products', value: 'all' },
  { label: ' Phones', value: 'phones' },
  { label: ' Electronics', value: 'electronics' },
  { label: ' Fashion', value: 'fashion' },
  { label: ' Computing', value: 'computing' },
]

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState('all')
  const [fading, setFading] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const filtered: Product[] = activeTab === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.tab === activeTab)

  const switchTab = (val: string) => {
    if (val === activeTab) return
    setFading(true)
    setTimeout(() => {
      setActiveTab(val)
      setFading(false)
      if (sliderRef.current) sliderRef.current.scrollLeft = 0
    }, 250)
  }

  const scroll = (dir: 'left' | 'right') => {
    const el = sliderRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.product-card')
    const cardW = card ? card.offsetWidth + 16 : 246
    el.scrollBy({ left: dir === 'left' ? -cardW * 2 : cardW * 2, behavior: 'smooth' })
  }

  return (
    <section className="py-10 sm:py-[60px] bg-white" aria-label="Featured products">
      {/* Header */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-4 sm:pb-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 flex-wrap">
        <div data-animate="fade-up">
          <span className="inline-flex items-center text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-[.2em] text-brand-orange bg-[rgba(255,140,0,.08)] border border-[rgba(255,140,0,.2)] px-3 sm:px-[14px] py-1 sm:py-[5px] rounded-full mb-1.5 sm:mb-2 w-fit">
            Handpicked
          </span>
          <h2 className="font-display text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-black leading-[1.15] text-gray-900 md:mt-0 mt-1">
            Featured <em className="not-italic text-brand-red">Products</em>
          </h2>
        </div>
        <Link href="/shop" className="inline-flex items-center gap-[5px] text-[12px] sm:text-[13px] font-bold text-brand-red px-4 sm:px-[18px] py-0.5 sm:py-2 rounded-full hover:bg-[rgba(180,34,37,.06)] transition-colors whitespace-nowrap self-start sm:self-center">
          View All <FontAwesomeIcon icon={faArrowRight} className="text-[10px] sm:text-[12px]" />
        </Link>
      </div>

      {/* Tabs */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 mb-5 sm:mb-6 overflow-x-auto no-scrollbar" role="tablist" aria-label="Filter products">
        <div className="flex gap-1.5 sm:gap-2 w-max py-[3px]">
          {TABS.map(({ label, value }) => (
            <button
              key={value}
              role="tab"
              aria-selected={activeTab === value}
              onClick={() => switchTab(value)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-bold transition-all whitespace-nowrap font-body ${
                activeTab === value
                  ? 'bg-brand-gradient text-white shadow-[0_4px_14px_rgba(180,34,37,.3)]'
                  : 'text-gray-500 bg-gray-100 hover:text-brand-red hover:bg-[rgba(180,34,37,.06)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1300px] mx-auto px-8 sm:px-[52px]">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-2 sm:left-[6px] top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center text-[11px] sm:text-[13px] shadow-brand hover:bg-brand-red hover:border-brand-red hover:text-white hover:shadow-[0_4px_14px_rgba(180,34,37,.3)] transition-all z-10"
          aria-label="Scroll products left"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div ref={sliderRef} className="overflow-x-auto overflow-y-visible no-scrollbar pb-4" style={{ scrollBehavior: 'smooth' }}>
          <div
            className="flex gap-3 sm:gap-4 py-1 px-0.5 pb-2"
            role="list"
            aria-label="Featured products"
            style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(8px)' : 'none', transition: 'opacity .25s, transform .25s' }}
          >
            {filtered.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-auto">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute -right-2 sm:right-[6px] top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center text-[11px] sm:text-[13px] shadow-brand hover:bg-brand-red hover:border-brand-red hover:text-white hover:shadow-[0_4px_14px_rgba(180,34,37,.3)] transition-all z-10"
          aria-label="Scroll products right"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  )
}