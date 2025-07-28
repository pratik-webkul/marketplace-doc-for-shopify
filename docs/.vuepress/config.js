
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
// import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'Multi-Vendor Marketplace for Shopify',
  base: '/',
  head: [['link', { rel: 'stylesheet', href: '/styles/index.css' }]],

  theme: defaultTheme({
    logo: 'image/mp-black.svg',
    navbar: [
        {
          text: 'Theme',
          children: [
            { text: 'Zenith', link: '/zenith/Introduction/' },
            { text: 'Classic', link: '/classic/Introduction/' },
          ]
        },
        { text: 'Get App', link: 'https://apps.shopify.com/multi-vendor-marketplace' },
        { text: 'Support', link: 'https://webkul.uvdesk.com/' }
      ],
    sidebar: {
      '/classic/': [
        {
          text: 'Introduction',
          collapsible: true,
          children: [
            { text: 'Getting Started', link: '/classic/Introduction/' },                     
            { text: 'Overview', link: '/classic/Introduction/Overview' }                  
          ]
        },
        // {
        //   text: 'Introduction',
        //   link: '//'
        // },
        {
          text: 'Configuration',
          collapsible: true,
          children: [
            { text: 'General configuration', link: '/classic/configuration/general-configration' },
            { text: 'Product configuration', link: '/classic/configuration/product-configration' },
            { text: 'Seller configuration', link: '/classic/configuration/Seller-configuration' }
            // Add more configuration if needed 
          ]
        },
        {
          text: 'Seller',
          collapsible: true,
          children: [
            { text: 'Seller Profile Page Settings', link: '/classic/seller/Seller-Profile-Page-Settings' },
            { text: 'Seller Notification', link: '/classic/seller/Seller-Notification' },
            { text: 'Advanced Seller Policy', link: '/classic/seller/Advanced-Seller-Policy' } 
          ]
        },
        {
          text: 'Product',
          collapsible: true,
          children: [
            //{ text: 'products', link: '/products/' },
            { text: 'Digital products', link: '/classic/products/Digital-products' },
            { text: 'Import products', link: '/classic/products/Import-products' },
            { text: 'Add products', link: '/classic/products/Add-products' },
            { text: 'Collection sync', link: '/classic/products/Collection-sync' }
          ]
        },
        {
          text: 'Commission', 
          collapsible: true, 
          children: [
              { text: 'Overview', link: '/classic/Commission/Overview' },
              {text:'Commission-Type',link:'/classic/Commission/Commission-Type'}
          ]
        },
        {
          text: 'Payment Flow',
          collapsible: true,
          children: [
            { text: 'Overview', link: '/classic/payment/overview' },
            { text: 'Stripe', link: '/classic/payment/Stripe' },
            { text: 'Stripe-configuration', link: '/classic/payment/Stripe-configuration' },
            { text: 'Paypal', link: '/classic/payment/Paypal' },
            { text: 'RazorPayX', link: '/classic/payment/RazorPayX' },
            { text: 'Seller-payment', link: '/classic/payment/Seller-payment' }

            // Add more payment-related links here if needed
          ]
        },
        {
          text: 'Featured-App',
          collapsible: true,
          children: 
          [
              { text: 'Overview', link: '/classic/Featured-App/Overview' },
              {
                text: 'Shipping',
                collapsible: true,
                children: [
                  { text: 'Marketplace Shipping', link: '/classic/Featured-App/Shipping/Marketplace Shipping' },
                  { text: 'USPS SHIPPING', link: '/classic/Featured-App/Shipping/USPS SHIPPING' },
                  { text: 'ECOM EXPRESS SHIPPING', link: '/classic/Featured-App/Shipping/ECOM EXPRESS SHIPPING' },
                  { text: 'CANADA POST SHIPPING', link: '/classic/Featured-App/Shipping/CANADA POST SHIPPING' },
                  { text: 'STORE PICKUP', link: '/classic/Featured-App/Shipping/STORE PICKUP' },
                  { text: 'AIR SPEED SHIPPING', link: '/classic/Featured-App/Shipping/AIR SPEED SHIPPING' },
                  { text: 'AUSTRALIA POST SHIPPING', link: '/classic/Featured-App/Shipping/AUSTRALIA POST SHIPPING' },
                  { text: 'UPS SHIPPING', link: '/classic/Featured-App/Shipping/UPS SHIPPING' },
                  { text: 'FEDEX SHIPPING', link: '/classic/Featured-App/Shipping/FEDEX SHIPPING' },
                  { text: 'VAMASHIP', link: '/classic/Featured-App/Shipping/VAMASHIP' },
                  { text: 'SHIPSTATION', link: '/classic/Featured-App/Shipping/SHIPSTATION' },
                  { text: 'BLUEDART', link: '/classic/Featured-App/Shipping/BLUEDART' },
                  { text: 'ENVIA SHIPPING', link: '/classic/Featured-App/Shipping/ENVIA SHIPPING' },
                  { text: 'DHL EXPRESS', link: '/classic/Featured-App/Shipping/DHL EXPRESS' },
                  { text: 'BRING SHIPPING', link: '/classic/Featured-App/Shipping/BRING SHIPPING' },
                  { text: 'POSTNL', link: '/classic/Featured-App/Shipping/POSTNL' },
                  { text: 'J&TEXPRESS SHIPPING', link: '/classic/Featured-App/Shipping/J&TEXPRESS SHIPPING' },
                  { text: 'SHIPMONDO', link: '/classic/Featured-App/Shipping/SHIPMONDO' },
                  { text: 'SENDLE SHIPPING', link: '/classic/Featured-App/Shipping/SENDLE SHIPPING' },
                  { text: 'SWISSPOST SHIPPING', link: '/classic/Featured-App/Shipping/SWISSPOST SHIPPING' },
                  { text: 'DELHIVERY', link: '/classic/Featured-App/Shipping/DELHIVERY' },
                  { text: 'EASYPOST SHIPPING', link: '/classic/Featured-App/Shipping/EASYPOST SHIPPING' },
                  { text: 'EASYSHIP', link: '/classic/Featured-App/Shipping/EASYSHIP' },
                  { text: 'SHIPROCKET SHIPPING', link: '/classic/Featured-App/Shipping/SHIPROCKET SHIPPING' },
                  { text: 'SBEEDY SHIPPING', link: '/classic/Featured-App/Shipping/SBEEDY SHIPPING' },
                  { text: 'SHIPPIT SHIPPING', link: '/classic/Featured-App/Shipping/SHIPPIT SHIPPING' }            
              ]
            },
            {
              text: 'Connector',
              collapsible: true,
              children: [
                { text: 'SELLER SHOPIFY STORE CONNECTOR', link: '/classic/Featured-App/Connector/SELLER SHOPIFY STORE CONNECTOR' },
                { text: 'WOOCOMMERCE CONNECTOR', link: '/classic/Featured-App/Connector/WOOCOMMERCE CONNECTOR' },
                { text: 'SHOPIFY ETSY CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY ETSY CONNECTOR' },
                { text: 'SHOPIFY MAGENTO CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY MAGENTO CONNECTOR' },
                { text: 'SHOPIFY PRESTASHOP CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY PRESTASHOP CONNECTOR' },
                { text: 'SQUAREUP CONNECTOR', link: '/classic/Featured-App/Connector/SQUAREUP CONNECTOR' },
                { text: 'LINNWORKS CONNECTOR', link: '/classic/Featured-App/Connector/LINNWORKS CONNECTOR' },
                { text: 'SOOPOS CONNECTOR', link: '/classic/Featured-App/Connector/SOOPOS CONNECTOR' },
                { text: 'BIGCOMMERCE CONNECTOR', link: '/classic/Featured-App/Connector/BIGCOMMERCE CONNECTOR' },
                { text: 'AMAZON CONNECTOR', link: '/classic/Featured-App/Connector/AMAZON CONNECTOR' },
                { text: 'SHOPIFY EBAY CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY EBAY CONNECTOR' },
                { text: 'DYTEL POS CONNECTOR', link: '/classic/Featured-App/Connector/DYTEL POS CONNECTOR' }       
              ]
            }
          ]
        }
      ],
      '/zenith/': [
        {
          text: 'Introduction',
          collapsible: true,
          children: [
            { text: 'Getting Started', link: '/zenith/Introduction/' },                     
            { text: 'Overview', link: '/zenith/Introduction/Overview' }                  
          ]
        },
        // {
        //   text: 'Introduction',
        //   link: '//'
        // },
        {
          text: 'Configuration',
          collapsible: true,
          children: [
            { text: 'General configuration', link: '/zenith/configuration/general-configration' },
            { text: 'Product configuration', link: '/zenith/configuration/product-configration' },
            { text: 'Seller configuration', link: '/zenith/configuration/Seller-configuration' }
            // Add more configuration if needed 
          ]
        },
        {
          text: 'Seller',
          collapsible: true,
          children: [
            { text: 'Seller Profile Page Settings', link: '/zenith/seller/Seller-Profile-Page-Settings' },
            { text: 'Seller Notification', link: '/zenith/seller/Seller-Notification' },
            { text: 'Advanced Seller Policy', link: '/zenith/seller/Advanced-Seller-Policy' } 
          ]
        },
        {
          text: 'Product',
          collapsible: true,
          children: [
            //{ text: 'products', link: '/products/' },
            { text: 'Digital products', link: '/zenith/products/Digital-products' },
            { text: 'Import products', link: '/zenith/products/Import-products' },
            { text: 'Add products', link: '/zenith/products/Add-products' },
            { text: 'Collection sync', link: '/zenith/products/Collection-sync' }
          ]
        },
        {
          text: 'Commission', 
          collapsible: true, 
          children: [
              { text: 'Overview', link: '/zenith/Commission/Overview' },
              {text:'Commission-Type',link:'/zenith/Commission/Commission-Type'}
          ]
        },
        {
          text: 'Payment Flow',
          collapsible: true,
          children: [
            { text: 'Overview', link: '/zenith/payment/overview' },
            { text: 'Stripe', link: '/zenith/payment/Stripe' },
            { text: 'Stripe-configuration', link: '/zenith/payment/Stripe-configuration' },
            { text: 'Paypal', link: '/zenith/payment/Paypal' },
            { text: 'RazorPayX', link: '/zenith/payment/RazorPayX' },
            { text: 'Seller-payment', link: '/zenith/payment/Seller-payment' }

            // Add more payment-related links here if needed
          ]
        },
        {
          text: 'Featured-App',
          collapsible: true,
          children: 
          [
              { text: 'Overview', link: '/zenith/Featured-App/Overview' },
              {
                text: 'Shipping',
                collapsible: true,
                children: [
                  { text: 'Marketplace Shipping', link: '/zenith/Featured-App/Shipping/Marketplace Shipping' },
                  { text: 'USPS SHIPPING', link: '/zenith/Featured-App/Shipping/USPS SHIPPING' },
                  { text: 'ECOM EXPRESS SHIPPING', link: '/zenith/Featured-App/Shipping/ECOM EXPRESS SHIPPING' },
                  { text: 'CANADA POST SHIPPING', link: '/zenith/Featured-App/Shipping/CANADA POST SHIPPING' },
                  { text: 'STORE PICKUP', link: '/zenith/Featured-App/Shipping/STORE PICKUP' },
                  { text: 'AIR SPEED SHIPPING', link: '/zenith/Featured-App/Shipping/AIR SPEED SHIPPING' },
                  { text: 'AUSTRALIA POST SHIPPING', link: '/zenith/Featured-App/Shipping/AUSTRALIA POST SHIPPING' },
                  { text: 'UPS SHIPPING', link: '/zenith/Featured-App/Shipping/UPS SHIPPING' },
                  { text: 'FEDEX SHIPPING', link: '/zenith/Featured-App/Shipping/FEDEX SHIPPING' },
                  { text: 'VAMASHIP', link: '/zenith/Featured-App/Shipping/VAMASHIP' },
                  { text: 'SHIPSTATION', link: '/zenith/Featured-App/Shipping/SHIPSTATION' },
                  { text: 'BLUEDART', link: '/zenith/Featured-App/Shipping/BLUEDART' },
                  { text: 'ENVIA SHIPPING', link: '/zenith/Featured-App/Shipping/ENVIA SHIPPING' },
                  { text: 'DHL EXPRESS', link: '/zenith/Featured-App/Shipping/DHL EXPRESS' },
                  { text: 'BRING SHIPPING', link: '/zenith/Featured-App/Shipping/BRING SHIPPING' },
                  { text: 'POSTNL', link: '/zenith/Featured-App/Shipping/POSTNL' },
                  { text: 'J&TEXPRESS SHIPPING', link: '/zenith/Featured-App/Shipping/J&TEXPRESS SHIPPING' },
                  { text: 'SHIPMONDO', link: '/zenith/Featured-App/Shipping/SHIPMONDO' },
                  { text: 'SENDLE SHIPPING', link: '/zenith/Featured-App/Shipping/SENDLE SHIPPING' },
                  { text: 'SWISSPOST SHIPPING', link: '/zenith/Featured-App/Shipping/SWISSPOST SHIPPING' },
                  { text: 'DELHIVERY', link: '/zenith/Featured-App/Shipping/DELHIVERY' },
                  { text: 'EASYPOST SHIPPING', link: '/zenith/Featured-App/Shipping/EASYPOST SHIPPING' },
                  { text: 'EASYSHIP', link: '/zenith/Featured-App/Shipping/EASYSHIP' },
                  { text: 'SHIPROCKET SHIPPING', link: '/zenith/Featured-App/Shipping/SHIPROCKET SHIPPING' },
                  { text: 'SBEEDY SHIPPING', link: '/zenith/Featured-App/Shipping/SBEEDY SHIPPING' },
                  { text: 'SHIPPIT SHIPPING', link: '/zenith/Featured-App/Shipping/SHIPPIT SHIPPING' }            
              ]
            },
            {
              text: 'Connector',
              collapsible: true,
              children: [
                { text: 'SELLER SHOPIFY STORE CONNECTOR', link: '/zenith/Featured-App/Connector/SELLER SHOPIFY STORE CONNECTOR' },
                { text: 'WOOCOMMERCE CONNECTOR', link: '/zenith/Featured-App/Connector/WOOCOMMERCE CONNECTOR' },
                { text: 'SHOPIFY ETSY CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY ETSY CONNECTOR' },
                { text: 'SHOPIFY MAGENTO CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY MAGENTO CONNECTOR' },
                { text: 'SHOPIFY PRESTASHOP CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY PRESTASHOP CONNECTOR' },
                { text: 'SQUAREUP CONNECTOR', link: '/zenith/Featured-App/Connector/SQUAREUP CONNECTOR' },
                { text: 'LINNWORKS CONNECTOR', link: '/zenith/Featured-App/Connector/LINNWORKS CONNECTOR' },
                { text: 'SOOPOS CONNECTOR', link: '/zenith/Featured-App/Connector/SOOPOS CONNECTOR' },
                { text: 'BIGCOMMERCE CONNECTOR', link: '/zenith/Featured-App/Connector/BIGCOMMERCE CONNECTOR' },
                { text: 'AMAZON CONNECTOR', link: '/zenith/Featured-App/Connector/AMAZON CONNECTOR' },
                { text: 'SHOPIFY EBAY CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY EBAY CONNECTOR' },
                { text: 'DYTEL POS CONNECTOR', link: '/zenith/Featured-App/Connector/DYTEL POS CONNECTOR' }       
              ]
            }
          ]
        }
      ],
    }

    // navbar: ['/', '/get-started'],
  }),
  bundler: viteBundler(),
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
})




