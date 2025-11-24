import { defineConfig } from 'vite'
import { resolve } from 'path'
import htmlInject from 'vite-plugin-html-inject'

export default defineConfig({
  plugins: [
    htmlInject({
      verbose: true,   // MUESTRA EN CONSOLA SI LOS INCLUDES SE CARGAN
    })
  ],

  base: '/am-almeidar/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tools_trail: resolve(__dirname, 'tools_trail.html')
      }
    }
  }
})


