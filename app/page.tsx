import PageLoader from '@/components/ui/PageLoader'
import BackToTop from '@/components/ui/BackToTop'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import FlashSalesSection from '@/components/sections/FlashSalesSection'
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import SellerBanner from '@/components/sections/SellerBanner'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AppSection from '@/components/sections/AppSection'

export default function Home() {
  return (
    <>
      <PageLoader />
      <a
        href="#main-content"
        className="absolute -top-28 left-4 z-[9999] rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-white transition-[top] focus:top-4"
      >
        Skip to main content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustSection />
        <HowItWorksSection />
        <FlashSalesSection />
        <FeaturedProductsSection />
        <CategoriesSection />
        <SellerBanner />
        <TestimonialsSection />
        <ServicesSection />
        <AppSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
