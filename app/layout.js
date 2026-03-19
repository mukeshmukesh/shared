import './globals.css'

export const metadata = {
  title: 'Anonymous Stories - Share Your Sadness Journey',
  description: 'A safe space to share your stories of sadness anonymously. Connect with others going through similar experiences. Find support and hope in our community.',
  keywords: 'anonymous stories, sadness, depression support, mental health, share stories, online support group',
  openGraph: {
    title: 'Anonymous Stories',
    description: 'Share your story anonymously and find support in our community.',
    type: 'website',
  },
}

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
      <body>{children}</body>
    </html>
  )
}