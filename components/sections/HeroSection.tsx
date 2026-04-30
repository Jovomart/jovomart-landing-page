'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFire, faTruckFast, faBolt } from '@fortawesome/free-solid-svg-icons'
import { useScrollAnimations, useCounterAnimations } from '@/hooks/useScrollAnimation'

export default function HeroSection() {
  useScrollAnimations()
  useCounterAnimations()

  useEffect(() => {
    if (window.innerWidth <= 1024) return
    const orbs = document.querySelectorAll<HTMLElement>('.hero-orb')
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy
      orbs.forEach((orb, i) => {
        const s = (i + 1) * 11
        orb.style.transform = `translate(${dx * s}px, ${dy * s}px)`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const floatCards = [
    { src: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=300&auto=format&fit=crop&q=80', alt: 'iPhone 15 Pro', name: 'iPhone 15 Pro', price: '₦850,000', badge: '🔥 Hot', badgeClass: 'bg-brand-orange', anim: 'animate-float-y', pos: 'top-0 right-[110px]', w: '220px' },
    { src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop&q=80', alt: 'MacBook Air M2', name: 'MacBook Air M2', price: '₦1,200,000', badge: '-30%', badgeClass: 'bg-brand-red', anim: 'animate-float-y-2', pos: 'top-[90px] right-0', w: '205px' },
    { src: 'https://images.unsplash.com/photo-1629429407756-4a7703614972?w=300&auto=format&fit=crop&q=80', alt: 'PS5 Console', name: 'PS5 Console', price: '₦490,000', badge: null, badgeClass: '', anim: 'animate-float-y-3', pos: 'top-[220px] right-[90px]', w: '195px' },
  ]

  return (
    <section
      className="relative min-h-[calc(100vh-142px)] bg-[#0A0A0A] flex items-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-[70px_24px_90px]"
      aria-label="Welcome to JOVO"
    >
      {/* Orbs - scaled for smaller screens */}
      <div className="hero-orb pointer-events-none absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] -top-[100px] sm:-top-[150px] md:-top-[200px] -left-[100px] sm:-left-[150px] rounded-full bg-[radial-gradient(circle,rgba(180,34,37,.28),transparent_70%)] animate-orb-float" aria-hidden="true" />
      <div className="hero-orb pointer-events-none absolute w-[250px] h-[250px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] -bottom-[100px] sm:-bottom-[150px] md:-bottom-[180px] -right-[50px] sm:-right-[100px] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,.2),transparent_70%)] animate-orb-float-2" aria-hidden="true" />
      <div className="hero-orb pointer-events-none absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] top-[40%] left-[38%] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,.08),transparent_70%)] animate-orb-float-3" aria-hidden="true" />
      
      {/* Grid - responsive background size */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[50px] items-center">
        {/* Left - text content */}
        <div className="max-w-[580px] lg:text-left text-center mx-auto lg:mx-0 px-2 sm:px-0">
          <div className="inline-flex items-center gap-[7px] bg-[rgba(255,140,0,.1)] border border-[rgba(255,140,0,.3)] text-brand-orange px-3 sm:px-4 py-[5px] sm:py-[7px] rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[.1em] mb-5 sm:mb-[22px]" data-animate="fade-up">
            <FontAwesomeIcon icon={faBolt} className="text-xs sm:text-sm" aria-hidden="true" />
            Nigeria's #1 Campus Marketplace
          </div>

          <h1 className="font-display text-[35px] xs:text-[34px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-black leading-[1.1] sm:leading-[1.05] text-white mb-4 sm:mb-[18px]" data-animate="fade-up" data-delay="100">
            Shop Smarter.<br />
            <em className="not-italic gradient-text">Live Better.</em><br />
            <span className="headline-outline">On Campus.</span>
          </h1>

          <p className="text-[13px] sm:text-[15px] leading-[1.6] sm:leading-[1.8] text-white/50 mb-6 sm:mb-8 max-w-[460px] mx-auto lg:mx-0 px-2 sm:px-0" data-animate="fade-up" data-delay="200">
            Discover thousands of products from verified campus sellers. Fast delivery, unbeatable prices, and exclusive student deals — all in one place.
          </p>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-11 justify-center lg:justify-start" data-animate="fade-up" data-delay="300">
            <Link href="/shop" className="inline-flex items-center gap-2 bg-brand-gradient text-white px-5 sm:px-7 py-3 sm:py-[13px] rounded-full text-[13px] sm:text-[15px] font-bold shadow-[0_6px_22px_rgba(180,34,37,.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(180,34,37,.45)] transition-all">
              Start Shopping <FontAwesomeIcon icon={faArrowRight} className="text-xs sm:text-sm" />
            </Link>
            <Link href="/flash-sales" className="inline-flex items-center gap-2 bg-transparent text-white/80 px-5 sm:px-7 py-3 sm:py-[13px] rounded-full text-[13px] sm:text-[15px] font-bold border border-white/25 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all">
              <FontAwesomeIcon icon={faFire} className="text-xs sm:text-sm" /> Flash Sales
            </Link>
          </div>

          {/* Stats - responsive sizing */}
          <div className="flex items-center px-4 sm:px-[22px] py-3 sm:py-[18px] bg-white/[.05] border border-white/[.08] rounded-[16px] sm:rounded-[20px] backdrop-blur-[10px] w-full justify-center lg:justify-start" data-animate="fade-up" data-delay="400" aria-label="JOVO statistics">
            {[
              { count: '50000', label: 'Products' },
              null,
              { count: '5000', label: 'Sellers' },
              null,
              { count: '30', label: 'Min Delivery', suffix: '' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} className="w-px h-6 sm:h-9 bg-white/10 mx-2 sm:mx-4" aria-hidden="true" />
              ) : (
                <div key={i} className="flex-1 text-center">
                  <strong className="stat-num block text-[18px] sm:text-[22px] font-extrabold font-display gradient-text" data-count={item.count}>{item.count === '50000' ? '0' : '0'}</strong>
                  <span className="text-[8px] sm:text-[10px] text-white/40 font-semibold uppercase tracking-[.08em]">{item.label}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT SIDE - DESKTOP ONLY (lg screens and above) */}
        {/* Floating cards area - COMPLETELY REMOVED on mobile/tablet */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="relative h-[480px] w-full">
            {floatCards.map((card, i) => (
              <div
                key={i}
                className={`absolute bg-white rounded-[20px] overflow-hidden shadow-brand-xl ${card.anim}`}
                style={{ 
                  width: card.w, 
                  top: card.pos.split(' ')[0].replace('top-', '').replace('[', '').replace(']', ''), 
                  right: card.pos.split(' ')[1].replace('right-', '').replace('[', '').replace(']', '') 
                }}
              >
                <Image src={card.src} alt={card.alt} width={400} height={160} className="w-full h-[160px] object-cover" />
                <div className="px-[14px] py-[11px] flex justify-between items-center">
                  <span className="text-[12px] font-bold text-gray-900 line-clamp-1">{card.name}</span>
                  <span className="text-[13px] font-extrabold text-brand-red whitespace-nowrap">{card.price}</span>
                </div>
                {card.badge && (
                  <span className={`absolute top-[10px] right-[10px] ${card.badgeClass} text-white text-[10px] font-extrabold px-[9px] py-[3px] rounded-full`}>{card.badge}</span>
                )}
              </div>
            ))}

            {/* Desktop notification */}
            <div className="absolute left-0 top-[140px] bg-white/96 backdrop-blur-[16px] rounded-[14px] px-[14px] py-[11px] flex items-center gap-[9px] shadow-brand-lg border border-gray-200 animate-float-y z-10">
              <span className="text-[22px]">🛍️</span>
              <div className="flex flex-col">
                <strong className="text-[11px] font-bold text-gray-900">Chidi just bought</strong>
                <span className="text-[10px] text-gray-600">Airpods Pro — 2 mins ago</span>
              </div>
            </div>

            {/* Desktop delivery tag */}
            <div className="absolute left-6 bottom-14 bg-brand-gradient text-white rounded-full px-4 py-[9px] flex items-center gap-[7px] text-[12px] font-bold shadow-[0_8px_24px_rgba(180,34,37,.4)] animate-float-y z-10 whitespace-nowrap">
              <FontAwesomeIcon icon={faTruckFast} className="text-xs" />
              <span>Delivered in <strong>28 min</strong></span>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET: NO right side content at all - completely removed as requested */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[7px] z-10" aria-hidden="true">
        <div className="w-[22px] h-[34px] border-2 border-white/20 rounded-[11px] flex justify-center pt-[5px]">
          <div className="w-[3px] h-[7px] bg-white/50 rounded-sm animate-scroll-wheel" />
        </div>
        <span className="text-[10px] text-white/30 tracking-[.1em] uppercase">Scroll to explore</span>
      </div>
    </section>
  )
}