import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBagShopping, faBolt } from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Coming soon',
  robots: { index: false, follow: false },
}

export default function ComingSoon() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-cream px-5 py-20 text-center sm:py-28">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-sky/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-[280px] w-[280px] rounded-full bg-lilac/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[520px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[10.5px] font-medium text-ink/55 ring-1 ring-ink/[.05]">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-deep" aria-hidden="true" />
            Page coming soon
          </span>

          <h1 className="mt-5 text-balance font-display text-[32px] font-medium leading-[1.06] tracking-[-0.03em] sm:text-[42px]">
            We&apos;re still stocking this aisle.
          </h1>
          <p className="mx-auto mt-3 max-w-[380px] text-pretty text-[13px] leading-[1.8] text-ink/55">
            This part of JOVO is being built right now. The good stuff — deals, categories and
            campus delivery — is waiting on the homepage.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-semibold text-white shadow-pill transition-all hover:bg-ink/85 active:scale-[.98]"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
              Back home
            </Link>
            <Link
              href="/flash-sales"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-ink ring-1 ring-ink/10 transition-all hover:bg-white/70 active:scale-[.98]"
            >
              <FontAwesomeIcon icon={faBolt} className="text-[10px]" />
              Today&apos;s flash sales
            </Link>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-ink/35">
            <FontAwesomeIcon icon={faBagShopping} className="text-[9px]" />
            50,000+ products on the homepage
            <FontAwesomeIcon icon={faArrowRight} className="text-[8px]" />
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
