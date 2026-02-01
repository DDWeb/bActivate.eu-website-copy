import { NextRequest, NextResponse } from 'next/server';
import { getProducts } from '@/lib/ecwid';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    const data = await getProducts(params);
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch products';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
