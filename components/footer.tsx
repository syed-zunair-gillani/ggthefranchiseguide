import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Music, Globe, Apple } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GG-GrammaticoLogo_Horizontal_Vertical-kP9bdpb0tNHD6zFUoiGnqdEFlTQGrk.png"
          alt="Grammatico The Franchise Guide"
          width={150}
          height={150}
          className="mb-8"
        />

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://www.facebook.com/GGTheFranchiseGuide"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1877f2] p-3 rounded-full hover:opacity-80 transition-opacity"
          >
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/ggthefranchiseguide/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E4405F] p-3 rounded-full hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://twitter.com/ggfranchguide"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 rounded-full hover:opacity-80 transition-opacity border border-white"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.youtube.com/@ggthefranchiseguide"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0000] p-3 rounded-full hover:opacity-80 transition-opacity"
          >
            <Youtube className="w-6 h-6" />
            <span className="sr-only">YouTube</span>
          </a>
          <a
            href="https://open.spotify.com/show/13LTN5UzA57w2dTB4iV0fm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DB954] p-3 rounded-full hover:opacity-80 transition-opacity"
          >
            <Music className="w-6 h-6" />
            <span className="sr-only">Spotify</span>
          </a>
          <a
            href="https://ggthefranchiseguide.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#21759B] p-3 rounded-full hover:opacity-80 transition-opacity"
          >
            <Globe className="w-6 h-6" />
            <span className="sr-only">Website</span>
          </a>
          <a
            href="https://www.linkedin.com/company/gg-the-franchise-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A66C2] p-3 rounded-full hover:opacity-80 transition-opacity"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/franchise-freedom/id1499864638"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#A2AAAD] p-3 rounded-full hover:opacity-80 transition-opacity"
          >
            <Apple className="w-6 h-6" />
            <span className="sr-only">Apple Podcasts</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#000000] p-3 rounded-full border hover:opacity-80 transition-opacity"
          >
            <svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
            <span className="sr-only">Apple Podcasts</span>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-center mb-4 max-w-3xl px-4">
          DISCLAIMER: The information on this site is for general information purposes only. Franchising involves risk
          and careful consideration should be given before making any decisions.
        </p>

        {/* Copyright */}
        <p className="text-center mb-4">© Copyright {new Date().getFullYear()} All rights reserved.</p>

        {/* Policy Links */}
        <div className="flex justify-center space-x-4">
          <Link href="/privacy-policy" className="text-[#ff69b4] hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="text-[#ff69b4] hover:underline">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

