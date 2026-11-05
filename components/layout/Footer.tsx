'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { showToast } from '@/components/ui/toast'
import Doodle from '@/components/ui/Doodle'

const columns = [
  {
    title: 'Shop',
    links: [
      { href: '/phone-deals', label: 'Phones & tablets' },
      { href: '/electronic-deals', label: 'Electronics' },
      { href: '/fashion-deals', label: 'Fashion' },
      { href: '/computing-deals', label: 'Computing' },
      { href: '/gaming-deals', label: 'Gaming' },
      { href: '/beauty-deals', label: 'Health & beauty' },
      { href: '/groceries', label: 'Groceries' },
      { href: '/flash-sales', label: 'Flash sales' },
    ],
  },
  {
    title: 'Sell',
    links: [
      { href: '/become-seller', label: 'Become a seller' },
      { href: '/seller/login', label: 'Seller login' },
      { href: '/seller/dashboard', label: 'Seller dashboard' },
      { href: '/seller/application-status', label: 'Seller status' },
      { href: '/logistics', label: 'Delivery & logistics' },
      { href: '/services', label: 'Campus services' },
      { href: '/accommodations', label: 'Accommodation' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About JOVO' },
      { href: '/help', label: 'Help centre' },
      { href: '/contact', label: 'Contact us' },
      { href: '/terms', label: 'Terms of service' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/blog', label: 'Blog' },
    ],
  },
]

const socials = [
  { href: 'https://instagram.com/jovong', icon: faInstagram, label: 'Instagram' },
  { href: 'https://twitter.com/jovong', icon: faXTwitter, label: 'Twitter / X' },
  { href: 'https://facebook.com/jovong', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://tiktok.com/@jovong', icon: faTiktok, label: 'TikTok' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!valid) {
      showToast('Please enter a valid email address', 'error')
      return
    }
    setSubmitted(true)
    showToast("🎉 You're subscribed! Welcome to JOVO deals.", 'success')
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <footer className="relative overflow-hidden bg-ink text-white/50" role="contentinfo">
      <Doodle
        tone="dark"
        className="pointer-events-none absolute -bottom-24 right-[-40px] hidden w-[420px] opacity-50 md:block"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-9 lg:grid-cols-[1.15fr_1fr_1fr_1fr] lg:gap-8">
          {/* Newsletter card */}
          <div className="rounded-[26px] bg-cream px-5 py-6 text-ink sm:px-6">
            <h2 className="font-display text-[21px] font-medium leading-tight tracking-[-0.02em]">
              Join the JOVO journal
            </h2>
            <p className="mt-2 text-[12.5px] leading-[1.65] text-ink/55">
              Deals, fresh arrivals and campus-only drops - straight to your inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 flex items-center gap-1.5 rounded-full bg-white p-1.5"
              noValidate
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-required="true"
                autoComplete="email"
                className="min-w-0 flex-1 rounded-full bg-transparent px-3 py-1.5 text-[12.5px] text-ink placeholder:text-ink/35"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-lilac px-3.5 py-2 text-[12px] font-semibold text-ink transition-colors duration-200 hover:bg-lilac-deep"
              >
                {submitted ? (
                  <>
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[10px]" />
                    Done
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            <p className="mt-2.5 text-[10.5px] leading-relaxed text-ink/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Link columns */}
          {columns.map(({ title, links }) => (
            <nav key={title} aria-label={`${title} links`} className="min-w-0">
              <h3 className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/80">
                {title}
              </h3>
              <ul className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-1">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[12px] leading-snug text-white/45 transition-colors duration-200 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-9 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-white/35">Follow JOVO</span>
          {socials.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[.07] text-[12px] text-white/55 transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/"
              aria-label="JOVO home"
              className="inline-flex items-center rounded-full bg-cream px-3 py-1.5 transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/Jovo_official_logo.png"
                alt="JOVO"
                width={160}
                height={40}
                className="h-6 w-[104px] object-cover"
              />
            </Link>
            <p className="text-[11.5px] text-white/30">
              &copy; {year} JOVO Technologies Ltd.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { href: '/terms', label: 'Terms' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/cookies', label: 'Cookies' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[11.5px] text-white/35 transition-colors hover:text-white/80"
              >
                {label}
              </Link>
            ))}
            <span className="text-[11px] text-white/30">
              Visa · Mastercard · Bank · COD
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
