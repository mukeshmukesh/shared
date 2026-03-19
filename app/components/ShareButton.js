import Link from 'next/link'

export default function ShareButton() {
  return (
    <Link href="/share">
      <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
        Share Your Story
      </button>
    </Link>
  )
}