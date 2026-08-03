import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // El visor de folleto PDF (dflip) necesita pdf.js/three.js y su Web Worker
      // en el MISMO origen: un navegador nunca permite crear un Worker con una URL
      // cross-origin (tira SecurityError sin importar los headers CORS), así que
      // si esos archivos se cargan directo desde baic.com.ar mientras la app corre
      // en localhost, pdf.js nunca logra armar el hilo de render y el libro se
      // queda pegado (la tapa se ve, pero pasar de página tira "Cannot set
      // properties of undefined (setting 'skipFlip')"). Proxeamos esos assets acá
      // para que el browser los pida a localhost (mismo origen) y Vite los reenvíe
      // él mismo del lado del servidor (sin CORS de por medio).
      '/dflip-vendor': {
        target: 'https://baic.com.ar',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dflip-vendor/, '/wp-content/plugins/3d-flipbook-dflip-lite')
      }
    }
  }
})
