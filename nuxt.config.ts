// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Wedding Invitation | Rasniya & Afsad',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'We cordially invite you to celebrate the blessed Nikah of Rasniya & Afsad on 30th August 2026 at 4:00 PM.' },
        { property: 'og:title', content: 'Wedding Invitation | Rasniya & Afsad' },
        { property: 'og:description', content: 'In the Name of Allah, the Most Gracious, the Most Merciful. Join us in celebrating the wedding of Rasniya & Afsad.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
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
