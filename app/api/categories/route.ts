import { NextRequest, NextResponse } from 'next/server';
import { getCategories } from '@/lib/ecwid';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    const data = await getCategories(params);
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch categories';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
