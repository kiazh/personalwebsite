import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SpotifyNowPlaying } from "@/components/SpotifyNowPlaying";
import { ErrorBoundary } from "@/components/ErrorBoundary";
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eb-garamond",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Kiarad",
  description: "Mathematical Physics student at Waterloo. Building things from scratch, questioning what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={ebGaramond.variable}>
      <body className="min-h-screen">
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
        <SpotifyNowPlaying />
      </body>
    </html>
  );
}
