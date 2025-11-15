
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace REPO_NAME with your GitHub repo name (e.g., 'marketing-phd-site').
// If your repo is <username>.github.io, set base: '/' instead.
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/',
})
