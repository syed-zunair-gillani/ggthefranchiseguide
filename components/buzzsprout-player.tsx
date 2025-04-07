"use client"

import { useEffect, useRef } from "react"

interface BuzzsproutPlayerProps {
  playerId: string
  episodeId: string
}

export default function BuzzsproutPlayer({ playerId, episodeId }: BuzzsproutPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create script element
    const script = document.createElement("script")
    script.src = `https://www.buzzsprout.com/${playerId}/episodes/${episodeId}.js?container_id=buzzsprout-player-${episodeId}&player=small`
    script.type = "text/javascript"
    script.charset = "utf-8"

    // Add the script to the container
    containerRef.current.appendChild(script)

    // Cleanup
    return () => {
      if (containerRef.current) {
        const scriptElement = containerRef.current.querySelector("script")
        if (scriptElement) {
          scriptElement.remove()
        }
      }
    }
  }, [playerId, episodeId])

  return <div id={`buzzsprout-player-${episodeId}`} ref={containerRef} className="w-full" />
}

