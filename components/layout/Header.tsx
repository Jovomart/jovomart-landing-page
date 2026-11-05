'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBagShopping,
  faBolt,
  faHeart,
  faMagnifyingGlass,
  faUser,
  faPlug,
  faMobileScreen,
  faSpa,
  faTv,
  faShirt,
  faLaptop,
  faGamepad,
  faBasketShopping,
} from '@fortawesome/free-solid-svg-icons'
import MobileMenu from './MobileMenu'

export const CART_EVENT = 'jovo:cart-update'

const catItems = [
  { href: '/appliances-deals', icon: faPlug, label: 'Appliances' },
  { href: '/phone-deals', icon: faMobileScreen, label: 'Phones' },
  { href: '/beauty-deals', icon: faSpa, label: 'Beauty' },
  { href: '/electronic-deals', icon: faTv, label: 'Electronics' },
  { href: '/fashion-deals', icon: faShirt, label: 'Fashion' },
  { href: '/computing-deals', icon: faLaptop, label: 'Computing' },
  { href: '/gaming-deals', icon: faGamepad, label: 'Gaming' },
  { href: '/groceries', icon: faBasketShopping, label: 'Groceries' },
]

const navLinks = [
  { href: '/shop', label: 'Shop all' },
  { href: '/services', label: 'Services' },
  { href: '/logistics', label: 'Delivery' },
  { href: '/become-seller', label: 'Sell on JOVO' },
]

const iconLink =
  'flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors duration-200 hover:bg-white/80 hover:text-ink'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: Event) =>
      setCartCount((e as CustomEvent).detail as number)
    window.addEventListener(CART_EVENT, handler)
    return () => window.removeEventListener(CART_EVENT, handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        id="site-header"
        role="banner"
        className={[
          'sticky left-0 top-0 z-[500] w-full border-b border-ink/[.06]',
          'bg-cream/80 backdrop-blur-xl',
          'transition-shadow duration-300',
          scrolled ? 'shadow-[0_12px_32px_-26px_rgba(14,14,16,.55)]' : '',
        ].join(' ')}
      >
        <div className="mx-auto flex h-[66px] max-w-[1360px] items-center gap-2 px-4 sm:px-6 lg:h-[74px]">
          {/* Left - menu + logo */}
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full text-ink/70 transition-colors hover:bg-white/80 active:scale-95 lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="h-[1.5px] w-[17px] rounded-full bg-current" />
              <span className="h-[1.5px] w-[17px] rounded-full bg-current" />
              <span className="h-[1.5px] w-[17px] rounded-full bg-current" />
            </button>

            <Link
              href="/"
              aria-label="JOVO home"
              className="shrink-0 transition-opacity duration-200 hover:opacity-80 active:scale-[.98]"
            >
              <Image
                src="/images/Jovo_official_logo.png"
                alt="JOVO"
                width={160}
                height={40}
                priority
                className="h-8 w-[136px] object-cover sm:h-10 sm:w-[160px]"
              />
            </Link>
          </div>

          {/* Centre - floating pill nav */}
          <nav
            aria-label="Main navigation"
            className="mx-auto hidden items-center gap-0.5 rounded-full bg-white/60 p-1 ring-1 ring-ink/[.05] backdrop-blur lg:flex"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full px-3.5 py-[7px] text-[12.5px] font-medium text-ink/60 transition-colors duration-200 hover:bg-white hover:text-ink"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/flash-sales"
              className="ml-0.5 flex items-center gap-1.5 rounded-full bg-ink px-3 py-[7px] text-[11.5px] font-medium text-white transition-colors hover:bg-ink/85"
            >
              <FontAwesomeIcon icon={faBolt} className="text-[9px]" />
              Flash sales
            </Link>
          </nav>

          {/* Right - actions */}
          <div className="ml-auto flex shrink-0 items-center gap-0.5 lg:ml-0">
            <Link href="/shop" aria-label="Search products" className={`${iconLink} hidden sm:flex`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[13px]" />
            </Link>

            <Link href="/wishlist" aria-label="Wishlist" className={`${iconLink} hidden sm:flex`}>
              <FontAwesomeIcon icon={faHeart} className="text-[13px]" />
            </Link>

            <Link
              href="/cart"
              aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} item${cartCount !== 1 ? 's' : ''}` : ''}`}
              className={`${iconLink} relative`}
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-[13px]" />
              {cartCount > 0 && (
                <span
                  className="absolute right-0.5 top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-ink px-1 text-[9px] font-semibold text-white ring-2 ring-cream"
                  aria-live="polite"
                >
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/login"
              className="ml-1.5 hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-pill transition-all duration-200 hover:bg-ink/85 active:scale-[.98] sm:inline-flex"
            >
              <FontAwesomeIcon icon={faUser} className="text-[10px]" />
              Sign in
            </Link>

            <Link
              href="/shop"
              aria-label="Start shopping"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white sm:hidden"
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
            </Link>
          </div>
        </div>

        {/* Category strip */}
        <nav
          aria-label="Product categories"
          className="border-t border-ink/[.05] bg-white/25"
        >
          <div
            className="no-scrollbar mx-auto flex max-w-[1360px] items-center gap-0.5 overflow-x-auto px-3 py-1.5 sm:px-5"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {catItems.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11.5px] font-medium text-ink/50 transition-colors duration-200 hover:bg-white hover:text-ink"
              >
                <FontAwesomeIcon icon={icon} className="text-[10px]" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
