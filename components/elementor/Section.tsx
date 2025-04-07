import styled from "styled-components"
import type { ElementorTheme } from "../../lib/elementor/theme"

interface SectionProps {
  theme: ElementorTheme
  background?: string
  fullWidth?: boolean
  minHeight?: string
  verticalAlign?: "flex-start" | "center" | "flex-end"
  horizontalAlign?: "flex-start" | "center" | "flex-end" | "space-between"
  overlay?: string
  animation?: string
}

export const ElementorSection = styled.section<SectionProps>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.horizontalAlign || "center"};
  align-items: ${(props) => props.verticalAlign || "center"};
  min-height: ${(props) => props.minHeight || "auto"};
  padding: ${(props) => props.theme.spacing.section.padding.desktop};
  background: ${(props) => props.background || "transparent"};
  overflow: hidden;

  ${(props) =>
    props.fullWidth &&
    `
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  `}

  ${(props) =>
    props.overlay &&
    `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${props.overlay};
      z-index: 1;
    }
  `}

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing.section.padding.tablet};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacing.section.padding.mobile};
  }

  ${(props) =>
    props.animation &&
    `
    opacity: 0;
    animation: ${props.animation} 0.6s ease-out forwards;
  `}
`

export const ElementorContainer = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1140px"};
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

