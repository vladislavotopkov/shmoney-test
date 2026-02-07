import { FloatingHeader } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import  Footer  from "@/components/footer"
import ContactsSection from "@/components/contacts"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingHeader />
      <main>
        <HeroSlider />
        <BlogSection />
        <AboutSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  )
}
