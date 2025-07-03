import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
// import { searchPlugin } from '@vuepress/plugin-search'


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
        text: 'Configuration',
        collapsible: true,
        children: [
          { text: 'General configuration', link: 'configuration/general-configration' },
          { text: 'Product configuration', link: 'configuration/product-configration' },
          { text: 'Seller configuration', link: 'configuration/Seller-configuration' }
          // Add more configuration if needed 
        ]
      },
      {
        text: 'Product',
        collapsible: true,
        children: [
          //{ text: 'products', link: 'products/' },
          { text: 'Digital products', link: 'products/Digital-products' },
          { text: 'Import products', link: 'products/Import-products' },
          { text: 'Add products', link: 'products/Add-products' },
          { text: 'Collection sync', link: 'products/Collection-sync' }
        ]
      },
      {
        text: 'Payment Flow',
        collapsible: true,
        children: [
          { text: 'Overview', link: 'payment/overview' },
          { text: 'Stripe', link: 'payment/Stripe' },
          { text: 'Stripe-configuration', link: 'payment/Stripe-configuration' },
          { text: 'Paypal', link: 'payment/Paypal' },
          { text: 'RazorPayX', link: 'payment/RazorPayX' }
          // Add more payment-related links here if needed
        ]
      }
    ]

    // navbar: ['/', '/get-started'],
  }),
  bundler: viteBundler(),
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
})
