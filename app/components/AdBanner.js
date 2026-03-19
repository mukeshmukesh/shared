export default function AdBanner() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      {/* Google AdSense Banner */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script dangerouslySetInnerHTML={{
        __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        `,
      }} />
    </div>
  )
}