import Link from 'next/link'
import StoriesList from './components/StoriesList'
import ShareButton from './components/ShareButton'
import AdBanner from './components/AdBanner'

export default function Home() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#2d3748' }}>
          Anonymous Stories
        </h1>
        <p className="encouraging-text" style={{ fontSize: '1.2rem' }}>
          You're not alone. Share your story, read others, find strength in community.
        </p>
        <ShareButton />
      </header>

      <AdBanner />

      <main>
        <h2 style={{ marginBottom: '1rem' }}>Recent Stories</h2>
        <StoriesList />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
        <p>&copy; 2024 Anonymous Stories. All rights reserved.</p>
        <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link>
      </footer>
    </div>
  )
}