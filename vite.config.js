import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/am-almeidar/', // nombre EXACTO del repo
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                tools_trail: resolve(__dirname, 'tools_trail.html') // segundo HTML
            }
        }
    }
})
