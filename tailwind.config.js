/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // Preflight (the global CSS reset) is OFF on purpose: the site's layout,
  // header and footer are styled with CSS modules and rely on browser
  // defaults. We only want the utility classes the page components use.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: { primary: '#901820' },
    },
  },
  plugins: [],
}
