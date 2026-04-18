"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHeart,
  faBagShopping,
  faUser,
  faPlug,
  faMobileScreen,
  faSpa,
  faTv,
  faShirt,
  faLaptop,
  faGamepad,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";

export const CART_EVENT = "jovo:cart-update";

const catItems = [
  { href: "/appliances-deals", icon: faPlug, label: "Appliances" },
  { href: "/phone-deals", icon: faMobileScreen, label: "Phones" },
  { href: "/beauty-deals", icon: faSpa, label: "Beauty" },
  { href: "/electronic-deals", icon: faTv, label: "Electronics" },
  { href: "/fashion-deals", icon: faShirt, label: "Fashion" },
  { href: "/computing-deals", icon: faLaptop, label: "Computing" },
  { href: "/gaming-deals", icon: faGamepad, label: "Gaming" },
  { href: "/groceries", icon: faBasketShopping, label: "Groceries" },
];

const navLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/services", label: "Services" },
  { href: "/become-seller", label: "Sell on JOVO" },
  { href: "/logistics", label: "Delivery" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: Event) =>
      setCartCount((e as CustomEvent).detail as number);
    window.addEventListener(CART_EVENT, handler);
    return () => window.removeEventListener(CART_EVENT, handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        id="site-header"
        className={[
          "sticky top-0 left-0 w-full z-[500]",
          "bg-white/[0.98] backdrop-blur-[24px]",
          "border-b border-gray-100",
          "transition-shadow duration-300",
          "nav-gradient-bar",
          scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,.08)]" : "",
        ].join(" ")}
        role="banner"
      >
        {/* ══════════════════════ TOP BAR ══════════════════════ */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 h-[60px] sm:h-[64px] flex items-center">
          {/* LEFT — Hamburger + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Hamburger: visible on mobile & tablet, hidden on desktop */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-[10px] gap-[5px] hover:bg-gray-100 active:scale-95 transition-all duration-200 flex-shrink-0"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="w-[18px] h-[2px] bg-gray-800 rounded-full" />
              <span className="w-[18px] h-[2px] bg-gray-800 rounded-full" />
              <span className="w-[18px] h-[2px] bg-gray-800 rounded-full" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 hover:opacity-90 active:scale-[.98] transition-all duration-200"
              aria-label="JOVO Home"
            >
              <Image
                src="/images/Jovo_official_logo.png"
                alt="JOVO Logo"
                width={120}
                height={40}
                className="h-8 sm:h-9 lg:h-10 md:w-40 w-30 object-cover"
                priority
              />
            </Link>
          </div>

          {/* CENTRE — Desktop nav (lg and above only) */}
          <nav
            className="hidden lg:flex items-center gap-0.5 mx-auto"
            aria-label="Main navigation"
            role="menubar"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                role="menuitem"
                className="px-4 py-[7px] rounded-full text-[13.5px] font-semibold text-gray-600 hover:bg-gray-100 hover:text-brand-red whitespace-nowrap transition-colors duration-150"
              >
                {label}
              </Link>
            ))}

            {/* Flash Sales pill — desktop nav */}
            <Link
              href="/flash-sales"
              role="menuitem"
              className="flex items-center gap-[6px] px-4 py-[7px] rounded-full text-[13.5px] font-semibold text-brand-orange bg-[rgba(255,140,0,.07)] border border-[rgba(255,140,0,.18)] hover:bg-[rgba(255,140,0,.14)] whitespace-nowrap transition-colors duration-150"
            >
              <FontAwesomeIcon icon={faBolt} className="text-[11px]" />
              Flash Sales
            </Link>
          </nav>

          {/* RIGHT — Actions */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 ml-auto lg:ml-0">
            {/* Wishlist — hidden on tiny screens, visible from sm */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:flex items-center gap-[5px] px-2.5 sm:px-3 py-2 rounded-[10px] text-[13px] font-semibold text-gray-600 hover:bg-gray-100 hover:text-brand-red transition-colors duration-150"
            >
              <FontAwesomeIcon icon={faHeart} className="text-[15px]" />
              <span className="hidden xl:inline">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} item${cartCount !== 1 ? "s" : ""}` : ""}`}
              className="relative flex items-center gap-[5px] px-2.5 sm:px-3 py-2 rounded-[10px] text-[13px] font-semibold text-gray-600 hover:bg-gray-100 hover:text-brand-red transition-colors duration-150"
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-[15px]" />
              <span className="hidden xl:inline">Cart</span>
              {cartCount > 0 && (
                <span
                  className="absolute -top-[3px] -right-[3px] bg-brand-red text-white text-[9px] font-extrabold min-w-[16px] h-4 px-[3px] rounded-full flex items-center justify-center border-[1.5px] border-white"
                  aria-live="polite"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Sign In — icon-only pill on mobile, full pill on sm+ */}
            <Link
              href="/login"
              aria-label="Sign in"
              className="flex items-center gap-[6px] bg-brand-gradient text-white rounded-full font-bold shadow-[0_4px_14px_rgba(180,34,37,.28)] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(180,34,37,.36)] active:translate-y-0 active:shadow-none transition-all duration-200 px-[10px] sm:px-5 py-[8px] sm:py-[9px] text-[13px]"
            >
              <FontAwesomeIcon icon={faUser} className="text-[12px]" />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          </div>
        </div>

        {/* ══════════════════════ CATEGORY BAR ══════════════════════ */}
        <nav
          aria-label="Product categories"
          className="border-t border-gray-100 overflow-x-auto overflow-y-hidden no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-6 py-[6px] flex justify-center items-center gap-0.5 w-max min-w-full">
            {catItems.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-[5px] px-3 sm:px-[13px] py-[5px] sm:py-[6px] rounded-full text-[11.5px] sm:text-[12.5px] font-semibold text-gray-600 whitespace-nowrap hover:bg-gray-100 hover:text-brand-red active:scale-[.95] transition-all duration-150"
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="text-[11px] sm:text-[12px]"
                  aria-hidden="true"
                />
                {/* Labels always visible — no hidden sm:inline */}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
