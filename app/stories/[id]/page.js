'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import CommentsSection from '../../components/CommentsSection'

export default function StoryPage() {
  const [story, setStory] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    fetch(`/api/stories/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setStory(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return <div className="container"><p>Loading story...</p></div>
  if (!story) return <div className="container"><p>Story not found.</p></div>

  return (
    <div className="container" style={{ maxWidth: '800px', marginTop: '2rem' }}>
      <Link href="/" style={{ color: '#4299e1', marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to Stories
      </Link>

      <div className="story-card">
        <h1>{story.title || 'Untitled'}</h1>
        <p style={{ whiteSpace: 'pre-wrap' }}>{story.content}</p>
        <small>By {story.author} on {new Date(story.createdAt).toLocaleDateString()}</small>
      </div>

      <CommentsSection storyId={story._id} />
    </div>
  )
}