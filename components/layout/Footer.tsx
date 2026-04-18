import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faFacebookF, faTiktok, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const year = new Date().getFullYear()

  const shopLinks = [
    { href: '/phone-deals', label: 'Phones & Tablets' },
    { href: '/electronic-deals', label: 'Electronics' },
    { href: '/fashion-deals', label: 'Fashion' },
    { href: '/computing-deals', label: 'Computing' },
    { href: '/gaming-deals', label: 'Gaming' },
    { href: '/beauty-deals', label: 'Health & Beauty' },
    { href: '/groceries', label: 'Groceries' },
    { href: '/flash-sales', label: 'Flash Sales' },
  ]
  const serviceLinks = [
    { href: '/services', label: 'Campus Services' },
    { href: '/logistics', label: 'Logistics & Delivery' },
    { href: '/accommodations', label: 'Accommodation' },
    { href: '/personal-care', label: 'Personal Care' },
    { href: '/cleaning-hygiene', label: 'Cleaning & Hygiene' },
  ]
  const sellerLinks = [
    { href: '/become-seller', label: 'Become a Seller' },
    { href: '/seller/login', label: 'Seller Login' },
    { href: '/seller/dashboard', label: 'Seller Dashboard' },
    { href: '/seller/application-status', label: 'Seller Status' },
  ]
  const companyLinks = [
    { href: '/about', label: 'About JOVO' },
    { href: '/help', label: 'Help Center' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <footer className="bg-[#0A0A0A] text-white/70" role="contentinfo">
      <div className="max-w-[1300px] mx-auto px-6 pt-[60px] pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8">
        {/* Brand */}
        <div className="footer-brand-span lg:col-span-1 col-span-2 md:col-span-3">
           {/* Logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 hover:opacity-90 active:scale-[.98] transition-all duration-200"
              aria-label="JOVO Home"
            >
              <Image
                src="/images/Jovo_off_logo2.png"
                alt="JOVO Logo"
                width={120}
                height={40}
                className="h-8 sm:h-9 lg:h-10 md:w-40 w-30 object-cover"
                priority
              />
          </Link>
          <br />
          <p className="text-[13px] text-white/40 leading-[1.7] mb-3 max-w-[240px]">
            Nigeria's #1 Campus Marketplace. Built for students, by students.
          </p>
          <div className="flex gap-2" aria-label="JOVO social media">
            {[
              { href: 'https://instagram.com/jovong', icon: faInstagram, label: 'Instagram' },
              { href: 'https://twitter.com/jovong', icon: faXTwitter, label: 'Twitter/X' },
              { href: 'https://facebook.com/jovong', icon: faFacebookF, label: 'Facebook' },
              { href: 'https://tiktok.com/@jovong', icon: faTiktok, label: 'TikTok' },
            ].map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-[8px] border border-white/10 bg-white/[.05] text-white/50 flex items-center justify-center text-[13px] hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        {[
          { title: 'Shop', links: shopLinks, label: 'Shop links' },
          { title: 'Services', links: serviceLinks, label: 'Services links' },
          { title: 'Sellers', links: sellerLinks, label: 'Seller links' },
          { title: 'Company', links: companyLinks, label: 'Company links' },
        ].map(({ title, links, label }) => (
          <nav key={title} aria-label={label}>
            <h4 className="text-[11.5px] font-extrabold text-white uppercase tracking-[.12em] mb-4">{title}</h4>
            <ul className="flex flex-col gap-[9px]">
              {links.map(({ href, label: linkLabel }) => (
                <li key={href}>
                  <Link href={href} className="text-[13px] text-white/40 hover:text-brand-orange transition-colors">
                    {linkLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[.07] max-w-[1300px] mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-[14px]">
        <p className="text-[12px] text-white/30">
          &copy; {year} JOVO Technologies Ltd. All rights reserved.
        </p>
        <div className="flex gap-[18px]">
          {[{ href: '/terms', label: 'Terms' }, { href: '/privacy', label: 'Privacy' }, { href: '/cookies', label: 'Cookies' }].map(({ href, label }) => (
            <Link key={href} href={href} className="text-[12px] text-white/30 hover:text-white/70 transition-colors">{label}</Link>
          ))}
        </div>
        <div className="flex gap-[7px] items-center" aria-label="Payment methods">
          <span className="bg-white/10 rounded-[8px] px-[9px] py-1 text-[13px] text-white/60">
            <FontAwesomeIcon icon={faCcVisa} />
          </span>
          <span className="bg-white/10 rounded-[8px] px-[9px] py-1 text-[13px] text-white/60">
            <FontAwesomeIcon icon={faCcMastercard} />
          </span>
          <span className="bg-white/10 rounded-[8px] px-[9px] py-1 text-[11px] text-white/60">Bank</span>
          <span className="bg-white/10 rounded-[8px] px-[9px] py-1 text-[11px] text-white/60">COD</span>
        </div>
      </div>
    </footer>
  )
}
