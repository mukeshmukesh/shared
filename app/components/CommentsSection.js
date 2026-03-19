'use client'

import { useState, useEffect } from 'react'

export default function CommentsSection({ storyId }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchComments()
  }, [storyId])

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/stories/${storyId}/comments`)
      const data = await res.json()
      setComments(data)
    } catch (error) {
      console.error('Failed to fetch comments', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    try {
      const res = await fetch(`/api/stories/${storyId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment, author: author || 'Anonymous' }),
      })
      if (res.ok) {
        setNewComment('')
        setAuthor('')
        fetchComments() // Refresh comments
      }
    } catch (error) {
      console.error('Failed to post comment', error)
    }
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Comments</h3>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name (optional)"
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          />
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          rows={3}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}
          required
        />
        <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
          Post Comment
        </button>
      </form>

      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <div>
          {comments.map(comment => (
            <div key={comment._id} style={{ background: '#f7fafc', padding: '1rem', margin: '0.5rem 0', borderRadius: '0.25rem' }}>
              <p>{comment.content}</p>
              <small>By {comment.author} on {new Date(comment.createdAt).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}