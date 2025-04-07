import { getPodcastBySlug, getRecentPodcasts } from "../../../lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import WPContent from "../../../components/wp-content"
import { format } from "date-fns"
import BuzzsproutPlayer from "../../../components/buzzsprout-player"
import { logger } from "../../../lib/logger"
import Button from "../../../components/button"

export const dynamic = "force-dynamic"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const podcast = await getPodcastBySlug(params.slug)

  if (!podcast) {
    return {}
  }

  const { seo } = podcast

  return {
    title: seo?.title || podcast.title,
    description: podcast.excerpt?.replace(/<[^>]*>/g, "") || "",
    openGraph: {
      title: seo?.opengraphTitle || seo?.title || podcast.title,
      description: podcast.excerpt?.replace(/<[^>]*>/g, "") || "",
      images: podcast.featuredImage ? [{ url: podcast.featuredImage.node.sourceUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || seo?.title || podcast.title,
      description: podcast.excerpt?.replace(/<[^>]*>/g, "") || "",
      images: podcast.featuredImage ? [podcast.featuredImage.node.sourceUrl] : [],
    },
  }
}

export default async function PodcastPost({ params }: Props) {
  logger.page("PodcastPost", params)
  const podcast = await getPodcastBySlug(params.slug)
  const recentPodcasts = await getRecentPodcasts(3, params.slug)

  if (!podcast) {
    logger.warn("PodcastPost", { message: "Podcast not found", slug: params.slug })
    notFound()
  }

  logger.page("PodcastPost", params, {
    podcast,
    recentPodcasts,
    url: typeof window !== "undefined" ? window.location.href : null,
  })

  // Extract Buzzsprout player ID and episode ID from the content
  const buzzsproutMatch = podcast.content.match(/buzzsprout-player-(\d+).*?buzzsprout.com\/(\d+)\/episodes\/(\d+)/s)
  const episodeId = buzzsproutMatch?.[3]
  const playerId = buzzsproutMatch?.[2]

  // Extract YouTube video
  const youtubeMatch = podcast.content.match(/<figure class="wp-block-embed[^>]*>.*?<\/figure>/s)
  const youtubeEmbed = youtubeMatch ? youtubeMatch[0] : null

  // Remove the embeds from the main content to avoid duplication
  const mainContent = podcast.content
    .replace(/<div id="buzzsprout-player[^>]*>.*?<\/script>/s, "")
    .replace(/<figure class="wp-block-embed[^>]*>.*?<\/figure>/s, "")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{podcast.title}</h1>

          {/* Author and Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            {podcast.author?.node && (
              <div className="flex items-center gap-2">
                {podcast.author.node.avatar?.url && (
                  <Image
                    src={podcast.author.node.avatar.url || "/placeholder.svg"}
                    alt={podcast.author.node.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span>{podcast.author.node.name}</span>
              </div>
            )}
            <span>•</span>
            <span>{format(new Date(podcast.date), "MMMM dd, yyyy")}</span>
            {podcast.categories?.nodes?.length > 0 && (
              <>
                <span>•</span>
                <Link href={`/category/${podcast.categories.nodes[0].slug}`} className="text-blue-600 hover:underline">
                  {podcast.categories.nodes[0].name}
                </Link>
              </>
            )}
          </div>

          {/* Featured Image */}
          {podcast.featuredImage && (
            <Image
              src={podcast.featuredImage.node.sourceUrl || "/placeholder.svg"}
              alt={podcast.featuredImage.node.altText || podcast.title}
              width={800}
              height={400}
              className="w-full rounded-lg mb-6"
              priority
            />
          )}

          {/* Excerpt */}
          {podcast.excerpt && (
            <div
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: podcast.excerpt }}
            />
          )}

          {/* Buzzsprout Player */}
          {playerId && episodeId && (
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <BuzzsproutPlayer playerId={playerId} episodeId={episodeId} />
            </div>
          )}

          {/* Main Content */}
          <div className="prose max-w-none">
            <WPContent content={mainContent} />
          </div>

          {/* YouTube Video */}
          {youtubeEmbed && (
            <div className="mt-8 bg-gray-50 p-6 rounded-lg" dangerouslySetInnerHTML={{ __html: youtubeEmbed }} />
          )}
        </article>

        {/* Sidebar - Updated with scroll container */}
        <aside className="lg:w-1/3">
          <div className="sticky top-24 h-[calc(100vh-8rem)] overflow-hidden">
            <div className="space-y-6 overflow-y-auto h-full pb-6 pr-4 scrollbar-thin">
              {/* Author Box */}
              <div className="bg-gray-50 rounded-lg p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GG%20%281%29-4sIGNwfc72gLXTMcgnmGGvltSFBK9C.png"
                  alt="Giuseppe Grammatico"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">Giuseppe Grammatico</h3>
                <div className="text-gray-600 text-center">Host of the Franchise Freedom Podcast</div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Helping corporate executives escape the corporate world through franchise ownership
                </p>
              </div>

              {/* Recent Episodes */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Recent Episodes</h4>
                <div className="space-y-4">
                  {recentPodcasts.map((recentPodcast) => (
                    <Link key={recentPodcast.id} href={`/podcast/${recentPodcast.slug}`} className="flex gap-4 group">
                      {recentPodcast.featuredImage ? (
                        <Image
                          src={recentPodcast.featuredImage.node.sourceUrl || "/placeholder.svg"}
                          alt={recentPodcast.featuredImage.node.altText || recentPodcast.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0" />
                      )}
                      <div>
                        <h5 className="font-medium group-hover:text-brand-blue transition-colors line-clamp-2">
                          {recentPodcast.title}
                        </h5>
                        <p className="text-sm text-gray-600 mt-1">
                          {format(new Date(recentPodcast.date), "MMM d, yyyy")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              {podcast.categories?.nodes?.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {podcast.categories.nodes.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="bg-white px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Ready to Start Your Journey?</h4>
                <p className="text-gray-600 mb-4">
                  Book a free consultation to discuss your goals and how franchising might be the right path for you.
                </p>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white" asChild>
                  <Link href="/right-fit">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

