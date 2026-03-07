import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'] // Tek kopya React kullanılmasını zorla
  }
})




//import { defineConfig } from 'vite' 
//import react from '@vitejs/plugin-react'
 //import tailwindcss from '@tailwindcss/vite' 
// https://vite.dev/config/ 
// export default defineConfig({ plugins: [react(), tailwindcss()], })