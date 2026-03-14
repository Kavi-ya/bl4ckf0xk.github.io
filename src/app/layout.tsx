import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bl4ckf0xk.github.io'),
  referrer: 'no-referrer',
  title: {
    default: 'Kavindu Sahan | Exploit Developer & Security Specialist',
    template: '%s | Kavindu Sahan'
  },
  description: 'Portfolio of Kavindu Sahan (bl4ckf0xk), an Exploit Developer and ICS/OT Security Specialist. Explore my projects, research, and blog posts.',
  keywords: ['Exploit Development', 'ICS Security', 'OT Security', 'Active Directory', 'Cybersecurity', 'Red Teaming', 'Malware Analysis'],
  authors: [{ name: 'Kavindu Sahan', url: 'https://bl4ckf0xk.github.io' }],
  creator: 'Kavindu Sahan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bl4ckf0xk.github.io',
    title: 'Kavindu Sahan | Exploit Developer & Security Specialist',
    description: 'Portfolio of Kavindu Sahan (bl4ckf0xk), an Exploit Developer and ICS/OT Security Specialist.',
    siteName: 'Kavindu Sahan Portfolio',
    images: [
      {
        url: '/og-image.png', // We should probably create this or use a placeholder
        width: 1200,
        height: 630,
        alt: 'Kavindu Sahan Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavindu Sahan | Exploit Developer & Security Specialist',
    description: 'Portfolio of Kavindu Sahan (bl4ckf0xk), an Exploit Developer and ICS/OT Security Specialist.',
    creator: '@bl4ckf0xk', // Assuming this handle based on previous context, or we can omit
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

import { Dock } from "@/components/layout/Dock";
import { Footer } from "@/components/layout/Footer";
import { CTFConsole } from "@/components/CTFConsole";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-hacker-bg text-white selection:bg-hacker-blue selection:text-black min-h-screen flex flex-col`}
      >
        {/* <Navbar /> */}
        <main className="flex-grow pt-16 pb-24">
          {children}
        </main>
        <Dock />
        <Footer />
        <CTFConsole />
      </body>
    </html>
  );
}
