export interface ElementorImage {
  url: string
  id: string
  alt: string
  width?: number
  height?: number
}

export interface ElementorButton {
  text: string
  url: string
  type?: "primary" | "secondary" | "outline"
  size?: "small" | "medium" | "large"
  target?: "_blank" | "_self"
}

export interface ElementorHeroSettings {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: ElementorImage
  profileImage?: ElementorImage
  buttons?: ElementorButton[]
  layout?: "default" | "centered" | "split"
  overlayColor?: string
  overlayOpacity?: number
  textColor?: string
  minHeight?: string
  verticalAlign?: "top" | "center" | "bottom"
}

export interface ElementorSectionData {
  id: string
  elType: "section"
  settings: Record<string, any>
  elements: ElementorElementData[]
}

export interface ElementorElementData {
  id: string
  elType: string
  widgetType?: string
  settings: Record<string, any>
  elements?: ElementorElementData[]
}

