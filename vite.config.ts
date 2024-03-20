import react from '@vitejs/plugin-react-swc'
import {defineConfig} from 'vite'
import {configDefaults} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      provider: 'v8',
      exclude: [...configDefaults.coverage.exclude!, '*.config.js'],
      all: true,
    },
  },
  plugins: [react()],
  build: {
    target: 'esnext',
  },
})
