"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isVisible, setIsVisible] = useState(false)

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top handler
  const scrollToTop = useCallback((behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({
      top: 0,
      behavior,
    })
  }, [])

  // Handle route changes
  useEffect(() => {
    // Force scroll to top on route changes
    scrollToTop("instant")

    // Add a slight delay to handle dynamic content
    const timeoutId = setTimeout(() => {
      scrollToTop("instant")
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [scrollToTop])

  // Handle click event
  const handleClick = () => {
    scrollToTop("smooth")
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-brand-blue hover:bg-brand-blue/90 p-3"
      onClick={handleClick}
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

