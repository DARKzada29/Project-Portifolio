import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '5173-i4996081ud01y01smqmvm-c8d67680.manusvm.computer',
      '.manusvm.computer'
    ]
  }
})
