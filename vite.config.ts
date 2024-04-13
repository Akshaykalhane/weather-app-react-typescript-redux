import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_KEY':JSON.stringify(process.env.API_KEY)
  }
})
