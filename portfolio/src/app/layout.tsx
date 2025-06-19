import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Subhan - Computer Science Student Portfolio",
  description:
    "Portfolio website of Subhan, a passionate 10th grade computer science student showcasing projects, skills, and achievements.",
  keywords: "portfolio, computer science, student, web development, programming, projects",
  authors: [{ name: "Subhan" }],
  openGraph: {
    title: "Subhan - Computer Science Student Portfolio",
    description: "Portfolio website showcasing my journey as a computer science student",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
