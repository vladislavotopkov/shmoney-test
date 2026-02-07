import React from "react"
import type { Metadata } from 'next'
import { Nunito, Fira_Code } from 'next/font/google'

import './globals.css'

const nunito = Nunito({ subsets: ['latin', 'cyrillic'], variable: '--font-nunito', weight: ['400', '500', '600', '700', '800'] })
const firaCode = Fira_Code({ subsets: ['latin', 'cyrillic'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Сеньёр | IT-технологии и разработка',
  description: 'Технический обзор IT-технологий, языков программирования и лайфхаки в разработке',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${nunito.variable} ${firaCode.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
