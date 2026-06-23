import { NextResponse } from 'next/server'

import { getShorts } from '@/services/shorts'

export async function GET() {
  const shorts = await getShorts()
  return NextResponse.json(shorts)
}
