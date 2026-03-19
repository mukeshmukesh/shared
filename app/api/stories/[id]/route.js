import { NextResponse } from 'next/server'
import connectDB from '../../../../lib/mongodb'
import Story from '../../../../models/Story'

export async function GET(request, { params }) {
  try {
    await connectDB()
    const story = await Story.findById(params.id)
    if (!story) {
      return NextResponse.json({ error: 'Story not found' }, { status: 404 })
    }
    return NextResponse.json(story)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch story' }, { status: 500 })
  }
}