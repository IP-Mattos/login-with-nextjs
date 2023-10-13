import { connectMongoDB } from '@/libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB()
    const body = await request.json()
  } catch (error) {}
}
