export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/mathstuff/docs/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})