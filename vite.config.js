import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tourist_site/', // replace REPO_NAME with your GitHub repo name
  plugins: [react()],
})
