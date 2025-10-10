'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';

const platformServices = [
  { title: 'Market Research and Planning', href: '/services/market-research' },
  { title: 'Branding', href: '/services/branding' },
  { title: 'Development', href: '/services/development' },
  { title: 'Social Media Management', href: '/services/social-media' },
  { title: 'Performance Marketing', href: '/services/performance-marketing' },
  { title: 'Public Relations', href: '/services/public-relations' },
  { title: 'Media Production', href: '/services/media-production' },
  { title: 'Events Planning & Production', href: '/services/events' },
  { title: 'Visuals', href: '/services/visuals' },
  { title: 'Media Buying', href: '/services/media-buying' },
  { title: 'Printing & Internal Branding', href: '/services/printing' },
  { title: 'Consultation', href: '/services/consultation' },
];

const moreLinks = [
  { title: 'About', href: '/about' },
  { title: 'Business Development', href: '/business-development' },
  { title: 'Our Projects', href: '/projects' },
  { title: 'Success Stories', href: '/success-stories' },
  { title: 'Marketplace', href: '/marketplace' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = React.useState(false);
  const [isMoreOpen, setIsMoreOpen] = React.useState(false);
  const [mobileDropdown, setMobileDropdown] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsPlatformOpen(false);
      setIsMoreOpen(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMenuClick = (e: React.MouseEvent) => e.stopPropagation();

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <nav className="container flex h-16 items-center justify-around md:justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            KLEX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex relative">
          <NavigationMenuList className="flex items-center gap-4">
            {/* OUR PLATFORM */}
            <NavigationMenuItem onClick={handleMenuClick} className="relative">
              <button
                onClick={() => {
                  setIsPlatformOpen(!isPlatformOpen);
                  setIsMoreOpen(false);
                }}
                className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#3be6c4] gap-1"
              >
                Our Platform
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isPlatformOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isPlatformOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    onClick={(e) => e.stopPropagation()}
                    onMouseLeave={() => setIsPlatformOpen(false)}
                    className="absolute left-0 top-full mt-2 w-[600px] rounded-lg border bg-popover p-4 shadow-lg grid grid-cols-2 gap-3"
                  >
                    {platformServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block rounded-md p-2 text-sm text-muted-foreground hover:bg-[#3be6c4]/10 hover:text-[#3be6c4] transition"
                        onClick={() => setIsPlatformOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavigationMenuItem>

            {/* TOUR BY INDUSTRY */}
            <NavigationMenuItem>
              <Link
                href="/tour-by-industry"
                className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#3be6c4]"
              >
                Tour By Industry
              </Link>
            </NavigationMenuItem>

            {/* MORE */}
            <NavigationMenuItem onClick={handleMenuClick} className="relative">
              <button
                onClick={() => {
                  setIsMoreOpen(!isMoreOpen);
                  setIsPlatformOpen(false);
                }}
                className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#3be6c4] gap-1"
              >
                More
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isMoreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    onClick={(e) => e.stopPropagation()}
                    onMouseLeave={() => setIsMoreOpen(false)}
                    className="absolute left-0 top-full mt-2 w-[400px] rounded-lg border bg-popover p-4 shadow-lg grid gap-3"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-md p-2 text-sm text-muted-foreground hover:bg-[#3be6c4]/10 hover:text-[#3be6c4] transition"
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavigationMenuItem>

            {/* CONTACT / CAREERS */}
            <NavigationMenuItem>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#3be6c4]"
              >
                Contact Us
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/careers"
                className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#3be6c4]"
              >
                Careers
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background text-foreground overflow-y-auto"
            >
              <nav className="flex flex-col gap-4 mt-6 py-10 px-6">
                {/* OUR PLATFORM */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown('platform')}
                    className="flex w-full items-center justify-between font-semibold hover:text-[#3be6c4] transition"
                  >
                    Our Platform
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileDropdown === 'platform' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileDropdown === 'platform' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 ml-3 flex flex-col gap-2"
                      >
                        {platformServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-[#3be6c4]/10 hover:text-[#3be6c4] transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* MORE */}
                <div className="border-t border-border pt-3">
                  <button
                    onClick={() => toggleMobileDropdown('more')}
                    className="flex w-full items-center justify-between font-semibold hover:text-[#3be6c4] transition"
                  >
                    More
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileDropdown === 'more' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileDropdown === 'more' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 ml-3 flex flex-col gap-2"
                      >
                        {moreLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-[#3be6c4]/10 hover:text-[#3be6c4] transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CONTACT / CAREERS */}
                <div className="space-y-2 border-t border-border pt-3">
                  <Link
                    href="/contact"
                    className="block font-semibold hover:text-[#3be6c4] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/tour-by-industry"
                    className="block font-semibold hover:text-[#3be6c4] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Tour By Industry
                  </Link>
                  <Link
                    href="/careers"
                    className="block font-semibold hover:text-[#3be6c4] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
