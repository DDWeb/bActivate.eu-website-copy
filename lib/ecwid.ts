const STORE_ID = process.env.NEXT_PUBLIC_ECWID_STORE_ID;
const API_TOKEN = process.env.ECWID_API_TOKEN;
const BASE_URL = `https://app.ecwid.com/api/v3/${STORE_ID}`;

async function ecwidFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set('token', API_TOKEN!);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
  }

  const res = await fetch(url.toString(), {
    headers: { 'Accept': 'application/json' },
    next: { revalidate: 300 }, // cache for 5 minutes
  });

  if (!res.ok) {
    throw new Error(`Ecwid API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export interface EcwidProduct {
  id: number;
  name: string;
  sku: string;
  price: number;
  defaultDisplayedPrice: number;
  description: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  url: string;
  inStock: boolean;
  enabled: boolean;
  options: Array<{
    name: string;
    choices: Array<{ text: string; priceModifier: number }>;
  }>;
}

export interface EcwidProductsResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  items: EcwidProduct[];
}

export interface EcwidCategory {
  id: number;
  name: string;
  description: string;
  productCount: number;
  thumbnailUrl?: string;
  imageUrl?: string;
  url: string;
  enabled: boolean;
}

export interface EcwidCategoriesResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  items: EcwidCategory[];
}

export async function getProducts(params?: Record<string, string>) {
  return ecwidFetch<EcwidProductsResponse>('/products', params);
}

export async function getProduct(productId: number) {
  return ecwidFetch<EcwidProduct>(`/products/${productId}`);
}

export async function getCategories(params?: Record<string, string>) {
  return ecwidFetch<EcwidCategoriesResponse>('/categories', params);
}

export async function getCategory(categoryId: number) {
  return ecwidFetch<EcwidCategory>(`/categories/${categoryId}`);
}
