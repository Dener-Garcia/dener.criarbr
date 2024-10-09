import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // comment base line for deploy out github pages
  // base: '/site-portfolio-dener-criarbr',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        index_en: resolve(__dirname, 'src/pages/index-en.html'),
        autista_live: resolve(__dirname, 'src/pages/autista-live.html'),
        autista_live_en: resolve(__dirname, 'src/pages/autista-live-en.html'),
        pop_cinema: resolve(__dirname, 'src/pages/pop-cinema.html'),
        pop_cinema_en: resolve(__dirname, 'src/pages/pop-cinema-en.html'),
        lit_academy: resolve(__dirname, 'src/pages/lit-academy.html'),
        lit_academy_en: resolve(__dirname, 'src/pages/lit-academy-en.html'),
        company_geradores: resolve(__dirname, 'src/pages/company-geradores.html'),
        company_geradores_en: resolve(__dirname, 'src/pages/company-geradores-en.html'),
        blog: resolve(__dirname, 'src/pages/blog.html'),
        blog_en: resolve(__dirname, 'src/pages/blog-en.html'),
      },
    },
  },
})
