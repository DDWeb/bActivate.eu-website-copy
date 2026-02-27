#!/usr/bin/env node

/**
 * Affiliatly API Test Script
 * Tests different API endpoints to see what's available
 */

const API_KEY = 'bef3baec0ee9d9052d2a5882f1c07e760526246cc64cd86a';

const endpoints = [
  // Common REST patterns
  '/api/affiliates',
  '/api/v1/affiliates',
  '/api/orders',
  '/api/v1/orders',
  '/api/commissions',
  '/api/stats',
  '/api/account',
  '/api/program',
  // Zapier-style endpoints
  '/api/zapier/affiliates',
  '/api/webhooks',
];

async function testEndpoint(endpoint) {
  const url = `https://www.affiliatly.com${endpoint}?api_key=${API_KEY}`;
  try {
    const res = await fetch(url);
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text.substring(0, 200);
    }
    return { endpoint, status: res.status, data };
  } catch (e) {
    return { endpoint, status: 'error', data: e.message };
  }
}

async function main() {
  console.log('Testing Affiliatly API endpoints...\n');
  console.log('API Key:', API_KEY.substring(0, 10) + '...\n');

  for (const endpoint of endpoints) {
    const result = await testEndpoint(endpoint);
    const statusIcon = result.status === 200 ? '✓' : '✗';
    console.log(`${statusIcon} ${result.endpoint} → ${result.status}`);
    if (result.status === 200) {
      console.log('  Response:', JSON.stringify(result.data, null, 2).substring(0, 300));
    }
  }

  console.log('\n--- Testing POST endpoints ---\n');

  // Test creating/registering via API
  const postEndpoints = [
    { url: '/api/orders', body: { test: true } },
    { url: '/api/track', body: { test: true } },
  ];

  for (const ep of postEndpoints) {
    try {
      const res = await fetch(`https://www.affiliatly.com${ep.url}?api_key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ep.body),
      });
      console.log(`POST ${ep.url} → ${res.status}`);
    } catch (e) {
      console.log(`POST ${ep.url} → error: ${e.message}`);
    }
  }
}

main();
