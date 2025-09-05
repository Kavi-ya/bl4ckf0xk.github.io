import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "bl4ckf0xk - Cybersecurity Portfolio",
  description: "Cybersecurity professional specializing in exploit development, OT/ICS security, and Active Directory security",
  keywords: ["cybersecurity", "exploit development", "OT security", "ICS security", "Active Directory", "penetration testing"],
  authors: [{ name: "bl4ckf0xk" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js" async></script>
      </head>
      <body className="min-h-screen bg-black text-ash-100 antialiased">
        <div className="blur-bg cyber-grid min-h-screen">
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
