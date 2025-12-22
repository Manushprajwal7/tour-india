"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ContactSection } from "@/components/contact-section";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const packageName = searchParams.get("package") || "";

  return (
    <>
      <ContactSection initialPackageName={packageName} />
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background Pattern - Matching other pages */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-[url('/mobile_view.png')] md:bg-[url('/discover.png')] bg-cover bg-center bg-no-repeat"
      ></div>

      {/* Navigation */}
      <div className="fixed top-28 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#1e3a5f] px-4 py-2 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1e3a5f]"></div></div>}>
        <ContactPageContent />
      </Suspense>
    </main>
  );
}
