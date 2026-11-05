'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PageLoader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const minTime = 600
    const start = Date.now()

    const hide = () => {
      const remaining = Math.max(0, minTime - (Date.now() - start))
      setTimeout(() => {
        setHidden(true)
        setTimeout(() => setRemoved(true), 500)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      hide()
    } else {
      window.addEventListener('load', hide, { once: true })
    }

    const failsafe = setTimeout(() => {
      setHidden(true)
      setTimeout(() => setRemoved(true), 500)
    }, 2200)

    return () => clearTimeout(failsafe)
  }, [])

  if (removed) return null

  return (
    <div
      role="status"
      aria-label="Loading JOVO"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-cream transition-opacity duration-500 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/images/Jovo_official_logo.png"
          alt="JOVO"
          width={160}
          height={40}
          priority
          className="h-11 w-[164px] animate-pulse object-cover"
        />

        <div className="h-[3px] w-28 overflow-hidden rounded-full bg-ink/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-ink" />
        </div>

        <p className="text-[9.5px] font-medium uppercase tracking-[.22em] text-ink/35">
          Loading campus deals
        </p>
      </div>
    </div>
  )
}
