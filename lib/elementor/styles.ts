import { css } from "@emotion/react"
import type { ElementorTheme } from "./theme"

export const createElementorStyles = (theme: ElementorTheme) => css`
  /* Base Styles */
  .elementor-section {
    padding: ${theme.spacing.section.padding.desktop};
    width: 100%;
    position: relative;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.section.padding.tablet};
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: ${theme.spacing.section.padding.mobile};
    }
  }

  .elementor-container {
    max-width: ${theme.spacing.container.maxWidth};
    margin: 0 auto;
    padding: ${theme.spacing.container.padding.desktop};
    
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: ${theme.spacing.container.padding.mobile};
    }
  }

  /* Typography */
  .elementor-heading-title {
    font-family: ${theme.typography.heading.fontFamily};
    font-weight: ${theme.typography.heading.fontWeight};
    line-height: ${theme.typography.heading.lineHeight};
    margin-bottom: 1rem;
    
    &.elementor-size-xxl { font-size: 3.5rem; }
    &.elementor-size-xl { font-size: 3rem; }
    &.elementor-size-large { font-size: 2.5rem; }
    &.elementor-size-medium { font-size: 2rem; }
    &.elementor-size-small { font-size: 1.5rem; }
    
    @media (max-width: ${theme.breakpoints.md}) {
      &.elementor-size-xxl { font-size: 2.5rem; }
      &.elementor-size-xl { font-size: 2rem; }
      &.elementor-size-large { font-size: 1.75rem; }
      &.elementor-size-medium { font-size: 1.5rem; }
      &.elementor-size-small { font-size: 1.25rem; }
    }
  }

  /* Buttons */
  .elementor-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.components.button.padding};
    border-radius: ${theme.components.button.borderRadius};
    font-size: ${theme.components.button.fontSize};
    font-weight: ${theme.components.button.fontWeight};
    transition: ${theme.components.button.transition};
    cursor: pointer;
    text-decoration: none;
    
    &.elementor-size-sm {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
    
    &.elementor-size-md {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    
    &.elementor-size-lg {
      padding: 1rem 2rem;
      font-size: 1.125rem;
    }
    
    &.elementor-button-primary {
      background-color: ${theme.colors.primary};
      color: white;
      
      &:hover {
        background-color: ${theme.colors.primary}dd;
      }
    }
    
    &.elementor-button-secondary {
      background-color: ${theme.colors.secondary};
      color: white;
      
      &:hover {
        background-color: ${theme.colors.secondary}dd;
      }
    }
  }

  /* Cards and Sections */
  .elementor-widget {
    margin-bottom: ${theme.components.section.marginBottom};
  }

  .elementor-card {
    border-radius: ${theme.components.card.borderRadius};
    box-shadow: ${theme.components.card.boxShadow};
    background: ${theme.components.card.background};
    overflow: hidden;
  }

  /* Images */
  .elementor-widget-image {
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  /* Responsive Grid */
  .elementor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  /* Animations */
  .elementor-motion-effects-element {
    transition: transform 0.3s ease-in-out;
  }

  .elementor-motion-effects-container {
    overflow: hidden;
  }

  /* Custom Shapes */
  .elementor-shape {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 1;
    
    &-top {
      top: -1px;
    }
    
    &-bottom {
      bottom: -1px;
    }
    
    svg {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`

