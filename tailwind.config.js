module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.{js, tsx}',
    './components/**/*.{js, tsx}'
  ]
}
