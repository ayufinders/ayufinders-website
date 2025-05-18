
import { NextRequest, NextResponse } from 'next/server';
import { getCollegesHome } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const results = await getCollegesHome();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    console.log('Error details:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
