import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // added for git pages deployment
  // ads dist folder
  base: 'https://xtina-lt.github.io/first-vite/',
  plugins: [react()],
})
