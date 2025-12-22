"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen relative bg-[#f8f4e8]">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-[url('/mobile_view.png')] md:bg-[url('/discover.png')] bg-cover bg-center bg-no-repeat"
      ></div>

      {/* Navigation */}
      <div className="fixed top-20 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#1e3a5f] px-4 py-2 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <h1 className="font-serif text-4xl text-[#1e3a5f] mb-8 border-b border-[#c9a227]/30 pb-4">
            Privacy Policy
          </h1>

          <div className="prose prose-lg text-[#1e3a5f]/80 max-w-none space-y-6">
            <p>
              At <strong>Tour India</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">1. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, phone number, and travel preferences when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a quote or travel itinerary.</li>
            
              <li>Contact us via our website forms or WhatsApp.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">2. How We Use Your Information</h3>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your travel bookings and inquiries.</li>
              <li>Communicate with you regarding your trip.</li>
              <li>Send you promotional offers and travel updates (you can opt-out at any time).</li>
              <li>Improve our website and customer service.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">3. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet is 100% secure.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">4. Third-Party Sharing</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted partners (such as hotels or transport providers) solely for the purpose of fulfilling your travel booking.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">5. Cookies</h3>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">6. Changes to This Policy</h3>
            <p>
              We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">7. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> tourindia.murugan@gmail.com
              <br />
              <strong>Phone:</strong> +91 81234 58000
            </p>
          </div>
          
          <div className="mt-12 text-sm text-[#1e3a5f]/60">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
