import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">KLEX</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for comprehensive digital solutions and business growth.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/branding" className="text-muted-foreground hover:text-foreground">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="text-muted-foreground hover:text-foreground">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-muted-foreground hover:text-foreground">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/services/performance-marketing" className="text-muted-foreground hover:text-foreground">
                  Performance Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KLEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
