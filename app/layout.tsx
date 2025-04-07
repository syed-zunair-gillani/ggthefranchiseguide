import Header from "../components/header"
import Footer from "../components/footer"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your WordPress Site",
  description: "A Next.js site powered by WordPress",
    generator: 'v0.dev'
}

// Add this configuration to disable Next.js auto scroll restoration
export const dynamic = "force-dynamic"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}



import './globals.css'