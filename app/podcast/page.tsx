import PodcastPage from "@/components/elementor/widgets/PodcastPage"
import { getAllPodcasts } from "@/lib/api"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { logger } from "@/lib/logger"

export const metadata: Metadata = {
  title: "The Franchise Freedom Podcast - GG The Franchise Guide",
  description:
    "Join Giuseppe Grammatico as he helps corporate executives break free from the rat race through franchise ownership. Get expert insights, tips, and strategies for successful franchising.",
  openGraph: {
    title: "The Franchise Freedom Podcast - GG The Franchise Guide",
    description:
      "Join Giuseppe Grammatico as he helps corporate executives break free from the rat race through franchise ownership.",
    type: "website",
  },
}

export default async function Page() {
  try {
    const podcasts = await getAllPodcasts()
    logger.page("Podcast", null, { podcastCount: podcasts?.length })

    if (!podcasts) {
      return notFound()
    }

    return <PodcastPage podcasts={podcasts} />
  } catch (error) {
    logger.error("PodcastPage", error as Error)
    return notFound()
  }
}

