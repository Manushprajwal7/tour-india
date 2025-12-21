import { HeroSection } from "@/components/hero-section";
import { FeaturedPackages } from "@/components/featured-packages";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";


export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen w-full isolate relative pb-20">
         <div className="container mx-auto pb-20">
        <HeroSection />
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="min-h-screen w-full isolate py-0">
        <div className="container mx-auto px-4">
          <FeaturedPackages />
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen w-full isolate py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AboutSection />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen w-full isolate py-0">
        <div className="container mx-auto px-4">
          <GallerySection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen w-full isolate py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <TestimonialsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen w-full isolate py-0">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full isolate bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
