import { NextResponse } from 'next/server'
import connectDB from '../../../lib/mongodb'
import Story from '../../../models/Story'

export async function GET() {
  try {
    await connectDB()
    const stories = await Story.find({}).sort({ createdAt: -1 }).limit(20)
    return NextResponse.json(stories)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await connectDB()
    const { title, content } = await request.json()
    const story = new Story({ title, content })
    await story.save()
    return NextResponse.json({ message: 'Story created' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create story' }, { status: 500 })
  }
}