import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Toaster } from "sonner"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Tour India - Discover the Colors of Timeless Nation",
  description:
    "Explore ancient temples, lush landscapes, and vibrant cultures with our premium guided tours across South India. Experience authentic Kerala backwaters, Tamil Nadu temples, and Mysore palaces.",
  keywords:
    "India tours, South India travel, Kerala backwaters, Tamil Nadu temples, Mysore palace, authentic India experience",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
