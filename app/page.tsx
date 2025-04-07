import { getPageBySlug } from "../lib/api"
import WPContent from "../components/wp-content"
import { logger } from "../lib/logger"
import FallbackHome from "../components/fallback-home"
import Hero from "@/templates/home/Hero"
import OurClients from "@/templates/home/our-clients"
import LeftRight from "@/templates/home/left-right"
import WorkWithUs from "@/templates/home/work-with-us"
import StepsSection from "@/templates/home/steps"
import Reviews from "@/templates/home/reviews"
import Videos from "@/templates/home/videos"
import Following from "@/templates/home/following"
import GetBook from "@/templates/home/getBook"
import MeetGiuseppe from "@/templates/home/meet-giuseppe"
import NewsLetter from "@/templates/home/news-letter"
import Image from "next/image"

export default async function Home() {
  logger.page("Home")

  try {
    const homepageContent = await getPageBySlug("home")
    logger.page("Home", null, { content: homepageContent })

    if (!homepageContent) {
      return <FallbackHome />
    }

    return (
      <>
        <Hero/>
        <OurClients/>
        <LeftRight/>
        <WorkWithUs/>
        <StepsSection/>
        <Reviews/>
        <Videos/>
        <Following/>
        <GetBook/>
        <MeetGiuseppe/>
        <NewsLetter/>
        <section className="flex flex-col sm:flex-row px-2 justify-center items-center gap-20 md:gap-40 py-20">
            <Image src="/images/logo-1.png" alt="" width={166} height={166}/>
            <Image src="/images/logo-2.png" alt="" width={300} height={70}/>
        </section>
      </>
    )
  } catch (error) {
    logger.error("Home", error as Error)
    return <FallbackHome />
  }
}

