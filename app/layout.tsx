import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500"] })

export const metadata = {
  title: "VendAI - Customized Distribution Solutions for Kenyan FMCG",
  description:
    "VendAI provides customized cloud-based solutions for Kenyan FMCG distributors, automating inventory, sales, billing, and delivery routes to boost efficiency and sales.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
