'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faCheck,
  faHeart as faHeartSolid,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import type { Product } from '@/types'
import { showToast } from '@/components/ui/toast'
import { CART_EVENT } from '@/components/layout/Header'

let globalCartCount = 0

interface Props {
  product: Product
}

export default function ProductCard({ product: p }: Props) {
  const [wished, setWished] = useState(false)
  const [added, setAdded] = useState(false)

  const discount = p.oldPrice
    ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
    : null

  const toggleWishlist = () => {
    setWished((prev) => {
      const next = !prev
      showToast(
        next ? 'Added to wishlist ❤️' : 'Removed from wishlist',
        next ? 'success' : 'info'
      )
      return next
    })
  }

  const addToCart = () => {
    setAdded(true)
    globalCartCount++
    window.dispatchEvent(new CustomEvent(CART_EVENT, { detail: globalCartCount }))
    showToast('Added to cart 🛍️', 'success')
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article
      className="product-card group w-[224px] shrink-0 rounded-[22px] bg-white p-2.5 ring-1 ring-ink/[.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:w-[242px]"
      role="listitem"
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-[16px] bg-sand">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          sizes="(max-width: 640px) 224px, 242px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {discount && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-ink px-2 py-[3px] text-[9.5px] font-semibold text-white">
            −{discount}%
          </span>
        )}

        <button
          onClick={toggleWishlist}
          aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
          aria-pressed={wished}
          className={`absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[10.5px] backdrop-blur transition-all duration-200 hover:scale-105 ${
            wished ? 'text-brand-red' : 'text-ink/45 hover:text-brand-red'
          }`}
        >
          <FontAwesomeIcon icon={wished ? faHeartSolid : faHeartRegular} />
        </button>
      </div>

      <div className="px-1 pb-1 pt-1">
        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[.14em] text-ink/35">
          {p.brand}
        </p>

        <h3 className="mt-1 line-clamp-2 min-h-[32px] text-[12px] font-medium leading-[1.35] text-ink">
          <Link href={`/product/${p.id}`} className="transition-colors hover:text-ink/60">
            {p.name}
          </Link>
        </h3>

        <div className="mt-1.5 flex items-center gap-1 text-[9.5px] text-ink/35">
          <FontAwesomeIcon icon={faStar} className="text-[8px] text-brand-orange" aria-hidden="true" />
          <span className="text-ink/55">{p.rating}</span>
          <span aria-hidden="true">·</span>
          <span>{p.reviews.toLocaleString()} reviews</span>
        </div>

        <div className="mt-2 flex flex-wrap items-baseline gap-1.5">
          <span className="text-[14px] font-semibold tracking-tight text-ink">
            ₦{p.price.toLocaleString()}
          </span>
          {p.oldPrice && (
            <span className="text-[10px] text-ink/30 line-through">
              ₦{p.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        <button
          onClick={addToCart}
          aria-label={`Add ${p.name} to cart`}
          className={`mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-full py-2 text-[11.5px] font-semibold transition-colors duration-200 ${
            added ? 'bg-mint text-ink' : 'bg-ink text-white hover:bg-ink/85'
          }`}
        >
          <FontAwesomeIcon icon={added ? faCheck : faBagShopping} className="text-[9px]" />
          {added ? 'Added' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}
