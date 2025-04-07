"use client"

import DOMPurify from "isomorphic-dompurify"
import { useEffect, useCallback } from "react"

interface WPContentProps {
  content: string
  className?: string
}

export default function WPContent({ content, className = "" }: WPContentProps) {
  // Function to handle form submissions
  const handleFormSubmit = useCallback(async (e: Event) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      // Replace with your form handling endpoint
      const response = await fetch("/api/form-submission", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        // Handle success
        const successMessage = form.querySelector(".elementor-message-success")
        if (successMessage) {
          successMessage.classList.remove("hidden")
        }
      } else {
        // Handle error
        const errorMessage = form.querySelector(".elementor-message-error")
        if (errorMessage) {
          errorMessage.classList.remove("hidden")
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }, [])

  // Initialize Elementor widgets and interactions
  useEffect(() => {
    if (typeof window === "undefined") return

    // Handle forms
    const forms = document.querySelectorAll(".elementor-form")
    forms.forEach((form) => {
      form.addEventListener("submit", handleFormSubmit)
    })

    // Initialize animations
    const animatedElements = document.querySelectorAll("[data-animation]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute("data-animation")
            entry.target.classList.add(`elementor-animate-${animation}`)
          }
        })
      },
      { threshold: 0.1 },
    )

    animatedElements.forEach((element) => observer.observe(element))

    // Handle interactive elements
    const interactiveElements = document.querySelectorAll("[data-interactive]")
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("elementor-animation-grow")
      })
      element.addEventListener("mouseleave", () => {
        element.classList.remove("elementor-animation-grow")
      })
    })

    // Cleanup
    return () => {
      forms.forEach((form) => {
        form.removeEventListener("submit", handleFormSubmit)
      })
      observer.disconnect()
    }
  }, [handleFormSubmit])

  // Sanitize content while preserving Elementor classes and data attributes
  const sanitizedContent = DOMPurify.sanitize(content, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["target", "data-animation", "data-interactive", "data-settings"],
  })

  return (
    <div
      className={`wp-content elementor-content ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}

