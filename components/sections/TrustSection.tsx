import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faTruckFast, faRotateLeft, faLock } from '@fortawesome/free-solid-svg-icons'

const items = [
  { icon: faShieldHalved, title: 'Verified Sellers', desc: 'Every seller on JOVO is ID-verified and campus-authenticated for your safety.' },
  { icon: faTruckFast, title: 'Express Delivery', desc: 'Get your orders delivered anywhere on campus in under 30 minutes.' },
  { icon: faRotateLeft, title: 'Easy Returns', desc: 'Not satisfied? Return within 7 days, no questions asked.' },
  { icon: faLock, title: 'Secure Payments', desc: 'Pay securely online or opt for pay-on-delivery — your choice.' },
]

export default function TrustSection() {
  return (
    <section className="bg-[#FFF8F5] border-t border-b border-gray-200" aria-label="Why trust JOVO">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200">
        {items.map(({ icon, title, desc }) => (
          <article key={title} className="bg-[#FFF8F5] hover:bg-white transition-colors p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-[14px] bg-brand-gradient text-white flex items-center justify-center text-[18px] shadow-red-glow flex-shrink-0">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div>
              <h3 className="text-[13.5px] font-extrabold text-gray-900 mb-[3px]">{title}</h3>
              <p className="text-[12px] text-gray-500 leading-[1.6]">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
