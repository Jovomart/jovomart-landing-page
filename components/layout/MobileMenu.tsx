'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark, faPlug, faMobileScreen, faSpa, faTv, faShirt,
  faLaptop, faGamepad, faBasketShopping, faBolt, faConciergeBell,
  faTruck, faStore, faBagShopping, faUser,
} from '@fortawesome/free-solid-svg-icons'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[800] flex ${open ? '' : 'hidden'}`}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[4px] animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <nav className="relative z-10 w-[290px] max-w-[85vw] bg-white h-full overflow-y-auto flex flex-col shadow-brand-xl animate-slide-in-left">
        {/* Header */}
        <div className="flex items-center justify-between p-[18px_20px] bg-brand-gradient">
          <span className="font-display font-black text-2xl text-white">JOVO</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white/80 text-xl p-[6px] rounded-[8px] hover:bg-white/20 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 p-[14px_12px]">
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center gap-[10px] bg-brand-gradient text-white rounded-[14px] p-[13px_18px] font-bold text-[14px] mb-[18px] hover:opacity-90 transition-opacity"
          >
            <FontAwesomeIcon icon={faUser} /> Sign In / Register
          </Link>

          <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-gray-400 px-3 py-[10px_12px_5px]">Categories</p>

          {[
            { href: '/appliances-deals', icon: faPlug, label: 'Appliances' },
            { href: '/phone-deals', icon: faMobileScreen, label: 'Phones & Tablets' },
            { href: '/beauty-deals', icon: faSpa, label: 'Health & Beauty' },
            { href: '/electronic-deals', icon: faTv, label: 'Electronics' },
            { href: '/fashion-deals', icon: faShirt, label: 'Fashion' },
            { href: '/computing-deals', icon: faLaptop, label: 'Computing' },
            { href: '/gaming-deals', icon: faGamepad, label: 'Gaming' },
            { href: '/groceries', icon: faBasketShopping, label: 'Groceries' },
          ].map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-[11px] rounded-[8px] text-[13.5px] font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-red transition-colors"
            >
              <FontAwesomeIcon icon={icon} className="w-5 text-center text-gray-400" />
              {label}
            </Link>
          ))}

          <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-gray-400 px-3 py-[10px_12px_5px] mt-2">More</p>

          {[
            { href: '/services', icon: faConciergeBell, label: 'Campus Services' },
            { href: '/logistics', icon: faTruck, label: 'Logistics & Delivery' },
            { href: '/become-seller', icon: faStore, label: 'Become a Seller' },
            { href: '/shop', icon: faBagShopping, label: 'Shop All' },
          ].map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-[11px] rounded-[8px] text-[13.5px] font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-red transition-colors"
            >
              <FontAwesomeIcon icon={icon} className="w-5 text-center text-gray-400" />
              {label}
            </Link>
          ))}

          <Link
            href="/flash-sales"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-[11px] rounded-[8px] text-[13.5px] font-semibold text-brand-orange hover:bg-gray-100 transition-colors"
          >
            <FontAwesomeIcon icon={faBolt} className="w-5 text-center" /> Flash Sales
          </Link>
        </div>
      </nav>
    </div>
  )
}
