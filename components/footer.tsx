import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        {/* ====== TOP GRID ====== */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h3 className="mb-4 text-lg font-bold">KLEX</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for comprehensive digital solutions and
              business growth.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Market Research',
                'Branding',
                'Development',
                'Social Media',
                'Performance Marketing',
                'Public Relations',
                'Media Production',
                'Events',
                'Visuals',
                'Media Buying',
                'Printing & Internal Branding',
                'Consultation',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 + 4 wrapped together */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Company */}
              <div>
                <h4 className="mb-4 font-semibold">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Our Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="mb-4 font-semibold">Connect</h4>
                <ul className="space-y-2 text-sm">
                  {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map(
                    (platform) => (
                      <li key={platform}>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {platform}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* The KLEX below Company + Connect only */}
            <div className="mt-8 mr-72 flex justify-center">
              <Image src={'/KLEX.png'} width={400} height={400} alt="" />
            </div>
          </div>
        </div>

        {/* ====== COPYRIGHT ====== */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KLEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
