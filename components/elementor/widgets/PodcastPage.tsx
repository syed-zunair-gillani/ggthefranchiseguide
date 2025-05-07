"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BuzzsproutPlayer from "@/components/buzzsprout-player"
import { Music, Apple, AirplayIcon as Spotify, Youtube } from "lucide-react"
import { format } from "date-fns"

interface PodcastPageProps {
  podcasts: any[] // Replace with proper type from lib/types.ts
}

export default function PodcastPage({ podcasts }: PodcastPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white pb-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="https://ggthefranchiseguide.com/wp-content/uploads/elementor/thumbs/GG-Podcast-Cover-FINAL-qvxvne3vdffck5ihk2q0jxocvln4exxkjpiedptylk.png"
                alt="The Franchise Freedom Podcast Cover"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">The Franchise Freedom Podcast</h1>
              <h2 className="text-xl md:text-2xl mb-6">Hosted by Giuseppe Grammatico</h2>
              <p className="text-lg mb-8">
                Franchise Freedom is for corporate executives who are tired of the rat race, the politics, and the lack
                of control inside the corporate monster and are ready to break free by owning a franchise.
              </p>
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white"
                onClick={() => {
                  // Handle join show request
                }}
              >
                Request to join the show
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Finding Financial Freedom</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              If this sounds like you and you're fed up with the traditional workforce, tune in to The Franchise Freedom
              Podcast. Host Giuseppe Grammatico leverages his experience in franchising and business ownership to
              educate and inspire listeners who want more control over their lives.
            </p>
            <p>
              Each week we cover everything you need to know about franchising, from choosing the right opportunity to
              making the most of your investment. Whether you're a franchising newbie or a seasoned pro, The Franchise
              Freedom Podcast has something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Episode</h2>
          <div className="max-w-3xl mx-auto">
            <BuzzsproutPlayer playerId="1801967" episodeId="14140913" />
          </div>
        </div>
      </section>

      {/* Listen On Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Listen On</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <a
              href="https://podcasts.apple.com/us/podcast/franchise-freedom/id1499864638"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <Apple className="w-8 h-8 text-brand-blue" />
              </div>
              <span className="font-medium">Apple Podcasts</span>
            </a>
            <a
              href="https://open.spotify.com/show/13LTN5UzA57w2dTB4iV0fm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <Spotify className="w-8 h-8 text-brand-blue" />
              </div>
              <span className="font-medium">Spotify</span>
            </a>
            <a
              href="https://www.youtube.com/@ggthefranchiseguide"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <Youtube className="w-8 h-8 text-brand-blue" />
              </div>
              <span className="font-medium">YouTube</span>
            </a>
            <a
              href="https://www.audible.com/pd/Franchise-Freedom-Podcast/B08JJP7GZW"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <Music className="w-8 h-8 text-brand-blue" />
              </div>
              <span className="font-medium">Audible</span>
            </a>
          </div>
        </div>
      </section>

      {/* Podcast Episodes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast) => (
              <article key={podcast.id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                {podcast.featuredImage && (
                  <Link href={`/podcast/${podcast.slug}`} className="relative aspect-video">
                    <Image
                      src={podcast.featuredImage.node.sourceUrl || "/placeholder.svg"}
                      alt={podcast.featuredImage.node.altText || podcast.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-[250px]"
                    />
                  </Link>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    <Link href={`/podcast/${podcast.slug}`} className="hover:text-brand-blue">
                      {podcast.title}
                    </Link>
                  </h3>
                  <div className="text-sm text-gray-500 mb-4">{format(new Date(podcast.date), "MMMM d, yyyy")}</div>
                  <div
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: podcast.excerpt }}
                  />
                  <div className="mt-auto">
                    <Link
                      href={`/podcast/${podcast.slug}`}
                      className="inline-flex items-center text-brand-blue hover:text-brand-orange"
                    >
                      Listen now
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

