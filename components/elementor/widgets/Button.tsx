import styled from "styled-components"

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline"
  size?: "small" | "medium" | "large"
  animation?: boolean
}

export const ElementorButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 16px"
      case "large":
        return "16px 32px"
      default:
        return "12px 24px"
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.875rem"
      case "large":
        return "1.25rem"
      default:
        return "1rem"
    }
  }};
  font-weight: 600;
  border-radius: 4px;
  transition: all ${(props) => props.theme.transitions.default};
  cursor: pointer;

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          background: ${props.theme.colors.secondary};
          color: white;
          border: none;
          &:hover {
            background: ${props.theme.colors.secondary}dd;
          }
        `
      case "outline":
        return `
          background: transparent;
          color: ${props.theme.colors.primary};
          border: 2px solid ${props.theme.colors.primary};
          &:hover {
            background: ${props.theme.colors.primary};
            color: white;
          }
        `
      default:
        return `
          background: ${props.theme.colors.primary};
          color: white;
          border: none;
          &:hover {
            background: ${props.theme.colors.primary}dd;
          }
        `
    }
  }}

  ${(props) =>
    props.animation &&
    `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  `}
`

