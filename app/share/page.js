'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SharePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('') // Optional anonymous name
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
      })
      if (response.ok) {
        alert('Story shared successfully!')
        setTitle('')
        setContent('')
        setAuthor('')
        router.push('/')
      } else {
        alert('Failed to share story. Please try again.')
      }
    } catch (error) {
      alert('Error sharing story.')
    }
  }

  return (
    <div className="container" style={{ maxWidth: '800px', marginTop: '2rem' }}>
      <h1>Share Your Story</h1>
      <p className="encouraging-text">
        Your story matters. Sharing anonymously can help you heal and inspire others.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="author" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Name (optional, anonymous)</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="e.g., Hopeful Soul"
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem' }}>Title (optional)</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="content" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Story</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={10}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
            placeholder="Write your story here..."
          />
        </div>

        <button type="submit" className="btn-primary">Share Anonymously</button>
      </form>
    </div>
  )
}