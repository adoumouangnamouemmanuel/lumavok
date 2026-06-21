import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BYTE - African Software Solutions",
  description:
    "Build digital products that grow your capital. Affordable, high-quality software, design, and AI solutions for African businesses.",
  openGraph: {
    title: "BYTE - African Software Solutions",
    description:
      "Build digital products that grow your capital. Affordable, high-quality software, design, and AI solutions for African businesses.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
