// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // This line is CRUCIAL. It tells Tailwind to enable its dark mode variant
  // when the 'dark' class is present on the HTML element (which we control in App.jsx).
  darkMode: 'class',
  content: [
    "./index.html", // Vite's default HTML entry point
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all your React components for Tailwind classes
  ],
  theme: {
    extend: {
      // No custom colors defined here, as per your request.
      // All colors will be directly specified using hex codes in component classNames.
      fontFamily: {
        // Optional: Add custom fonts here if you want to use them.
        // Make sure to import them in src/index.css or public/index.html.
        // Example:
        // sans: ['Inter', 'ui-sans-serif', 'system-ui', ...],
        // mono: ['Fira Code', 'ui-monospace', ...],
      }
    },
  },
  plugins: [],
}