import { getInTheMediaBySlug } from "../../../lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import WPContent from "../../../components/wp-content"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mediaItem = await getInTheMediaBySlug(params.slug)

  if (!mediaItem) {
    return {}
  }

  const { seo } = mediaItem

  return {
    title: seo?.title || mediaItem.title,
    description: seo?.metaDesc || "",
    openGraph: {
      title: seo?.opengraphTitle || seo?.title || mediaItem.title,
      description: seo?.opengraphDescription || seo?.metaDesc || "",
      images: seo?.opengraphImage ? [{ url: seo.opengraphImage.sourceUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || seo?.title || mediaItem.title,
      description: seo?.twitterDescription || seo?.metaDesc || "",
      images: seo?.twitterImage ? [seo.twitterImage.sourceUrl] : [],
    },
    robots: {
      index: !seo?.metaRobotsNoindex,
      follow: !seo?.metaRobotsNofollow,
    },
  }
}

export default async function MediaPost({ params }: Props) {
  const mediaItem = await getInTheMediaBySlug(params.slug)

  if (!mediaItem) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{mediaItem.title}</h1>
      {mediaItem.featuredImage && (
        <Image
          src={mediaItem.featuredImage.node.sourceUrl || "/placeholder.svg"}
          alt={mediaItem.featuredImage.node.altText || mediaItem.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
      )}
      <WPContent content={mediaItem.content} />
    </article>
  )
}

