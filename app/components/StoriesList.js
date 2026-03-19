'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StoriesList() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => {
        setStories(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading stories...</p>

  return (
    <div>
      {stories.map(story => (
        <div key={story._id} className="story-card">
          <Link href={`/stories/${story._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{story.title || 'Untitled'}</h3>
            <p>{story.content.substring(0, 200)}...</p>
          </Link>
          <small>By {story.author} on {new Date(story.createdAt).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  )
}