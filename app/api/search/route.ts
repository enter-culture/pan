import { NextRequest, NextResponse } from 'next/server'

import { searchShorts } from '@/services/shorts'

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') ?? ''
  const results = await searchShorts(query)
  return NextResponse.json(results)
}
