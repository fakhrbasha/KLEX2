import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "TaskFlow - Project Management That Actually Works",
  description:
    "Collaborate seamlessly, track progress effortlessly, and deliver projects on time with TaskFlow's modern project management platform.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="light" storageKey="taskflow-theme">
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
