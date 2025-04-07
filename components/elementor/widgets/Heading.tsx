import styled from "styled-components"

interface HeadingProps {
  size?: "small" | "medium" | "large" | "xl" | "xxl"
  align?: "left" | "center" | "right"
  color?: string
}

const getFontSize = (size: HeadingProps["size"]) => {
  switch (size) {
    case "small":
      return "1.5rem"
    case "medium":
      return "2rem"
    case "large":
      return "2.5rem"
    case "xl":
      return "3rem"
    case "xxl":
      return "3.5rem"
    default:
      return "2rem"
  }
}

export const ElementorHeading = styled.h2<HeadingProps>`
  font-size: ${(props) => getFontSize(props.size)};
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || props.theme.colors.text};
  margin-bottom: 20px;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => {
      const size = getFontSize(props.size)
      return `calc(${size} * 0.8)`
    }};
  }
`

