"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>

          <div className="prose prose-lg text-[#1e3a5f]/80 max-w-none space-y-6">
            <p>
              Welcome to <strong>Tour India</strong>. By accessing our website and generating travel inquiries, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">1. General Provisions</h3>
            <p>
              The content of the pages of this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">2. Booking & Payments</h3>
            <p>
              When you inquire about a tour package, we will provide you with a detailed itinerary and cost estimate. A booking is confirmed only upon receipt of the advance payment as specified in your personalized quote.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">3. Cancellation & Refunds</h3>
            <p>
              Cancellation policies vary depending on the specific tour package, hotel bookings, and time of cancellation. Detailed cancellation terms will be provided at the time of booking. We strive to be as flexible as possible but are bound by the policies of our partners.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">4. Intellectual Property</h3>
            <p>
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">5. Limitation of Liability</h3>
            <p>
              Tour India acts as an agent for transport companies, hotels, and other contractors and shall not be liable for any injury, damage, loss, delay, or irregularity that may be caused to person or property. We accept no responsibility for losses or additional expenses due to delay or changes in air or other services, sickness, weather, strike, war, quarantine, or other causes.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">6. Governing Law</h3>
            <p>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
            </p>

            <h3 className="text-xl font-bold text-[#1e3a5f] mt-6">7. Contact Information</h3>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
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
