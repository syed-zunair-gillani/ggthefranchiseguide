export const elementorTheme = {
  colors: {
    primary: "#0077BE", // Brand blue
    secondary: "#FFA500", // Brand orange
    text: "#333333",
    background: "#ffffff",
    accent: "#f8f9fa",
    muted: "#6c757d",
  },
  typography: {
    heading: {
      fontFamily: "inherit",
      fontWeight: "700",
      lineHeight: "1.2",
    },
    body: {
      fontFamily: "inherit",
      fontWeight: "400",
      lineHeight: "1.5",
    },
  },
  spacing: {
    section: {
      padding: {
        desktop: "6rem 0",
        tablet: "4rem 0",
        mobile: "3rem 0",
      },
    },
    container: {
      padding: {
        desktop: "0 2rem",
        mobile: "0 1rem",
      },
      maxWidth: "1200px",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  components: {
    button: {
      padding: "0.75rem 1.5rem",
      borderRadius: "0.375rem",
      fontSize: "1rem",
      fontWeight: "600",
      transition: "all 0.2s ease-in-out",
    },
    card: {
      borderRadius: "0.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      background: "#ffffff",
    },
    section: {
      marginBottom: "2rem",
    },
  },
}

export type ElementorTheme = typeof elementorTheme

