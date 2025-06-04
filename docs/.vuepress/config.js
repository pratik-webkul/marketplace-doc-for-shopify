import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'Multi-Vendor Marketplace for Shopify',
  head: [['link', { rel: 'stylesheet', href: '/styles/index.css' }]],


  theme: defaultTheme({
    logo: 'image/mp-black.svg',
    
    sidebar: [
      {
        text: 'Introduction',
        link: '/'
      },
      {
        text: 'Product',
        collapsible: true,
        children: [
          { text: 'Products', link: 'products/' },
          { text: 'Configuration', link: 'products/configuration' }
        ]
      },
      {
        text: 'API',
        collapsible: true,
        children: [
          { text: 'Introduction', link: '/introduction/requirements' },
          { text: 'Advanced Usage', link: 'introduction/installation' }
        ]
      }
    ]

    // navbar: ['/', '/get-started'],
  }),
  bundler: viteBundler(),
})
