import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import './globals.css'

export const metadata = {
  metadataBase: new URL("https://justyou.co.in"),

  title: {
    default: "Anonymous Stories | Share Your Story Anonymously",
    template: "%s | Anonymous Stories",
  },

  description:
    "A safe place to anonymously share your experiences, read inspiring stories, and find support through shared journeys.",

  keywords: [
    "anonymous stories",
    "share stories anonymously",
    "mental health",
    "confessions",
    "support",
    "community",
    "anonymous forum",
    "personal stories",
  ],

  authors: [{ name: "Anonymous Stories" }],

  creator: "Anonymous Stories",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Anonymous Stories",
    description:
      "Share your story anonymously. Read inspiring experiences from people around the world.",

    url: "https://justyou.co.in",

    siteName: "Anonymous Stories",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anonymous Stories",
    description:
      "Share your story anonymously and connect with others.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Adsense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }} />
      </head>
      <body>
        <Navbar />
          {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    </body>
    </html>
  )
}