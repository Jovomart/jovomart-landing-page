import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShieldHalved,
  faTruckFast,
  faRotateLeft,
  faLock,
} from '@fortawesome/free-solid-svg-icons'

const items = [
  {
    icon: faShieldHalved,
    title: 'Verified sellers',
    desc: 'Every seller is ID-checked and campus-verified before they can list a single item.',
  },
  {
    icon: faTruckFast,
    title: '30-minute delivery',
    desc: 'Riders on every campus. From seller to hostel in under half an hour, tracked live.',
  },
  {
    icon: faRotateLeft,
    title: '7-day returns',
    desc: 'Changed your mind? Send it back within a week, no questions asked.',
  },
  {
    icon: faLock,
    title: 'Protected payments',
    desc: 'Pay online or on delivery. Funds only release once you confirm the order.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-white pb-4 pt-10 sm:pt-14" aria-label="Why shop with JOVO">
      <div className="mx-auto grid max-w-[1240px] gap-x-8 gap-y-7 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {items.map(({ icon, title, desc }, i) => (
          <article
            key={title}
            className="flex items-start gap-3"
            data-animate="fade-up"
            data-delay={i * 70}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-[13px] text-ink/65">
              <FontAwesomeIcon icon={icon} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-[13px] font-semibold tracking-tight text-ink">{title}</h3>
              <p className="mt-1 text-[12px] leading-[1.65] text-ink/45">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
