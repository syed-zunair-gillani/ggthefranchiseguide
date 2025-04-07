"use client"

import styled from "styled-components"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialSection = styled.section`
  padding: 4rem 0;
  background: ${(props) => props.theme.colors.background};
`

const TestimonialContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
`

const TestimonialSlider = styled.div`
  position: relative;
  overflow: hidden;
`

const TestimonialSlide = styled.div<{ active: boolean }>`
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  ${(props) =>
    props.active &&
    `
    position: relative;
  `}
`

const TestimonialText = styled.div`
  font-size: 1.125rem;
  line-height: 1.75;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 2rem;
`

const TestimonialAuthor = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
`

interface Testimonial {
  text: string
  author: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}

export default function Testimonials({ testimonials, autoplay = true, interval = 5000 }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval, testimonials.length])

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  return (
    <TestimonialSection>
      <TestimonialContainer>
        <TestimonialSlider>
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide key={index} active={index === activeIndex}>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </TestimonialSlide>
          ))}
          <SliderButton className="prev" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </SliderButton>
          <SliderButton className="next" onClick={handleNext}>
            <ChevronRight size={24} />
          </SliderButton>
        </TestimonialSlider>
      </TestimonialContainer>
    </TestimonialSection>
  )
}

