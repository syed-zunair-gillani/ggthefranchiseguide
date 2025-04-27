"use client"

import Link from "next/link"
import Image from "next/image"
import { SearchIcon, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"
import Search from "./search"
import { useState, useEffect } from "react"

const mediaItems = [
  { title: "Podcasts", href: "/podcast" },
  { title: "Blog", href: "/blog" },
  { title: "In the Media", href: "/media" },
]

const resourceItems = [
  { title: "Book", href: "/book-landing-page" },
  { title: "FAQs", href: "/faq" },
  { title: "Workshop", href: "/workshop" },
  { title: "Press Kit", href: "/press-kit" },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GG-GrammaticoLogo_Horizontal_Horizontal-K1ByE9TbhE4v3TrKuwZ8LJSDvKpNK2.png"
              alt="Grammatico The Franchise Guide"
              width={200}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium text-sm ${
                isActive("/") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`font-medium text-sm ${
                isActive("/about") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
              }`}
            >
              ABOUT ME
            </Link>
            <Link
              href="/how-it-works"
              className={`font-medium text-sm ${
                isActive("/how-it-works") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
              }`}
            >
              HOW IT WORKS
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center font-medium text-sm ${
                  mediaItems.some((item) => isActive(item.href))
                    ? "text-[#FFA500]"
                    : "text-[#0077be] hover:text-[#0077be]/80"
                }`}
              >
                MEDIA <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuGroup>
                  {mediaItems.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link href={item.href} className={`w-full ${isActive(item.href) ? "text-[#FFA500]" : ""}`}>
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center bg-white font-medium text-sm ${
                  resourceItems.some((item) => isActive(item.href))
                    ? "text-[#FFA500]"
                    : "text-[#0077be] hover:text-[#0077be]/80 cursor-pointer"
                }`}
              >
                RESOURCES <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuGroup>
                  {resourceItems.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link href={item.href} className={`w-full ${isActive(item.href) ? "text-[#FFA500]" : ""}`}>
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className={`font-medium text-sm ${
                isActive("/contact") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden lg:flex bg-[#0077be] hover:bg-[#0077be]/90 text-sm font-medium">
              <Link href="/right-fit">GET STARTED</Link>
            </Button>

            <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setIsSearchOpen(true)}>
              <SearchIcon className="h-5 w-5 text-[#0077be]" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/"
                    className={`font-medium ${
                      isActive("/") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
                    }`}
                  >
                    HOME
                  </Link>
                  <Link
                    href="/about"
                    className={`font-medium ${
                      isActive("/about") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
                    }`}
                  >
                    ABOUT ME
                  </Link>
                  <Link
                    href="/how-it-works"
                    className={`font-medium ${
                      isActive("/how-it-works") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
                    }`}
                  >
                    HOW IT WORKS
                  </Link>

                  <div className="space-y-2">
                    <h3
                      className={`font-medium ${
                        mediaItems.some((item) => isActive(item.href)) ? "text-[#FFA500]" : "text-[#0077be]"
                      }`}
                    >
                      MEDIA
                    </h3>
                    <div className="pl-4 space-y-2">
                      {mediaItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`block ${
                            isActive(item.href) ? "text-[#FFA500]" : "text-gray-600 hover:text-[#0077be]"
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className={`font-medium ${
                        resourceItems.some((item) => isActive(item.href)) ? "text-[#FFA500]" : "text-[#0077be]"
                      }`}
                    >
                      RESOURCES
                    </h3>
                    <div className="pl-4 space-y-2">
                      {resourceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`block ${
                            isActive(item.href) ? "text-[#FFA500]" : "text-gray-600 hover:text-[#0077be]"
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`font-medium ${
                      isActive("/contact") ? "text-[#FFA500]" : "text-[#0077be] hover:text-[#0077be]/80"
                    }`}
                  >
                    CONTACT
                  </Link>

                  <Button asChild className="bg-[#0077be] hover:bg-[#0077be]/90  w-full">
                    <Link href="/right-fit" className="!text-white">GET STARTED</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}

