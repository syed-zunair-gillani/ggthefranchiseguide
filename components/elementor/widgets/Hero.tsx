"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ElementorHeroSettings } from "@/lib/types/elementor"

interface HeroProps extends ElementorHeroSettings {
  className?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  profileImage,
  buttons = [],
  layout = "default",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  textColor = "white",
  minHeight = "80vh",
  verticalAlign = "center",
  className,
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerClasses = cn(
    "relative w-full transition-opacity duration-500",
    {
      "opacity-0": !isLoaded,
      "opacity-100": isLoaded,
      "text-center": layout === "centered",
      "flex items-center": layout === "split",
    },
    className,
  )

  const contentClasses = cn("relative z-10 container mx-auto px-4 py-16", {
    "flex flex-col items-center": layout === "centered",
    "grid md:grid-cols-2 gap-8 items-center": layout === "split",
  })

  const textClasses = cn("space-y-6", {
    "max-w-3xl mx-auto": layout === "centered",
    "md:order-1": layout === "split",
  })

  return (
    <section
      className={containerClasses}
      style={{
        minHeight,
        color: textColor,
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage.url || "/placeholder.svg"}
              alt={backgroundImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          />
        </>
      )}

      {/* Content */}
      <div className={contentClasses}>
        {/* Profile Image - Only show in centered layout */}
        {layout === "centered" && profileImage && (
          <div className="relative w-32 h-32 mb-8 mx-auto">
            <Image
              src={profileImage.url || "/placeholder.svg"}
              alt={profileImage.alt}
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        )}

        <div className={textClasses}>
          {title && <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>}
          {subtitle && <h2 className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90">{subtitle}</h2>}
          {description && <p className="text-lg md:text-xl opacity-80 leading-relaxed">{description}</p>}
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  variant={button.type === "outline" ? "outline" : "default"}
                  size={button.size}
                >
                  <Link href={button.url} target={button.target}>
                    {button.text}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Profile Image - Only show in split layout */}
        {layout === "split" && profileImage && (
          <div className="relative aspect-square md:order-2">
            <Image
              src={profileImage.url || "/placeholder.svg"}
              alt={profileImage.alt}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}

