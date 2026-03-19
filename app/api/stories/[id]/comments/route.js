import { NextResponse } from 'next/server'
import connectDB from '../../../../../lib/mongodb'
import Comment from '../../../../../models/Comment'

export async function GET(request, { params }) {
  try {
    await connectDB()
    const comments = await Comment.find({ storyId: params.id }).sort({ createdAt: -1 })
    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  try {
    await connectDB()
    const { content, author } = await request.json()
    const comment = new Comment({ storyId: params.id, content, author: author || 'Anonymous' })
    await comment.save()
    return NextResponse.json({ message: 'Comment added' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 })
  }
}