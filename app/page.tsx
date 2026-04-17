import PageLoader from '@/components/ui/PageLoader'
import BackToTop from '@/components/ui/BackToTop'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import FlashSalesSection from '@/components/sections/FlashSalesSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection'
import SellerBanner from '@/components/sections/SellerBanner'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import AppSection from '@/components/sections/AppSection'
import NewsletterSection from '@/components/sections/NewsletterSection'

export default function Home() {
  return (
    <>
      <PageLoader />
      <a href="#main-content" className="absolute -top-28 left-4 z-[9999] bg-brand-red text-white px-4 py-2 rounded-b-lg font-bold transition-[top] focus:top-0">
        Skip to main content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustSection />
        <FlashSalesSection />
        <CategoriesSection />
        <FeaturedProductsSection />
        <SellerBanner />
        <ServicesSection />
        <TestimonialsSection />
        <AppSection />
        <NewsletterSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
