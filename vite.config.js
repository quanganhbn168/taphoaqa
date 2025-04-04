import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/admin'),
            '@core': path.resolve(__dirname, 'resources/js/admin/@core'),
            '@layouts': path.resolve(__dirname, 'resources/js/admin/@layouts'),
            '@components': path.resolve(__dirname, 'resources/js/admin/components'),
            '@pages': path.resolve(__dirname, 'resources/js/admin/pages'),
            '@utils': path.resolve(__dirname, 'resources/js/admin/utils'),
        },
    },
})
