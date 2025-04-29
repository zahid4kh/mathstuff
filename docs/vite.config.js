export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/mathstuff/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})