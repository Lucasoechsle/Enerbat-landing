import BannerCarousel from "@/components/banner-carousel"
import AboutSection from "@/components/about-section"
import FeaturedProducts from "@/components/featured-products"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <AboutSection />
      <FeaturedProducts />
      <ContactForm />
    </>
  )
}