import type { Metadata, Viewport } from "next";
import LanguageProvider from "@/components/LanguageProvider";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import "./globals.css";
export const metadata: Metadata = {
  title: "K-Food Table | Taste Korea. Cook Korea.",
  description: "Discover Korean food, from bibimbap and bulgogi to comforting kimchi stew. Your first Korean meal starts here.",
  applicationName: "K-Food Table",
  authors: [{ name: "Yang Seung Chan", url: "mailto:aipro7524@gmail.com" }],
  creator: "Yang Seung Chan",
  publisher: "AIPRO",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "K-Food Table" },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};
export const viewport: Viewport = { themeColor: "#dc2626", colorScheme: "light" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><LanguageProvider initialLocale="en">{children}<ServiceWorkerRegister /></LanguageProvider></body></html>;
}
