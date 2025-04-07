"use client"

import { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { elementorTheme } from "../../lib/elementor/theme"
import { parseElementorData, extractHeroSettings } from "../../lib/elementor/parser"
import Hero from "./widgets/Hero"
import { Spinner } from "../ui/spinner"
import { logger } from "@/lib/logger"

interface ElementorContentProps {
  content: string
}

const ElementorWrapper = styled.div`
  width: 100%;

  .elementor-invisible {
    visibility: hidden;
  }

  .elementor-animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
`

export default function ElementorContent({ content }: ElementorContentProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [heroSettings, setHeroSettings] = useState(null)
  const [parsedContent, setParsedContent] = useState(content)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      // Parse Elementor data from content
      const elementorSections = parseElementorData(content)
      logger.api("ElementorContent:Parse", null, { sectionsCount: elementorSections.length })

      // Look for hero section
      const heroSection = elementorSections.find((section) => section.settings.isHero)

      if (heroSection) {
        const settings = extractHeroSettings(heroSection)
        logger.api("ElementorContent:HeroSettings", null, { settings })
        setHeroSettings(settings)

        // Remove the hero section from content to avoid duplication
        const heroHtml = content.match(/<section[^>]*class="[^"]*elementor-section[^>]*hero[^>]*>.*?<\/section>/s)
        if (heroHtml) {
          setParsedContent(content.replace(heroHtml[0], ""))
        }
      }
    } catch (err) {
      console.error("Error parsing Elementor content:", err)
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }, [content])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500 p-4 text-center">Error loading content. Please try again later.</div>
  }

  return (
    <ThemeProvider theme={elementorTheme}>
      <ElementorWrapper>
        {heroSettings && <Hero {...heroSettings} />}
        <div className="elementor-content" dangerouslySetInnerHTML={{ __html: parsedContent }} />
      </ElementorWrapper>
    </ThemeProvider>
  )
}

