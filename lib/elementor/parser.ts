import type { ElementorSectionData, ElementorElementData, ElementorHeroSettings } from "../types/elementor"
import type { ElementorButton } from "../types/elementor" // Import the missing type

export function parseElementorData(content: string): ElementorSectionData[] {
  try {
    // Look for Elementor data in the content using different patterns
    const patterns = [
      /data-elementor-settings="([^"]*)"/,
      /<script type="text\/javascript">.*?elementorFrontendConfig\s*=\s*({.*?})<\/script>/s,
      /elementor-frontend-data">(.*?)<\/script>/s,
    ]

    for (const pattern of patterns) {
      const match = content.match(pattern)
      if (match) {
        try {
          // Try to parse the JSON data
          const decodedData = decodeURIComponent(match[1].replace(/&quot;/g, '"'))
          const cleanData = decodedData.replace(/\\(.)/g, "$1") // Remove escaped characters
          const elementorData = JSON.parse(cleanData)

          // Return the elements array or an empty array if not found
          return elementorData.elements || elementorData.data?.elements || []
        } catch (parseError) {
          console.warn("Failed to parse data with pattern:", pattern, parseError)
          continue // Try next pattern
        }
      }
    }

    // If no Elementor data is found, try to parse the content structure
    const sections = content.match(/<section[^>]*class="[^"]*elementor-section[^>]*>(.*?)<\/section>/gs)
    if (sections) {
      return sections.map((section) => parseSection(section))
    }

    return []
  } catch (error) {
    console.error("Error parsing Elementor data:", error)
    return []
  }
}

function parseSection(sectionHtml: string): ElementorSectionData {
  const idMatch = sectionHtml.match(/data-id="([^"]*)"/)
  const settingsMatch = sectionHtml.match(/data-settings="([^"]*)"/)

  let settings = {}
  if (settingsMatch) {
    try {
      settings = JSON.parse(decodeURIComponent(settingsMatch[1].replace(/&quot;/g, '"')))
    } catch (error) {
      console.warn("Failed to parse section settings:", error)
    }
  }

  // Extract hero-specific settings from HTML attributes and classes
  const isHero =
    sectionHtml.includes("elementor-hero") || sectionHtml.includes("hero-section") || settings.widget_type === "hero"

  if (isHero) {
    const backgroundImage = sectionHtml.match(/background-image:\s*url$$['"]([^'"]*)['"]$$/)
    const titleMatch = sectionHtml.match(/<h1[^>]*>(.*?)<\/h1>/s)
    const subtitleMatch = sectionHtml.match(/<h2[^>]*>(.*?)<\/h2>/s)
    const descriptionMatch = sectionHtml.match(/<p[^>]*>(.*?)<\/p>/s)

    settings = {
      ...settings,
      isHero: true,
      backgroundImage: backgroundImage ? { url: backgroundImage[1] } : null,
      title: titleMatch ? titleMatch[1].trim() : "",
      subtitle: subtitleMatch ? subtitleMatch[1].trim() : "",
      description: descriptionMatch ? descriptionMatch[1].trim() : "",
    }
  }

  return {
    id: idMatch ? idMatch[1] : "",
    elType: "section",
    settings,
    elements: parseElements(sectionHtml),
  }
}

function parseElements(html: string): ElementorElementData[] {
  const elements: ElementorElementData[] = []
  const elementMatches = html.match(/<div[^>]*class="[^"]*elementor-widget[^>]*>(.*?)<\/div>/gs)

  if (elementMatches) {
    elementMatches.forEach((elementHtml) => {
      const idMatch = elementHtml.match(/data-id="([^"]*)"/)
      const widgetTypeMatch = elementHtml.match(/elementor-widget-([^\s"]*)/)
      const settingsMatch = elementHtml.match(/data-settings="([^"]*)"/)

      let settings = {}
      if (settingsMatch) {
        try {
          settings = JSON.parse(decodeURIComponent(settingsMatch[1].replace(/&quot;/g, '"')))
        } catch (error) {
          console.warn("Failed to parse element settings:", error)
        }
      }

      elements.push({
        id: idMatch ? idMatch[1] : "",
        elType: "widget",
        widgetType: widgetTypeMatch ? widgetTypeMatch[1] : "",
        settings,
      })
    })
  }

  return elements
}

export function extractHeroSettings(section: ElementorSectionData): ElementorHeroSettings | null {
  try {
    // Check if this section is a hero section
    if (!section.settings.isHero) {
      return null
    }

    // Extract settings from the section
    const settings = section.settings

    return {
      title: settings.title || "",
      subtitle: settings.subtitle,
      description: settings.description,
      backgroundImage: settings.backgroundImage,
      layout: settings.layout || "default",
      overlayColor: settings.background_overlay_color || "rgba(0, 0, 0, 0.5)",
      overlayOpacity: settings.background_overlay_opacity || 0.5,
      textColor: settings.text_color || "white",
      minHeight: settings.min_height || "80vh",
      verticalAlign: settings.vertical_align || "center",
      buttons: extractButtons(section),
    }
  } catch (error) {
    console.error("Error extracting hero settings:", error)
    return null
  }
}

function extractButtons(section: ElementorSectionData): ElementorButton[] {
  const buttons: ElementorButton[] = []

  // Look for button elements in the section
  section.elements?.forEach((element) => {
    if (element.widgetType?.includes("button")) {
      const settings = element.settings
      buttons.push({
        text: settings.text || "",
        url: settings.url || "#",
        type: settings.type || "primary",
        size: settings.size || "medium",
        target: settings.target || "_self",
      })
    }
  })

  return buttons
}

