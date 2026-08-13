// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Joint Wedding Invitation | Afsad & Rasniya | Shamnad & Fabna Sherin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'We cordially invite you to celebrate the joint wedding of Afsad & Rasniya and Shamnad & Fabna Sherin on 30th August 2026 at 4:00 PM.' },
        { property: 'og:title', content: 'Joint Wedding Invitation | Afsad & Rasniya | Shamnad & Fabna Sherin' },
        { property: 'og:description', content: 'In the Name of Allah. Join us in celebrating the joint wedding of Afsad & Rasniya and Shamnad & Fabna Sherin at Atlantis Convention Centre, Vengara.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600;700;800;900&family=Great+Vibes&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  ssr: false
})