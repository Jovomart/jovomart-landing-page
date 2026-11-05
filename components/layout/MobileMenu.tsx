'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark, faPlug, faMobileScreen, faSpa, faTv, faShirt,
  faLaptop, faGamepad, faBasketShopping, faBolt, faConciergeBell,
  faTruck, faStore, faBagShopping, faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

interface Props {
  open: boolean
  onClose: () => void
}

const categories = [
  { href: '/phone-deals', icon: faMobileScreen, label: 'Phones & tablets' },
  { href: '/electronic-deals', icon: faTv, label: 'Electronics' },
  { href: '/fashion-deals', icon: faShirt, label: 'Fashion' },
  { href: '/computing-deals', icon: faLaptop, label: 'Computing' },
  { href: '/beauty-deals', icon: faSpa, label: 'Health & beauty' },
  { href: '/appliances-deals', icon: faPlug, label: 'Appliances' },
  { href: '/gaming-deals', icon: faGamepad, label: 'Gaming' },
  { href: '/groceries', icon: faBasketShopping, label: 'Groceries' },
]

const secondary = [
  { href: '/services', icon: faConciergeBell, label: 'Campus services' },
  { href: '/logistics', icon: faTruck, label: 'Logistics & delivery' },
  { href: '/become-seller', icon: faStore, label: 'Become a seller' },
  { href: '/shop', icon: faBagShopping, label: 'Shop all' },
]

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[800] lg:hidden" id="mobile-menu">
      <div
        className="absolute inset-0 animate-fade-in bg-ink/45 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="relative flex h-full w-[88%] max-w-[360px] animate-pop-in flex-col overflow-y-auto rounded-r-[28px] bg-cream shadow-lift"
      >
        <div className="flex items-center justify-between px-5 pb-3 pt-5">
          <Image
            src="/images/Jovo_official_logo.png"
            alt="JOVO"
            width={160}
            height={40}
            className="h-9 w-[150px] object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink/70 transition-colors hover:bg-white hover:text-ink"
          >
            <FontAwesomeIcon icon={faXmark} className="text-[13px]" />
          </button>
        </div>

        <div className="px-4 pb-8 pt-2">
          <Link
            href="/flash-sales"
            onClick={onClose}
            className="flex items-center justify-between gap-2 rounded-2xl bg-ink px-4 py-3 text-[13px] font-semibold text-white"
          >
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBolt} className="text-[11px]" />
              Flash sale — up to 60% off
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="text-[11px] text-white/60" />
          </Link>

          <nav aria-label="Main" className="mt-6">
            <ul className="space-y-0.5">
              {[
                { href: '/shop', label: 'Shop all' },
                { href: '/flash-sales', label: 'Flash sales' },
                { href: '/services', label: 'Services' },
                { href: '/logistics', label: 'Delivery' },
                { href: '/become-seller', label: 'Sell on JOVO' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className="flex items-center justify-between border-b border-ink/[.07] py-3 font-display text-[19px] tracking-[-0.01em] text-ink transition-colors hover:text-ink/60"
                  >
                    {label}
                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px] text-ink/25" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.16em] text-ink/35">
            Categories
          </p>
          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            {categories.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="flex items-center gap-2 rounded-xl bg-white/70 px-2.5 py-2.5 text-[11.5px] font-medium text-ink/65 transition-colors hover:bg-white hover:text-ink"
              >
                <FontAwesomeIcon icon={icon} className="w-3.5 text-center text-[10px] text-ink/35" />
                <span className="truncate">{label}</span>
              </Link>
            ))}
          </div>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.16em] text-ink/35">
            More
          </p>
          <ul className="mt-2.5 space-y-0.5">
            {secondary.map(({ href, icon, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 text-[12.5px] font-medium text-ink/60 transition-colors hover:text-ink"
                >
                  <FontAwesomeIcon icon={icon} className="w-4 text-center text-[10.5px] text-ink/30" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex gap-2">
            <Link
              href="/login"
              onClick={onClose}
              className="flex flex-1 items-center justify-center rounded-full bg-ink px-4 py-2.5 text-[12.5px] font-semibold text-white"
            >
              Sign in
            </Link>
            <Link
              href="/cart"
              onClick={onClose}
              className="flex flex-1 items-center justify-center rounded-full bg-white px-4 py-2.5 text-[12.5px] font-semibold text-ink ring-1 ring-ink/10"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
